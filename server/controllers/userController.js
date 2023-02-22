const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign({
    id, email, role
  }, process.env.SECRET_KEY, {
    expiresIn: '24h'
  })
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body

    if (!email && !password) {
      return next(ApiError.badRequest('Некореектные email или password'))
    }

    //Проверка, может УЖЕ есть такой пользователь в БД
    const candidate = await User.findOne({ where:  {email} })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже есть'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({
      email, role, password: hashPassword
    })

    //При создании корзины нужно передать АйДи пользователя
    //А пользователь только что создался ВЫШЕ и у него есть АйДи
    const basket = await Basket.create({
      userId: user.id
    })

    //В sign первый аргумент то, что зашифруется в payload
    //Здесь у пользователя уже есть роль, которая присваивается по дефолту
    const token = generateJwt(user.id, email, user.role)

    return res.json({token})
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where:  {email} })

    if (!user) {
      return next(ApiError.badRequest(ApiError.internal('Пользователь не найден')))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)

    if (!comparePassword) {
      return next(ApiError.badRequest(ApiError.internal('Указан неверный пароль')))
    }

    const token = generateJwt(user.id, email, user.role)
    return res.json({token})
  }

  //Функция проверки: авторизован пользователь или нет
  async check(req, res, next) {
    //Тут Миддлвер уже отработал и у юзера точно есть токен
    const token = generateJwt(req.user.id, req.user.email, req.user.role)

    res.json({token})
  }
}

//На выходе: новый объект созданный из этого класса
module.exports = new UserController()
const ApiError = require("../error/ApiError")

class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  //Функция проверки: авторизован пользователь или нет
  async check(req, res, next) {
    //Можно получать параметры строки запроса
    const { id } = req.query

    if (!id) {
      return next(ApiError.badRequest('Не задан ID'))
    }

    res.json(id)
  }
}

//На выходе: новый объект созданный из этого класса
module.exports = new UserController()
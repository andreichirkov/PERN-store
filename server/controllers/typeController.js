const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
  //Создание типа
  async create(req, res) {
    //У пост запроса есть тело -> извлекаем сразу название Типа
    const { name } = req.body
    const type = await Type.create({name})
    return res.json(type)
  }

  //Получение всех типов
  async getAll(req, res) {
    //Здесь будет массив объектов полученный из БД (данная таблица)
    const types = await Type.findAll()
    return res.json(types)
  }
}

module.exports = new TypeController()
const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      await img.mv(path.resolve(__dirname, '..', 'static', fileName))

      //Передаем тут НАЗВАНИЕ ФАЙЛА, потом получить файл можно будет по названию
      //Рейтинг по дефолту сам установится нулевым
      const device = await Device.create({
        name, price, brandId, typeId, img: fileName
      })

      //Тут device уже создался и уже присвоился ID
      if (info) {
        //Из formData данные приходят в виде строки, надо распарсить в JS-объект
        info = JSON.parse(info)
        info.forEach(i => DeviceInfo.create({
          title: i.title,
          description: i.description,
          deviceId: device.id
        }))
      }

      return res.json(device)
    } catch (e) {
      //Тут передаем пришедшее сообщение об ошибке
      next(ApiError.badRequest(e.message))
    }
  }

  //Тут если нет Квери-параметров, то возвращаем все девайсы
  //Если есть, то будет фильтрация по ним
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query
    page = page || 1
    limit = limit || 9

    //Расчитывание отсутпа товаров
    let offset = page * limit - limit

    let devices

    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset })
    }

    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: {brandId}, limit, offset })
    }

    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: {typeId}, limit, offset })
    }

    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: {brandId, typeId}, limit, offset })
    }

    return res.json(devices)
  }

  async getOne(req, res) {
    const { id } = req.params
    const device = await Device.findOne({
      where: {id},
      include: [{ model: DeviceInfo, as: 'info' }]
    })

    return res.json(device)
  }
}

module.exports = new DeviceController()
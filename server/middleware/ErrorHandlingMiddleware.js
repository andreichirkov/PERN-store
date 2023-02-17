const ApiError = require('../error/ApiError')

module.exports = function (error, req, res, next) {
  //Если класс ошибки ApiError
  if (error instanceof ApiError) {
    //Тогда на клиент вернем ответ со Статус Кодом полученным из ошибки
    return res.status(error.status).json({
      message: error.message
    })
  }
  //Если ошибка не инстанс ApiError, тогда вернем ошибку 500
  return res.status(500).json({
    message: 'Неизвестная ошибка сервера!'
  })
}
const jwt = require('jsonwebtoken')

module.exports = function (role) {
  return  function (req, res, next) {
    //Метод OPTIONS сразу пропускаем
    if (req.method === 'OPTIONS') {
      next()
    }

    try {
      //Токен обычно лежит в Хедерс Ауторизейшн
      const token = req.headers.authorization.split(' ')[1] //Bearer 439853895
      if (!token) {
        return  res.status(401).json({message: 'Не авторизован'})
      }

      //Проверка токена (сравнение с секретным ключом шифрования)
      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      if (decoded.role !== role) {
        return res.status(403).json({message: 'Нет доступа'})
      }

      //В поле юзер добавляем данные этого токена
      req.user = decoded
      next()
    } catch (e) {
      res.status(401).json({message: 'Не авторизован'})
    }
  }
}
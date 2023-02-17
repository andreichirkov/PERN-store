require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Этот Мидлверс с ошибками замыкающий!
//На нем нет вызова функции next
//Ответ возвращается на клиент и работа заканчивается
app.use(errorHandler)

const start = async () => {
  try {
    //Устанавливается подключение к БД
    await sequelize.authenticate()
    //Сверяет состояние БД с описанной схемой данных
    await sequelize.sync()
    app.listen(PORT, () => console.log('Запустилось приложение на порту: ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

start()


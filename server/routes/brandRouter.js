const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandConttoller')

//Создать Бренд
router.post('/', brandController.create)

//Получить все Бренды
router.get('/', brandController.getAll)

module.exports = router
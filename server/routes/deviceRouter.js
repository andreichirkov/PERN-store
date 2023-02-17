const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')


//Тоже создание Девайса и получение
router.post('/', deviceController.create)
router.get('/', deviceController.getAll)

//И получение одного конкретного девайса
router.get('/:id', deviceController.getOne)

module.exports = router
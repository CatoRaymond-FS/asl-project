//use express
const express = require('express')
const app = express()
const router = express.Router()
const productCtrl = require('../controllers/products')

router.get('/', productCtrl.index)
router.get('/new', productCtrl.form)
router.get('/:id', productCtrl.show)
router.get('/:id/edit', productCtrl.form)
router.post('/', productCtrl.create)
router.post('/:id', productCtrl.update)
router.delete('/:id', productCtrl.delete)
router.post('/:id/delete', productCtrl.delete)

module.exports = router
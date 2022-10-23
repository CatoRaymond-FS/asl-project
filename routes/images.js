//use express
const express = require('express')
const app = express()
const router = express.Router()
const imageCtrl = require('../controllers/images')
const { uploadImage } = require('../middlewares')


router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)
router.post('/', imageCtrl.create)
router.post('/:id', imageCtrl.update)
router.delete('/:id', imageCtrl.remove)
router.get('/:id/delete', imageCtrl.remove)
router.post('/', imageCtrl.create, uploadImage)
router.post('/:id', imageCtrl.update, uploadImage)



module.exports = router
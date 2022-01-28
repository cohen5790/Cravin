const express = require('express')
const router = express.Router()
const restoCtrl = require('../controllers/commercial')

router.get('/index', restoCtrl.index)
router.get('/new', restoCtrl.addResto)
router.post('/new', restoCtrl.createResto)
router.delete('/show/:id', restoCtrl.deleteResto)
router.get('/show/:id', restoCtrl.show)


module.exports = router

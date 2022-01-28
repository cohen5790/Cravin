const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/customer')

router.get('/profile', userCtrl.addSearch)
router.get('/index', userCtrl.indexMatches)

router.get('/show/:id', userCtrl.show)

module.exports = router

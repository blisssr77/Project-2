// Import routes
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const itemCtrl = require('../controllers/itemController')

router.use(isAuthenticated)
router.get('/greyshoppingmall', itemCtrl.home)
router.get('/new', itemCtrl.new)
router.get('/cart', itemCtrl.cart)
router.get('/home/summerSpring', itemCtrl.summerSpringPage)
router.get('/home/fallWinter', itemCtrl.fallWinterPage)
router.get('/home/menCologne', itemCtrl.menColognePage)
router.post('/cart', itemCtrl.addToCart)
router.get('/sniper/:id', itemCtrl.show)


module.exports = router
// Import routes
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const itemCtrl = require('../controllers/itemController')

router.use(isAuthenticated)
router.get('/greyshoppingmall', itemCtrl.home)
router.get('/new', itemCtrl.new)
router.get('/cart', itemCtrl.cart)
router.get('/home/rifle', itemCtrl.riflePage)
router.get('/home/pistol', itemCtrl.pistol)
router.get('/home/machineGun', itemCtrl.machineGun)
router.get('/home/sniper', itemCtrl.sniperPage)
router.get('/home/armor', itemCtrl.armor)
router.get('/home/mustHaveItem', itemCtrl.mustHaveItem)
router.post('/cart', itemCtrl.addToCart)
router.get('/sniper/:id', itemCtrl.show)


module.exports = router
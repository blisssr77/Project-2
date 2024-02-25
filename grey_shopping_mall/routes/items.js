// Import routes
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const itemCtrl = require('../controllers/itemController')

router.use(isAuthenticated)
router.get('/greyshoppingmall', itemCtrl.home)
router.get('/new', itemCtrl.new)
router.get('/cart', itemCtrl.cart)
router.get('/home/melee', itemCtrl.melee)
router.get('/home/pistol', itemCtrl.pistol)
router.get('/home/machineGun', itemCtrl.machineGun)
router.get('/home/sniper', itemCtrl.sniper)
router.get('/home/armor', itemCtrl.armor)
router.get('/home/mustHaveItem', itemCtrl.mustHaveItem)


module.exports = router
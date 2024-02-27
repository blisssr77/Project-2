// Import routes
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const itemCtrl = require('../controllers/itemController')

router.use(isAuthenticated)
router.get('/greyshoppingmall', itemCtrl.home)
router.get('/new', itemCtrl.new)
router.get('/wishList', itemCtrl.wishList)
router.get('/home/summerSpring', itemCtrl.summerSpringPage)
router.get('/home/fallWinter', itemCtrl.fallWinterPage)
router.get('/home/menCologne', itemCtrl.menColognePage)
router.post('/wishList', itemCtrl.addToWishList)
router.get('/summerSpring/:id', itemCtrl.show)


module.exports = router
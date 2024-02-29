// Import routes
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const itemCtrl = require('../controllers/itemController')

router.use(isAuthenticated)
router.get('/BRiiZE', itemCtrl.home)
router.get('/new', itemCtrl.new)
router.post('/BRiiZE',itemCtrl.create)
router.get('/wishList', itemCtrl.wishList)
router.get('/account', itemCtrl.accountPage)

router.get('/BRiiZE/springSummer', itemCtrl.springSummerPage)
router.get('/BRiiZE/fallWinter', itemCtrl.fallWinterPage)
router.get('/BRiiZE/menCologne', itemCtrl.menColognePage)
router.get('/BRiiZE/special', itemCtrl.specialPage)

router.get('/account/:id/edit', itemCtrl.accountEdit)  // need to fix
router.get('/springSummer/:id', itemCtrl.show)  // need to fix

router.post('/wishList', itemCtrl.addToWishList)  // need to fix


module.exports = router
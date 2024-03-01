// Import routes
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const itemCtrl = require('../controllers/itemController')

router.use(isAuthenticated)
router.get('/BRiiZE', itemCtrl.home)

router.get('/BRiiZE/springSummer', itemCtrl.springSummerPage)
router.get('/BRiiZE/fallWinter', itemCtrl.fallWinterPage)
router.get('/BRiiZE/menCologne', itemCtrl.menColognePage)
router.get('/BRiiZE/special', itemCtrl.specialPage)

router.get('/new', itemCtrl.new)
router.post('/BRiiZE/special',itemCtrl.create)
router.get('/wishList', itemCtrl.wishList)
router.get('/account', itemCtrl.accountPage)

router.get('/BRiiZE/springSummerSeed', itemCtrl.springSummerSeed)
router.get('/BRiiZE/fallWinterSeed', itemCtrl.fallWinterSeed)


router.get('/springSummer/:id', itemCtrl.show)
router.delete('/springSummer/:id', itemCtrl.destroy)
router.get('/account/:id/edit', itemCtrl.accountEdit)


router.post('/wishList', itemCtrl.addToWishList)


module.exports = router
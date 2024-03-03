// Import routes
const router = require('express').Router();
const isAuthenticated = require('../controllers/isAuthenticated');
const itemCtrl = require('../controllers/itemController');

// Apply isAuthenticated middleware to all routes
router.use(isAuthenticated);

// Static and creation routes
router.get('/BRiiZE', itemCtrl.home);
router.get('/new', itemCtrl.new);
router.post('/BRiiZE/special', itemCtrl.create);
router.post('/wishList', itemCtrl.addToWishList);

// Index and seed routes
router.get('/BRiiZE/springSummer', itemCtrl.springSummerPage);
router.get('/BRiiZE/fallWinter', itemCtrl.fallWinterPage);
router.get('/BRiiZE/menCologne', itemCtrl.menColognePage);
router.get('/BRiiZE/special', itemCtrl.specialPage);

router.get('/BRiiZE/springSummerSeed', itemCtrl.springSummerSeed);
router.get('/BRiiZE/fallWinterSeed', itemCtrl.fallWinterSeed);
router.get('/BRiiZE/menCologneSeed', itemCtrl.menCologneSeed);


// Show routes 
router.get('/springSummer/:id', itemCtrl.SSShow);
router.get('/fallWinter/:id', itemCtrl.FWShow);
router.get('/menCologne/:id', itemCtrl.MShow);
router.get('/special/:id', itemCtrl.SShow);

// Account WishList Edit Delete routes
router.get('/wishList', itemCtrl.wishList);
router.get('/account', itemCtrl.accountPage);
router.get('/account/edit', itemCtrl.accountEdit)
router.get('/account/:id/edit', itemCtrl.accountEdit);
router.delete('/springSummer/:id', itemCtrl.SSDestroy);
router.delete('/fallWinter/:id', itemCtrl.FWDestroy);
router.delete('/menCologne/:id', itemCtrl.MDestroy);
router.delete('/special/:id', itemCtrl.SDestroy);
router.get('/special/:id/edit', itemCtrl.edit)
router.put('/BRiiZE/special/:id', itemCtrl.update)
router.post('/wishList', itemCtrl.addToWishList)

router.post('/logout', itemCtrl.logout)

module.exports = router;
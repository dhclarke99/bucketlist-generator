const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bucketListRoutes = require('./bucketListRoutes');
const bucketListItemRoutes = require('./bucketListItemRoutes');

router.use('/users', userRoutes);
router.use('/bucketlists', bucketListRoutes);
router.use('/bucketlistitems', bucketListItemRoutes);

module.exports = router; 
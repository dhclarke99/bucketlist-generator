const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bucketListRoutes = require('./bucketListRoutes');
const bucketListItemRoutes = require('./bucketListItemRoutes');
const emailRoutes = require('./emailRoutes');

router.use('/users', userRoutes);
router.use('/bucketlists', bucketListRoutes);
router.use('/bucketlistitems', bucketListItemRoutes);
router.use('/email', emailRoutes);

module.exports = router; 
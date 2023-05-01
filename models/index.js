const User = require('./user');
const BucketList = require('./bucketlist');
const BucketListItem = require('./bucketlist-item');

User.hasMany(BucketList, {
  foreignKey: 'user_id',
});

BucketList.hasMany(BucketListItem, {
    foreignKey: 'bucketList_id',
  });




module.exports = { User, BucketList, BucketListItem };
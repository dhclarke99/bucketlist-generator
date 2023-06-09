const User = require('./user');
const BucketList = require('./bucketlist');
const BucketListItem = require('./bucketlist-item');

User.hasMany(BucketList, {
  foreignKey: 'user_id',
});
BucketList.belongsTo(User,{
  foreignKey: 'user_id',
})

BucketList.hasMany(BucketListItem, {
    foreignKey: 'bucket_list_id',
  });
BucketListItem.belongsTo(BucketList,{
  foreignKey: 'bucket_list_id',
 
});



module.exports = { User, BucketList, BucketListItem };
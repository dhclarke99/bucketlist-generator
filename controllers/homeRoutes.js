const router = require('express').Router();
const { BucketList, User, BucketListItem } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bucketListData = await BucketList.findAll({
      include: [{model:BucketListItem}], 
    });


    // Pass serialized data and session flag into template
    const listData = bucketListData.map((list) => list.get({ plain: true }));



    res.render('homepage', { 
      listData
    
    });
   
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/profile',  withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);

    const bucketListData = await BucketList.findAll( {
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: BucketListItem,
        }
      ],
    });


    const user = userData.get({ plain: true });
    const bucketLists = bucketListData.map(list => list.get({plain: true}))
    // console.log(bucketLists)

    res.render('profile',  {
      ...user,
      bucketLists,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

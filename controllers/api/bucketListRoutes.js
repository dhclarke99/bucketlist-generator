const router = require('express').Router();
const { BucketList, BucketListItem, User } = require('../../models');
const withAuth = require('../../utils/auth');

// *Get all lists
router.get('/', async (req, res) => {
    try {
      const bucketListData = await BucketList.findAll({
        include: [{model:BucketListItem}],
      });
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
        res.status(200).json(bucketListData);
    //   });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// *Get all lists by user_id
  router.get('/:id', withAuth, async (req, res) => {
    try {
      const bucketListData = await User.findByPk({
       
        include: [{model: BucketList}],
      });
      
  
      if (!bucketListData) {
        res.status(404).json({ message: 'No list found with this id!' });
        return;
      }
  
      res.status(200).json(bucketListData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });


// *Posting a post
router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req)
    console.log(req.session.user_id)
    const bucketListData = await BucketList.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(bucketListData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router
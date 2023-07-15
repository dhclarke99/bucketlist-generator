const router = require('express').Router();
const { BucketListItem } = require('../../models');

// *Posting a bucket list item
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
      const bucketListItemData = await BucketListItem.create({
        ...req.body,
        // user_id: req.session.user_id,
      });
  
      res.status(200).json(bucketListItemData);
    } catch (err) {
        console.log(err)
      res.status(400).json(err);
    }
  });
// get 
  router.get('/', async (req, res) => {
    try {
      const bucketListItemData = await BucketListItem.findAll({
        // include: [{model:BucketListItem}],
      });
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
        res.status(200).json(bucketListItemData);
    //   });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // *deleting all bucket list items
router.delete('/:id', async (req, res) => {
  try {
      console.log(req.body)
    const bucketListItemData = await BucketListItem.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(bucketListItemData);
  } catch (err) {
      console.log(err)
    res.status(400).json(err);
  }
});


  module.exports = router
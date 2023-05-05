
const router = require('express').Router();
const email = require("../../utils/email");

router.post('/', async (req, res) => { 
  console.log(`request.body:${JSON.stringify(req.body)}`)

  if (!req.body.email) {
    console.log('ERROR! no email provided');
    res.status(400).json({"error": "no email provided"}).end()
  } else {
    email.shareBucketList(req.body.email)
    res.status(200).end();
  }

});

module.exports = router
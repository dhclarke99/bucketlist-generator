const nodemailer = require("nodemailer");
const { BucketList } = require("../models");

// async..await is not allowed in global scope, must use a wrapper
async function shareBucketList(emailAddress) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "DukeLurkin@outlook.com", // generated ethereal user
      pass: "passpass1", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'DukeLurkin@outlook.com', // sender address
    to: emailAddress, // list of receivers
    subject: "My Bucket List ✔", // Subject line
    text: "You can create your own Bucket List at: https://shielded-thicket-91990.herokuapp.com/", // plain text body
    html: "<b>You can create your own Bucket List at: https://shielded-thicket-91990.herokuapp.com/</b>", // html body
  });

  if (info.accepted.length > 0) {
    console.log(`message accepted for recipient: ${info.accepted[0]}`);
  } else {
    console.log(`message rejected for recipient: ${info.rejected[0]}`);
  }
}

module.exports = { shareBucketList }

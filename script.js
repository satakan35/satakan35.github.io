// let transporter = nodemailer.createTransport(transport[, defaults]);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'satakan35@gmail.com',
    pass: 'sharklove'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'satakan35@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
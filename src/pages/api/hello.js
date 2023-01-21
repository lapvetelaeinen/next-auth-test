const nodemailer = require('nodemailer');

export default function handler(req, res) {


// create Nodemailer transport object
let transporter = nodemailer.createTransport({
  host: 'email-smtp.eu-west-2.amazonaws.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
      user: 'AKIAXPCM264NLDVDRNVT',
      pass: 'BFQWY/VWjQlUBRsE3TP7xWaIu/h5UHxuc/WEPQl+Fau6'
  }
});

// send email
transporter.sendMail({
    from: 'sender@rougeumea.se',
    to: 'filip.lapvetelainen@gmail.com',
    subject: 'Hello',
    text: 'Hello, world!'
}, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
});
}




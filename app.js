const express = require("express");
const nodemailer = require('nodemailer');

const app= express();

app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/portfolio.html");
});

let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Successfully.");
});

app.post('/send-email', (req,res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.Env_User,
      pass: process.env.Env_AppPass,
    }
  });

  let mailOptions = {
    from: '"Itsik" <itsik100@gmail.com>',
    to: 'itsikh100@gmail.com',
    subject: req.body.subject,
    text: req.body.body + ' email: ' + req.body.from
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return console.log(error);
    }

    console.log('Message sent: %s', info.messageId);

    return res.json({})
  });
});

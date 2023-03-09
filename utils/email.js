const nodemailer = require('nodemailer');

exports.generateMail = async (user, joke) => {
  const subject = 'Great Joke';
  const text =
  `${user.firstName} did you know? \n\n
    ${joke}
  `;

  sendMail(user, subject, text);
};

const sendMail = (user, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Fill out mail options with the infromation needed
  const mailOptions = {
    from: process.env.EMAIL,
    to: `${user.email}`,
    subject,
    text
  };

  // Send email or catch the error e.g. no valid email to send
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

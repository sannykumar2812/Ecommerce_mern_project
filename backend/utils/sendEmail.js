//saara nodemailer module se  bs mailoptions(to,sub,text) userController/forgot password wale function se
const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  /* if its not work properlly then use 
    host: "smtp.gmail.com",
    port: 465,    
    for email services and also on low security for sender mail in google security
  */
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
// saara nodemailer module 
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

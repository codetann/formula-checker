import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const config = {
  service: "gmail",
  auth: {
    user: process.env.SELF_EMAIL,
    pass: process.env.SELF_PASSWORD,
  },
};

const options = {
  from: process.env.SELF_EMAIL,
  to: process.env.WIFE_EMAIL,
};

function sendMail(subject, text) {
  const transporter = nodemailer.createTransport(config);
  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export { sendMail };

import nodemailer from "nodemailer";

async function sendEmail(mail, data = null) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${mail.display}" < ${process.env.MAIL}>`,
      to: mail.to,
      subject: `${mail.subject} ✔`,
      text: mail.text,
      //html: "<b>Hello world?</b>",
    });

    //console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(`mail error=>> ${error.message}`);
  }
}

export default sendEmail;

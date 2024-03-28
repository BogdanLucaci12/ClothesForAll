require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'clotherforall@gmail.com',
        pass: process.env.REACT_APP_EMAIL_PASS,
    },
});
exports.handler = async (event, context) => {
    const mailOptions = {
        from: "your_email_address",
        to: "bogdanlucaci15@gmail.com",
        subject: "Confirmare comandă",
        text: "Comanda dvs. a fost plasată cu succes!",
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log(error);
    }
};
require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SEND_EMAIL_EMAIL,
        pass: process.env.SEND_EMAIL_PASS,
    },
});
const text = ()=>{
    
}
exports.handler = async (event) => {
    const jasonBase=atob(event.body)
    const { email, id, adresaSelectata, total  } = JSON.parse(jasonBase)
    const {adresa, judet, localitate, telefon}=adresaSelectata
    const mailOptions = {
        from: process.env.SEND_EMAIL_EMAIL,
        to: email,
        subject: " Mulțumim pentru comanda dvs.!",
        text: `Vă mulțumim că ați ales ClothesForAll!

Apreciem comanda dvs. și așteptăm cu nerăbdare să vă trimitem produsele.

Detalii comandă:
* Număr comandă: ${id}

Total: ${total} RON

Informații de livrare:
* Adresa: ${adresa}, ${localitate}, ${judet}
* Telefon: ${telefon}
Vă mulțumim din nou pentru comanda dvs.!

Sperăm că veți fi mulțumit de produsele achiziționate.

Cu stimă,

Echipa ClothesForAll`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "EmailSentSuccessfully" })
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send email", error })
        };
    }
};
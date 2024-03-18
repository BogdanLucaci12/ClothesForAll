
import CryptoJS from "crypto-js";
const mailyr = process.env.REACT_APP_react;
export const encryptedData = (datasend) => {
    try {
        const data = CryptoJS.AES.encrypt(datasend, mailyr).toString();
        return data
    }
    catch (err) {
        console.log(err)
    }
}

export const decryptData = (datasend) => {
    try{
        const data = CryptoJS.AES.decrypt(datasend, mailyr).toString(CryptoJS.enc.Utf8)
        return data
    }
    catch(err){
        console.log(err)
    }
}
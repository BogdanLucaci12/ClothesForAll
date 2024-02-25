import { useState } from "react";
const Dissapear= () =>{
    const [labelOffEmail, setLabelOffEmail] = useState(false);
    const [labelOffPassword, setLabelOffPassword] = useState(false);
    const [labelOffName, setLabelOffName] = useState(false);
    const [labelOffconfirmPassword, setLabelOffconfirmPassword] = useState(false);
    const handleInputFocus = (e) => {
        const inputName = e.target.name;
        if (inputName === "email") {
            setLabelOffEmail(!!e.target.value); // true if there is a value, false otherwise
        } else if (inputName === "password") {
            setLabelOffPassword(!!e.target.value);
        }
        else if (inputName === "nume") {
            setLabelOffName(!!e.target.value); // true if there is a value, false otherwise
    }
        else if (inputName === "confirmPassword") {
            setLabelOffconfirmPassword(!!e.target.value); }// true if there is a value, false otherwise
        }
            return {
        handleInputFocus,
        labelOffEmail,
        labelOffPassword,
        labelOffName,
        labelOffconfirmPassword
    }

}

export default Dissapear
import { useContext, useState } from "react"
import { AdaugaAdresabttn, ExtAdresa, MesajSucces, Titlu } from "../AdrressContainer/useradress.styles"
import { CloseSign, ModifiyDataContainer, ModifiyDataMainDiv } from "../aboutuserContainer/aboutuser.styles"
import AlegeData from "./datepicker.component"
import { AddCard } from "../../../utility/firebase"
import { UserContext } from "../../../context/user.context"

const warning = { border: "4px solid red" }
const noWarning={}
const AdaugaCard = ({ close }) => {
    const { userUid }=useContext(UserContext)
    const [mesaj, setMesaj]=useState(false)
    const [date, setDate]=useState("");
    const [outline, setOutline]=useState(noWarning)
    const onChange = (e) => { 
        setDate(e)
    }
  
    const handleAdaugaCard = () => {
        const titularCard = document.getElementById("numeTitular")
        const nrCard = document.getElementById("nrCard")
        const codCVV = document.getElementById("CVV")
        if (titularCard.value.trim() === "") {
            titularCard.style.border = "5px solid red";
            return
        }
        else {
            titularCard.style.border = "";
        }
        if (nrCard.value.length !== 16 || nrCard.value.trim() === "") {
            nrCard.style.border = "5px solid red";
            return
        }
        else {
            nrCard.style.border = "";
        }
        if (codCVV.value.length !== 3 || codCVV.value.trim() === "") {
            codCVV.style.border = "5px solid red";
            return
        }
        else {
            codCVV.style.border = "";
        }
        if(date){
            setOutline(noWarning)
          
        }
        else{
            setOutline(warning)
            return;
        }
        AddCard(userUid, titularCard.value, codCVV.value, nrCard.value, date)
       titularCard.value="";
       codCVV.value="";
       nrCard.value="";
       setMesaj(true)
       setTimeout(()=>{setMesaj(false)}, 2000)
    }
   
    return (
        <ModifiyDataMainDiv>
            <ModifiyDataContainer>
                {mesaj&& <MesajSucces>Card adaugat cu succes</MesajSucces>}
                <CloseSign onClick={close} />
                <Titlu>Adauga un card nou</Titlu>
                <ExtAdresa>
                    <div>Numarul cardului</div>
                    <div><input type="number" id="nrCard" placeholder="ex: 1234 5678 9123 4567" /></div>
                </ExtAdresa>
                <ExtAdresa>
                    <div>Numele titularului cardului</div>
                    <div><input type="text" id="numeTitular" placeholder="ex: Ion Popescu" /></div>
                </ExtAdresa>
                <ExtAdresa>
                    <div>Alege data de expirare a cardului</div>
                    <AlegeData warning={outline} onChange={onChange}/>
                </ExtAdresa>
                <ExtAdresa>
                    <div>Introdu codul CVV</div>
                    <div style={{ width: "30%" }}><input type="number" id="CVV" /></div>
                </ExtAdresa>
                <AdaugaAdresabttn onClick={handleAdaugaCard}>Adauga card</AdaugaAdresabttn>
            </ModifiyDataContainer>
        </ModifiyDataMainDiv>
    )
}
export default AdaugaCard
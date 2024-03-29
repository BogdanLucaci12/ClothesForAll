import { useContext, useState } from "react"
import { ExtAdresa, MesajSucces, Titlu } from "../AdrressContainer/useradress.styles"
import { CloseSign, ModifiyDataContainer, ModifiyDataMainDiv } from "../aboutuserContainer/aboutuser.styles"
import { AddCard } from "../../../utility/firebase"
import { UserContext } from "../../../context/user.context"
import {  encryptedData } from "../../../utility/securedata"
import DataPicker from "../../../component/datapicker/datapicker.component"
import { Add } from "../../../component/button/button.styles"

const defaultCardInput = {
    nrCard: "",
    numeTitular: "",
    dataExpirare: {
        an: "an",
        luna: "luna"
    },
    CVV: ""
}

const AdaugaCard = ({ close, changeArray }) => {
    const { userUid } = useContext(UserContext)
    const [mesaj, setMesaj] = useState(false)
    const [warningAn, setWarningAn] = useState("")
    const [warningLuna, setWarningLuna] = useState("")
    const [formfield, setFormField] = useState(defaultCardInput)
    const [reset, setReset] = useState(false)
    const { nrCard, numeTitular, dataExpirare, CVV } = formfield
    const handleclickAn = (e) => {
        setFormField(prevState => ({
            ...prevState,
            dataExpirare: {
                ...prevState.dataExpirare,
                an: e
            }
        }));
    };
    const handleClickMonth = (e) => {

        setFormField(prevState => ({
            ...prevState,
            dataExpirare: {
                ...prevState.dataExpirare,
                luna: e
            }
        }));
    }
    const handleChangeInput = (e) => {
        const { id, value } = e.target
        setFormField({ ...formfield, [id]: value })
    }
    const handleAdaugaCard = () => {
        const titularCardID = document.getElementById("numeTitular")
        const nrCardID = document.getElementById("nrCard")
        const codCVVID = document.getElementById("CVV")
        if (nrCard.length !== 16) {
            nrCardID.style.border = "5px solid red";
            return
        }
        else {
            nrCardID.style.border = "";
        }

        if ((/^5[1-5]/.test(nrCard)) || (/^4/.test(nrCard))) {
            nrCardID.style.border = ""

        } else {
            nrCardID.style.border = "5px solid red";
            return;
        }
        if (numeTitular === "") {
            titularCardID.style.border = "5px solid red";
            return
        }
        else {
            titularCardID.style.border = "";
        }
        if (CVV.length !== 3) {
            codCVVID.style.border = "5px solid red";
            return
        }
        else {
            codCVVID.style.border = "";
        }
        if (dataExpirare.luna === "luna" || dataExpirare.an === "an") {
            dataExpirare.luna === "luna" ? setWarningLuna("warning") : setWarningLuna("")
            dataExpirare.an === "an" ? setWarningAn("warning") : setWarningAn("")
            return
        }
        else {
            setWarningLuna("")
            setWarningAn("")
        }
        AddCard(userUid, numeTitular, encryptedData(CVV), encryptedData(nrCard), dataExpirare.an, dataExpirare.luna)
        changeArray(formfield)
        setFormField(defaultCardInput)
        setReset(!reset)
        setMesaj(true)
        setTimeout(() => { setMesaj(false) }, 2000)
    }
    return (
        <ModifiyDataMainDiv>
            <ModifiyDataContainer>
                {mesaj && <MesajSucces>Card adaugat cu succes</MesajSucces>}
                <CloseSign onClick={close} />
                <Titlu>Adauga un card nou</Titlu>
                <ExtAdresa>
                    <div>Numarul cardului</div>
                    <div><input
                        type="number"
                        id="nrCard"
                        placeholder="ex: 1234 5678 9123 4567"
                        value={nrCard}
                        onChange={handleChangeInput}
                    />
                    </div>
                </ExtAdresa>
                <ExtAdresa>
                    <div>Numele titularului cardului</div>
                    <div><input
                        type="text"
                        id="numeTitular"
                        placeholder="ex: Ion Popescu"
                        value={numeTitular}
                        onChange={handleChangeInput}
                    /></div>
                </ExtAdresa>
                <ExtAdresa>
                    <div>Alege data de expirare a cardului</div>
                    <DataPicker
                        handleClickYear={handleclickAn}
                        handleClickMonth={handleClickMonth}
                        warningYear={warningAn}
                        warningMonth={warningLuna}
                        reset={reset}
                    />
                </ExtAdresa>
                <ExtAdresa>
                    <div>Introdu codul CVV</div>
                    <div style={{ width: "30%" }}>
                        <input
                            type="number"
                            id="CVV"
                            value={CVV}
                            onChange={handleChangeInput}
                        /></div>
                </ExtAdresa>
                <Add onClick={handleAdaugaCard}>Adauga card</Add>
            </ModifiyDataContainer>
        </ModifiyDataMainDiv>
    )
}
export default AdaugaCard
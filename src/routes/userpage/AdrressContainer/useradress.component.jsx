import { UserContext } from "../../../context/user.context";
import AdaugaAdresa from "./AddAdress.component";
import { HeaderAdress, AdaugaAdreseButton, ContentAdress } from "./useradress.styles"
import { useContext, useEffect, useState } from "react";
import AdresaContainer from "./containerAdresa.component";
import { showAdress } from "../../../utility/firebase";
const UserAdress = ()=>{
const [open, setOpen] = useState(false);
const {userUid}=useContext(UserContext)
const [adrese, setAdrese]=useState([]);
const handleCloseOpen=()=>{
    setOpen(!open)
}

useEffect(()=>{
const fetchData= async()=>{
    const date = await showAdress(userUid);
    setAdrese(date)
}
fetchData()
    
}, [userUid, adrese])
    return (
        <div>
            {open && <AdaugaAdresa close={handleCloseOpen} />}
            <HeaderAdress>
            <h4>Adresele mele</h4>
            <AdaugaAdreseButton  onClick={handleCloseOpen}>Adauga adresa noua</AdaugaAdreseButton>
            </HeaderAdress>
            <ContentAdress>
                {
                    adrese.length>0 && adrese.map(({ adresa, judet, localitate, nume, telefon, index}) => (
                        <AdresaContainer
                            key={index}
                            adresa={adresa}
                            judet={judet}
                            localitate={localitate}
                            nume={nume}
                            telefon={telefon}
                            index={index}
                        />
                    ))
                }
            </ContentAdress>
        
        </div>
    )
}
export default UserAdress
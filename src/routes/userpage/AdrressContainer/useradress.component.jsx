import { UserContext } from "../../../context/user.context";
import AdaugaAdresa from "./AddAdress.component";
import { HeaderAdress, AdaugaAdreseButton, ContentAdress } from "./useradress.styles"
import { useContext, useState } from "react";
import AdresaContainer from "./containerAdresa.component";
import Spinner from 'react-bootstrap/Spinner';
const UserAdress = ()=>{
const [open, setOpen] = useState(false);
const {adrese}=useContext(UserContext)
const [toateAdresele, setToateAdresele] = useState(adrese)
  
const handleCloseOpen=()=>{
    setOpen(!open)
}
    const adaugaArrayAdresa= (e)=>{
        setToateAdresele({...toateAdresele, e})
    }
    const deleteAdressFromStateArray= (e)=>{
        console.log(e)
        setToateAdresele(toateAdresele.filter(ad=>ad.adresa !== e))
     }
    return (
        <div>
            {open && <AdaugaAdresa 
            close={handleCloseOpen} 
                adaugaArrayAdresa={adaugaArrayAdresa}
            />}
            <HeaderAdress>
            <h5>Adresele mele</h5>
            <AdaugaAdreseButton  onClick={handleCloseOpen}>Adauga adresa noua</AdaugaAdreseButton>
            </HeaderAdress>
            <ContentAdress>
                {toateAdresele === undefined ? (<Spinner animation="border" variant="dark" />) : 
                    toateAdresele !=="NoAdressSave" ? ( toateAdresele.map((adresaUnica, index) => (
                        <AdresaContainer
                            key={index}
                            adresaUnica={adresaUnica}
                            deleteAdressFromStateArray={(e)=>deleteAdressFromStateArray(e)}
                        />
                    ))):(<div>Nu exista adrese salvate</div>)
                }
            </ContentAdress>
        
        </div>
    )
}
export default UserAdress
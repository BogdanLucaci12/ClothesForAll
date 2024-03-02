import AdaugaAdresa from "./AddAdress.component";
import { UserAdressMainDiv, HeaderAdress, AdaugaAdreseButton } from "./useradress.styles"
import { useContext, useEffect, useState } from "react";
const UserAdress = ()=>{
const [open, setOpen] = useState(true)


    return (
        <div>
           {open &&  <AdaugaAdresa/>}
            <HeaderAdress>
            <h4>Adresele mele</h4>
            <AdaugaAdreseButton onClick={()=>setOpen(true)}>Adauga adresa noua</AdaugaAdreseButton>
            </HeaderAdress>
        </div>
    )
}
export default UserAdress
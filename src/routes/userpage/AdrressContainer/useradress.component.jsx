import AdaugaAdresa from "./AddAdress.component";
import { UserAdressMainDiv, HeaderAdress, AdaugaAdreseButton } from "./useradress.styles"
import { useContext, useEffect, useState } from "react";
const UserAdress = ()=>{
const [open, setOpen] = useState(false)
const handleCloseOpen=()=>{
    setOpen(!open)
}
    return (
        <div>
            {open && <AdaugaAdresa close={handleCloseOpen} />}
            <HeaderAdress>
            <h4>Adresele mele</h4>
            <AdaugaAdreseButton  onClick={handleCloseOpen}>Adauga adresa noua</AdaugaAdreseButton>
            </HeaderAdress>
        </div>
    )
}
export default UserAdress
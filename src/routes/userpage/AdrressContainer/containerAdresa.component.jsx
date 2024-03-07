import { ContainerAdresa, HeaderAdresa, FooterAdresa } from "./useradress.styles"
import { deleteAdress } from "../../../utility/firebase"
import { useContext } from "react"
import { UserContext } from "../../../context/user.context"
const AdresaContainer = ({adresa, judet, localitate, nume, telefon, index})=>{
    const {userUid}=useContext(UserContext);
    const handleClick=()=>{
        deleteAdress(userUid, index);
    }
   
    return (
        <div>
            <ContainerAdresa>
                <HeaderAdresa>
                    <div>
                        {nume} - {telefon}
                    </div>
                    <div>
                        {adresa}
                    </div>
                    <div>{localitate} {judet}</div>
                </HeaderAdresa>
                <FooterAdresa>
                    <div onClick={handleClick}>Sterge</div>
                </FooterAdresa>
            </ContainerAdresa>
        </div>
    )
}

export default AdresaContainer
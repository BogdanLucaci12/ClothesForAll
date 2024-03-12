import { ContainerAdresa, HeaderAdresa, FooterAdresa } from "./useradress.styles"
import { deleteAdress } from "../../../utility/firebase"
import { useContext } from "react"
import { UserContext } from "../../../context/user.context"
import { ImLocation } from "react-icons/im";
const AdresaContainer = ({ adresaUnica, deleteAdressFromStateArray })=>{
    const {userUid}=useContext(UserContext);
    const { adresa, judet, localitate, nume, telefon } = adresaUnica
    const handleClick=()=>{
        deleteAdress(userUid, adresa);
        deleteAdressFromStateArray(adresa)
    }
    return (
        <div>
            <ContainerAdresa>
                <ImLocation style={{ fontSize: "3em" }} />
                <HeaderAdresa>
                    <div>
                        {nume} - {telefon}
                    </div>
                    <div>
                        {adresa}
                    </div>
                    <div>{localitate} {judet}</div>
                </HeaderAdresa>
                <FooterAdresa onClick={handleClick}>
                    <div>Sterge</div>
                </FooterAdresa>
            </ContainerAdresa>
        </div>
    )
}

export default AdresaContainer
import { Fragment, useContext, useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Div1 } from "./paymentPage.styles";
import { Add } from "../../component/button/button.styles";
import { UserContext } from "../../context/user.context";
const SelectAdresaLivare = ({ showAdaugaAdresa, handleAdresaField, noUserAdress }) => {
    const { adrese, userUid } = useContext(UserContext)
    const [toateAdresele, setToateAdresele] = useState(adrese)
    const [alegeAdresa, setAlegeAdresa] = useState({
        nume: "",
        telefon: "",
        judet: "",
        localitate: "",
        adresa: ""
    })
//    useEffect(()=>{
//        setAlegeAdresa(noUserAdress)
//    }, [])
    useEffect(() => { setToateAdresele(adrese) }, [adrese])
    const handleClickAdresa = (adr) => {
        const { adresa, judet, localitate, nume, telefon } = adr
        setAlegeAdresa({ nume: nume, adresa: adresa, judet: judet, localitate: localitate, telefon: telefon })
    }
    useEffect(() => {
        handleAdresaField(alegeAdresa)
    }, [alegeAdresa, handleAdresaField])
    return (
        <Fragment>

            <div>

                <h4 style={{ textAlign: "center" }}>Selecteaza adresa de livrare</h4>
                <div className="py-3 border">
                    <div><b>Persoana de contact</b></div>
                    <div>{alegeAdresa.nume} - {alegeAdresa.telefon}</div>
                    <div>Adresa de livrare</div>
                    <div>{alegeAdresa.judet}- {alegeAdresa.localitate}, {alegeAdresa.adresa}</div>
                </div>
                <div >
                    <div className="pb-4">
                        <b>
                            Selecteaza o adresa pentru livrare
                        </b>
                    </div>
                    <div>
                        {
                            toateAdresele === undefined ? (
                            userUid===undefined ? (
                                <div>Nu exista un cont salvat, adauga o adresa</div>
                            ):
                           ( <div>Se incarca adresele</div>)) :
                                toateAdresele !== "NoAdressSave" ? (toateAdresele.map((adr, index) => (
                                    <Div1
                                    key={index}
                                        onClick={() => handleClickAdresa(adr)}>
                                        
                                        <div>
                                            {adr.nume}  - {adr.telefon}
                                        </div>
                                        <div>
                                            {adr.judet} - {adr.localitate} - {adr.adresa}
                                        </div>
                                    </Div1>

                                ))) : (<div>Nu exista adrese salvate</div>)
                        }
                    </div>
                </div>
            </div>
            <Add className="my-2" onClick={showAdaugaAdresa}>Adauga adresa</Add>

        </Fragment>
    )
}
export default SelectAdresaLivare
import SelectAdresaLivare from "./adressPayment.component"
import { PaymentPageMainDiv } from "./paymentPage.styles"
import AdaugaAdresa from "../userpage/AdrressContainer/AddAdress.component";
import { Fragment, useState } from "react";
import CardPayment from "./cardPayment.component";
import AdaugaCard from "../userpage/cardContainer/adaugaCard.component";
const PaymentPage = () => {
    const [openAdresa, setOpenAdresa] = useState(false);
    const [openCard, setOpenCard] = useState(false);
    const handleClickAddadresa = () => {
        setOpenAdresa(!openAdresa)
    }
    const handleClickAddCard = () => {
        setOpenCard(!openCard)
    }
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {
                openAdresa && <AdaugaAdresa close={handleClickAddadresa} />
            }
            {
                openCard && <AdaugaCard close={handleClickAddCard}/>
            }
            <PaymentPageMainDiv>
                <SelectAdresaLivare
                    showAdaugaAdresa={handleClickAddadresa}
                />
                <CardPayment
                showAdaugaCard={handleClickAddCard}/>
            </PaymentPageMainDiv>
        </div>
    )
}
export default PaymentPage
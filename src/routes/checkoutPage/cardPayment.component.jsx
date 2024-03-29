import { Fragment, useContext, useEffect } from "react"
import { useState } from "react";
import { FormCardPayment, DivForInputPaymentPage, ExpCard, AlertaCVV } from "./paymentPage.styles"
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../../context/user.context";
import AlegecardPayment from "../checkoutPage/alegecardCheckoutpage.component"
import { decryptData } from "../../utility/securedata";

const CardPayment = () => {
    const [nrCard, setNrCard] = useState("")
    const [titularCard, setTitularCard] = useState("")
    const [cvvIncorect, setCvvIncorect] = useState(false)
    const { cards } = useContext(UserContext)
    const [retrieveCards, setRetrieveCards] = useState()
    const [month, setMonth] = useState("Luna");
    const [year, setYear] = useState("An")
   
    useEffect(() => { setRetrieveCards(cards) }, [cards])
    const handleClick = (card, CVV) => {
        const { dataExpirare, nrCard, titularCard, codCVV } = card
        const decryptNr = decryptData(nrCard);
        const drecyptCVV = decryptData(codCVV);
        if (drecyptCVV === CVV) {
            setNrCard(decryptNr)
            setTitularCard(titularCard)
            setMonth(dataExpirare.luna)
            setYear(dataExpirare.an)
        
        }
        else {
            setCvvIncorect(true)
            setTimeout(() => {
                setCvvIncorect(false)
            }, 2000)
        }
    };
 
    return (
        <Fragment>
            {
                cvvIncorect &&
                <AlertaCVV>Datele CVV ale cardului selectat nu corespund cu CVV-ul introdus</AlertaCVV>
            }
            <div>
                <h4 style={{ textAlign: "center" }}>
                    Afiseaza datele cardului salvat
                </h4>
                <div className="border">
                    <FormCardPayment action="">
                        <DivForInputPaymentPage>
                            <label htmlFor="">Numar Card</label>
                            <input
                                type="number"
                                name="nrCard"
                                value={nrCard}
                                id="nrCard"
                                readOnly
                            />
                        </DivForInputPaymentPage>
                        <DivForInputPaymentPage>
                            <label htmlFor="">Numele titularului</label>
                            <input
                                type="text"
                                name="titularCard"
                                value={titularCard}
                                readOnly
                            />
                        </DivForInputPaymentPage>
                        <DivForInputPaymentPage>
                            <label htmlFor="">Data de expirare</label>
                            <ExpCard>
                                <div>{month}</div>
                                <div>{year}</div>
                            </ExpCard>
                        </DivForInputPaymentPage>
                    </FormCardPayment>
                </div>
                <div>
                    <div style={{ margin: "1em 0" }}>
                        <b>
                            Afiseaza-ti cardurile salvate introducand CVV-ul
                        </b>
                    </div>
                    <div>
                        {
                            retrieveCards === undefined ? (<div>Se incarca cardurile</div>) :
                                retrieveCards !== "Nu exista carduri salvate" ?
                                    (retrieveCards.map((card, index) => (
                                        <AlegecardPayment
                                            key={index}
                                            card={card}
                                            onClick={(cardData, cvv) => handleClick(cardData, cvv, index)}
                                        >
                                        </AlegecardPayment>
                                    ))) :
                                    (<div>Nici un card salvat</div>
                                    )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CardPayment
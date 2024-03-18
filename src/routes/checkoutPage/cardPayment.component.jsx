import { Fragment, useContext, useEffect } from "react"
import { useState } from "react";
import { FormCardPayment, DivForInputPaymentPage, Choose } from "./paymentPage.styles"
import { Add } from "../../component/button/button.styles"
import 'bootstrap/dist/css/bootstrap.min.css';
import DataPicker from "../../component/datapicker/datapicker.component";
import { UserContext } from "../../context/user.context";
import AlegecardPayment from "../checkoutPage/alegecardCheckoutpage.component"
import { decryptData } from "../../utility/securedata";
const dafaultCardInput = {
    nrCard: "",
    titularCard: "",
    dataExpirare:{
        an:"", 
        luna:""
    }
}
const CardPayment = ({ showAdaugaCard }) => {
    const [formfield, setFormField] = useState(dafaultCardInput)
    const [selectedCardIndex, setSelectedCardIndex] = useState();
    const { cards } = useContext(UserContext)
    const [insertMonth, setInsertMonth] = useState()
    const [insertYear, setInsertYear] = useState()
    const [retrieveCards, setRetrieveCards] = useState()
    const { nrCard, titularCard, dataExpirare } = formfield;
    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setFormField({ ...formfield, [name]: value })
    }
    const handleClickMonth = (e) => {
        setFormField({ ...formfield, 
            dataExpirare:{
                ...dataExpirare, 
                luna:e
            }
        })
    }
    const handleClickYear = (e) => {
        setFormField({
            ...formfield,
            dataExpirare: {
                ...dataExpirare,
                an: e
            }
        });
    }

    // console.log(formfield)
    useEffect(() => { setRetrieveCards(cards) }, [cards])
    const handleClick = (index, card) => {
        setSelectedCardIndex(index);
        const {dataExpirare, nrCard, titularCard}=card
        const decryptNr=decryptData(nrCard)
        setFormField({ nrCard: decryptNr, titularCard: titularCard, dataExpirare:dataExpirare})
        setInsertMonth(dataExpirare.luna);
        setInsertYear(dataExpirare.an)
        console.log(card)
    };
    
    return (
        <Fragment>
            <div>
                <h4 style={{textAlign:"center"}}>
                    Introdu un card
                </h4>
                <div>
                    <FormCardPayment action="">
                        <DivForInputPaymentPage>
                            <label htmlFor="">Numar Card</label>
                            <input type="number" name="nrCard" value={nrCard} onChange={handleChangeInput} />
                        </DivForInputPaymentPage>
                        <DivForInputPaymentPage>
                            <label htmlFor="">Numele titularului</label>
                            <input type="text" name="titularCard" value={titularCard} onChange={handleChangeInput} />
                        </DivForInputPaymentPage>
                        <DivForInputPaymentPage>
                            <label htmlFor="">Data de expirare</label>
                            <DataPicker 
                            handleClickMonth={handleClickMonth} 
                            handleClickYear={handleClickYear} 
                                insertYear={insertYear}
                                insertMonth={insertMonth}
                            />
                        </DivForInputPaymentPage>
                    </FormCardPayment>
                </div>
                <div>
                    <div style={{ margin: "1em 0" }}>
                        <b>
                            Alege unul dintre cardurile salvate
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
                                            onClick={() => handleClick(index, card)}
                                        >
                                            {selectedCardIndex === index && <Choose />}
                                        </AlegecardPayment>
                                    ))) :
                                    (<div>Nici un card salvat</div>
                                    )}
                    </div>
                </div>
                <Add
                    className="my-2" onClick={showAdaugaCard}>Adauga card nou</Add>
            </div>
        </Fragment>
    )
}
export default CardPayment
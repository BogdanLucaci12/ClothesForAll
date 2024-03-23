import SelectAdresaLivare from "./adressPayment.component"
import { PaymentPageMainDiv } from "./paymentPage.styles"
import AdaugaAdresa from "../userpage/AdrressContainer/AddAdress.component";
import { useContext, useEffect, useState } from "react";
import CardPayment from "./cardPayment.component";
import AdaugaCard from "../userpage/cardContainer/adaugaCard.component";
import { Cartcontext } from "../../context/addtocart.context";
import { Add } from "../../component/button/button.styles";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
const PaymentPage = () => {
    const [openAdresa, setOpenAdresa] = useState(false);
    const [openCard, setOpenCard] = useState(false);
    const [adresaSelectata, setAdresaSelectata] = useState();
    const [noUserAdress, setNoUserAdress] = useState();
    const [disable, setDisable]=useState(true);
    const { total } = useContext(Cartcontext)
    const stripe = useStripe()
    const elements = useElements()
    const [proccessing, setProccessing] = useState(false);
    const [error, setError]=useState(null);
    const handleClickAddadresa = () => {
        setOpenAdresa(!openAdresa)
    }
    const handleClickAddCard = () => {
        setOpenCard(!openCard)
    }

    const handleAdresaField = (adresafield) => {
        setAdresaSelectata(adresafield)
    }
    const sendAdressNoUser=(e)=>{
        setAdresaSelectata(e)
        setNoUserAdress(e)
    }
    useEffect(()=>{
       
        if (adresaSelectata===undefined){
           
        }else{
            if (adresaSelectata.judet!==""){
                setDisable(false)
            }
        }
    }, [adresaSelectata])
    const cardStyle = {
        style: {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: '500',
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#87BBFD',
                },
            },
            invalid: {
                iconColor: '#FFC7EE',
                color: '#FFC7EE',
            },
        },
}
    const cardHandlesChange = (event)=>{
      
    }
    const paymentHandler = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return;
       
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/jsson',
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json());
        const { paymentIntent: { client_secret } } = response;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: "",
                billing_details: {
                    name: "Lucaci Bogdan"
                }
            }
        })

        console.log(paymentResult)
        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") { alert("payment") }
        }

    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {
                openAdresa && <AdaugaAdresa
                close={handleClickAddadresa} 
                sendAdressNoUser={sendAdressNoUser}
                />
            }
            {
                openCard && <AdaugaCard close={handleClickAddCard} />
            }
            <PaymentPageMainDiv>
                <SelectAdresaLivare
                    showAdaugaAdresa={handleClickAddadresa}
                    handleAdresaField={handleAdresaField}
                    noUserAdress={noUserAdress}
                />
            </PaymentPageMainDiv>
            <PaymentPageMainDiv>
                <CardPayment
                    showAdaugaCard={handleClickAddCard}
                />
            </PaymentPageMainDiv>
            <PaymentPageMainDiv>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        Sumar comanda: {total} RON
                    </div>
                    <div>
                    <form action="" style={{ width: "100%" }} >
                            <CardNumberElement
                            options={cardStyle}
                            />
                            <CardExpiryElement
                                options={cardStyle}
                            />
                            <CardCvcElement
                                options={cardStyle}
                            />    

                        <button disabled={disable}>Realizati plata</button>
                    </form>
                    </div>
                </div>

            </PaymentPageMainDiv>
        </div>
    )
}
export default PaymentPage
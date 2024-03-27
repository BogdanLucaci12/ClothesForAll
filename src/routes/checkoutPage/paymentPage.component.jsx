import SelectAdresaLivare from "./adressPayment.component"
import { FormularPlata, PaymentPageMainDiv, WarningPlata, CardStyle } from "./paymentPage.styles"
import AdaugaAdresa from "../userpage/AdrressContainer/AddAdress.component";
import { useContext, useEffect, useState } from "react";
import CardPayment from "./cardPayment.component";
import { Cartcontext } from "../../context/addtocart.context";
import { Add } from "../../component/button/button.styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../../context/user.context";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import { AdaugaComanda } from "../../utility/firebase";
const PaymentPage = () => {
    const [openAdresa, setOpenAdresa] = useState(false);
   
    const [adresaSelectata, setAdresaSelectata] = useState();
    const [noUserAdress, setNoUserAdress] = useState();
    const [newAdress, setNewAdress] = useState()
    const [disable, setDisable] = useState("");
    const { currentUser, email, userUid } = useContext(UserContext)
    const [noUserEmail, setNoUserEmail] = useState(email)
    const { total, setCartItems, cartItems } = useContext(Cartcontext)
    const stripe = useStripe()
    const elements = useElements()
    const [proccessing, setProccessing] = useState(false);
    const handleClickAddadresa = () => {
        setOpenAdresa(!openAdresa)
    }
   
    const handleAdresaField = (adresafield) => {
        setAdresaSelectata(adresafield)
    }
    const sendAdressNoUser = (e) => {
        setNoUserAdress(e)
    }
    useEffect(() => {
        if (adresaSelectata === undefined) {
        } else {
            if (adresaSelectata.judet === "") {
                setDisable("NoAdress")
            }
            else {
                setDisable("")
            }
        }
    }, [adresaSelectata])

    const paymentHandler = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return;
        setProccessing("Processing")
        setDisable(true)
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/jsson',
            },
            body: JSON.stringify({ amount: total * 100 })
        }).then(res => res.json());
        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    address: {
                        city: adresaSelectata.localitate,
                        state: adresaSelectata.judet
                    },
                    name: currentUser ? currentUser : "No name",
                    email: email ? email : noUserEmail,
                },
            },
            receipt_email: email ? email : noUserEmail,
        })
        setProccessing(false)
        setDisable(false)
        console.log(paymentResult)
        if (paymentResult.error) {
            paymentResult.error.code === "incomplete_number" ? setProccessing("incomplete_number") : setProccessing("failPayment")
            return
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                setProccessing("succeeded")
                userUid ? AdaugaComanda(userUid, paymentResult.paymentIntent.id, adresaSelectata, email, cartItems, total)
                 : (setNoUserEmail(""))
                setCartItems([])
            }
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {
                openAdresa && <AdaugaAdresa
                    close={handleClickAddadresa}
                    sendAdressNoUser={sendAdressNoUser}
                    adaugaArrayAdresa={(e) => setNewAdress(e)}
                />
            }
            <PaymentPageMainDiv>
                <SelectAdresaLivare
                    showAdaugaAdresa={handleClickAddadresa}
                    handleAdresaField={handleAdresaField}
                    noUserAdress={noUserAdress}
                    adaugaArrayAdresa={newAdress}
                />
            </PaymentPageMainDiv>
            {
                currentUser ? (
                    <PaymentPageMainDiv>
                        <CardPayment/>               
                    </PaymentPageMainDiv>
                ) :
                    (
                        <PaymentPageMainDiv>
                            <label htmlFor="noUserEmail">Email: </label>
                            <input
                                type="email"
                                style={{ borderRadius: "2rem" }}
                                value={noUserEmail}
                                onChange={(e)=>setNoUserEmail(e.target.value)}
                                name="noUserEmail"
                            />
                        </PaymentPageMainDiv>
                    )
            }
            <PaymentPageMainDiv>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <div style={{ displa: "block" }}>
                        <div style={{ display: "flex" }}>
                            Sumar comanda:
                            {
                                total ? (<div> {total} RON</div>) : (<div>Nu exista produse in cos</div>)
                            }
                        </div>
                        {
                            proccessing === "succeeded" ? (
                                <div>
                                    Plata realizata cu succes
                                </div>
                            ) : proccessing === "failPayment" ?
                                (<div>Plata nu a fost realizata</div>) :
                                    proccessing ==="incomplete_number" ? 
                                        (<div>Card invalid</div>):(<div></div>)
                        }
                    </div>
                    <div>
                        <FormularPlata action="">
                            <CardNumberElement
                                options={CardStyle}

                            />
                            <CardExpiryElement
                                options={CardStyle}

                            />
                            <CardCvcElement
                                options={CardStyle}

                            />
                            {
                                disable === "NoAdress" ?
                                    (<WarningPlata>Adauga o adresa pentru a putea face plata</WarningPlata>) :
                                    (noUserEmail===undefined || noUserEmail==="") ? (<WarningPlata>Introdu un email</WarningPlata>) : 
                                    proccessing === "Processing" ? (<WarningPlata>Plata in procesare</WarningPlata>) :
                                        total ?
                                            (
                                                <Add
                                                    className="my-2"
                                                    disabled={disable}
                                                    onClick={paymentHandler}
                                                >Realizati plata</Add>
                                            ) : (
                                                <WarningPlata>Nu exista produse in cos</WarningPlata>
                                            )
                            }
                        </FormularPlata>
                    </div>
                </div>

            </PaymentPageMainDiv>
        </div>
    )
}
export default PaymentPage
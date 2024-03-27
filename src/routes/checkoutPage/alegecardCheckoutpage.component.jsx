import { decryptData } from "../../utility/securedata"
import { useEffect, useState } from "react"
import { AlegecardPaymentPage, CardDetailsForPaymentPage, Choose, } from "./paymentPage.styles"
import { AfiseazaCard } from "../../component/button/button.styles"

const AlegecardPayment = ({ card, onClick})=>{
    const { nrCard, titularCard } = card
    const [numarCardHidde, setNumarCardHidde] = useState(() => {
        const decryptCard = decryptData(nrCard)
        const preiaUltimele4Cifre = decryptCard.slice(-4)
        const ultimele4Cifre = `**** ${preiaUltimele4Cifre}`
        return ultimele4Cifre
    })
    const [CVV, setCVV]=useState("")
    const [afiseazaButton, setAfiseazaButton] = useState(false)
    const handleCVVChange=(e)=>{
        const inputValue = e.target.value.slice(0, 3)
        setCVV(inputValue)
        }
    useEffect(() => {
        if (CVV.length === 3) {
            setAfiseazaButton(true) }
            else {setAfiseazaButton(false) }
}, [CVV])
const handleClickAfiseazaCVV=()=>{
    onClick(card, CVV)
    setCVV("")
    setAfiseazaButton(false)
}
    return (
        <AlegecardPaymentPage>
            <CardDetailsForPaymentPage>
            <div>{titularCard}</div>
            <div>{numarCardHidde}</div>
            </CardDetailsForPaymentPage>
            <div>
                {
                afiseazaButton && 
                    <AfiseazaCard 
                            onClick={handleClickAfiseazaCVV}
                    > Afiseaza datele cardului</AfiseazaCard>
                }
            </div>
            <div>
                <label htmlFor="CVV">CVV</label>
                <input 
                type="password" 
                value={CVV} 
                onChange={handleCVVChange}
                    />
                </div>
        </AlegecardPaymentPage>
    )
}
export default AlegecardPayment
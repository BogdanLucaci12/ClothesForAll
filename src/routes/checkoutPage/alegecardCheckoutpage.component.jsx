import { decryptData } from "../../utility/securedata"
import { useState } from "react"
import { AlegecardPaymentPage, Choose, } from "./paymentPage.styles"

const AlegecardPayment = ({ card, children, onClick })=>{
    const { nrCard, titularCard, dataExpirare } = card
    const [numarCardHidde, setNumarCardHidde] = useState(() => {
        const decryptCard = decryptData(nrCard)
        const preiaUltimele4Cifre = decryptCard.slice(-4)
        const ultimele4Cifre = `**** ${preiaUltimele4Cifre}`
        return ultimele4Cifre
    })
    return (
        <AlegecardPaymentPage onClick={onClick}>
            <div>{titularCard}</div>
            <div>{numarCardHidde}</div>
            <div>{dataExpirare.luna} / {dataExpirare.an}</div>
            {children}
        </AlegecardPaymentPage>
    )
}
export default AlegecardPayment
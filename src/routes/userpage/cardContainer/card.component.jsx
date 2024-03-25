import { ImageCard, ContentCard, CardMainDiv, HeaderCard, FooterCard, StergeCard } from "./card.styles"
import MasterCardLogo from "../../../assets/MasterCard_Logo.svg.png"
import VisaLogo from "../../../assets/visa.svg"
import { DeleteCard } from "../../../utility/firebase";
import { UserContext } from "../../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { decryptData } from "../../../utility/securedata";
const Card = ({ card, stergeCard }) => {
    const { userUid } = useContext(UserContext)
    const [handleBrandCard, setHandleBrandCard] = useState("")
    const [handlePictureCard, setHandlePictureCard] = useState()
    const { nrCard, titular, dataExpirare } = card
    const decryptCard = decryptData(nrCard)
    const cardnumber=decryptCard ? decryptCard : nrCard 
    const [numarCardHidde] = useState(() => {
        const preiaUltimele4Cifre = cardnumber.slice(-4)
        const ultimele4Cifre = `**** ${preiaUltimele4Cifre}`
        return ultimele4Cifre
    })
    const handleStergeClick = () => {
        DeleteCard(userUid, nrCard)
        stergeCard(card)
    }
    useEffect(() => {
        if (/^5[1-5]/.test(cardnumber)) {
            setHandleBrandCard("MasterCard")
            setHandlePictureCard(MasterCardLogo)
        }
        else if (/^4/.test(cardnumber)) {
            setHandleBrandCard("VisaCard")
            setHandlePictureCard(VisaLogo)
        }
    }, [cardnumber])

    return (
        <CardMainDiv>
            <HeaderCard>
                <ImageCard src={handlePictureCard} />
                <ContentCard>
                    <h3>{handleBrandCard} {numarCardHidde}</h3>
                    <div>Expira in {dataExpirare.luna}/{dataExpirare.an}</div>
                    <div>{titular}</div>
                </ContentCard>
            </HeaderCard>
            <FooterCard>
                <StergeCard onClick={handleStergeClick}>Sterge acest card</StergeCard>
            </FooterCard>
        </CardMainDiv>
    )
}
export default Card
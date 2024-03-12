import { ImageCard, ContentCard, CardMainDiv, HeaderCard, FooterCard, StergeCard } from "./card.styles"
import MasterCardLogo from "../../../assets/MasterCard_Logo.svg.png"
import VisaLogo from "../../../assets/visa.svg"
import { Radio } from 'antd';
import { DeleteCard, RetrieveCards } from "../../../utility/firebase";
import { UserContext } from "../../../context/user.context";
import { useContext, useEffect, useState } from "react";
import { decryptData } from "../../../utility/hastag";

const Card = ({card, stergeCard }) => {
    const { userUid, setReloadingComponent, reloadingComponent } = useContext(UserContext)
    const [handleBrandCard, setHandleBrandCard]=useState("")
    const [handlePictureCard, setHandlePictureCard]=useState()
    const { nrCard, titular, dataExpirare, cardPrincipal }=card
    const decryptCard = decryptData(nrCard)
    const [numarCardHidde, setNumarCardHidde] = useState(()=>{
      
        const preiaUltimele4Cifre = decryptCard.slice(-4)
        const ultimele4Cifre=`**** ${preiaUltimele4Cifre}`
        return ultimele4Cifre
    })
    const handleStergeClick = () => {
        DeleteCard(userUid, decryptCard)
        stergeCard(card)
    }
  useEffect(()=>{
      if (/^5[1-5]/.test(decryptCard)) { 
        setHandleBrandCard("MasterCard") 
          setHandlePictureCard(MasterCardLogo)
    } 
      else if (/^4/.test(decryptCard)) {
        setHandleBrandCard("VisaCard")
        setHandlePictureCard(VisaLogo)
      }
  }, [])

    return (
        <CardMainDiv>
            <HeaderCard>
                <ImageCard src={handlePictureCard} />
                <ContentCard>
                    <h3>{handleBrandCard} {numarCardHidde}</h3>
                    <div>Expira in {dataExpirare}</div>
                    <div>{titular}</div>
                </ContentCard>
            </HeaderCard>
            <FooterCard>
                <Radio
                defaultChecked={cardPrincipal}
                    >
                    Card Principal
                </Radio>
                <StergeCard onClick={handleStergeClick}>Sterge</StergeCard>
            </FooterCard>
        </CardMainDiv>
    )
}
export default Card
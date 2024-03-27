import { AdaugaAdreseButton, ContentAdress, HeaderAdress } from "../AdrressContainer/useradress.styles"
import { useContext, useEffect, useState } from "react";
import AdaugaCard from "./adaugaCard.component";
import Card from "./card.component";
import React from 'react';
import { UserContext } from "../../../context/user.context";
import Spinner from 'react-bootstrap/Spinner';
const CardContainer = () => {
    const { cards } = useContext(UserContext);
    const [retrieveCards, setRetrieveCards] = useState()
    const [open, setOpen] = useState(false);
    const stergeCard = (card) => {
        setRetrieveCards(retrieveCards.filter(c => c.nrCard !== card.nrCard));
    };
    useEffect(() => { setRetrieveCards(cards) },[cards])
    const handleCloseSign = () => {
        setOpen(!open);
        console.log(open)
        if (open) {
            document.body.style.overflow = '';
        }
     
    }
    const addCard = (card) => {
        console.log(card)
        setRetrieveCards([...retrieveCards, card])
    }
    open && (document.body.style.overflow = 'hidden')

    return (
        <div>
            {
                open && <AdaugaCard
                 close={handleCloseSign} 
                 changeArray={(card)=>addCard(card)}
                 />
            }
            <HeaderAdress>
                <h4>Cardurile mele</h4>
                <AdaugaAdreseButton onClick={handleCloseSign}>Adauga Card</AdaugaAdreseButton>
            </HeaderAdress>
            <ContentAdress>
                {
                    retrieveCards === undefined ? (<Spinner animation="border" variant="dark" />) :
                    retrieveCards!=="Nu exista carduri salvate"? 
                    (retrieveCards.map((card, index) => (
                        <Card
                            key={index}
                            card={card}
                            stergeCard={() => stergeCard(card)}
                        />
                    )) ): 
                    (<div>Nici un card salvat</div>
                )}
            </ContentAdress>
        </div>
    )
}
export default CardContainer
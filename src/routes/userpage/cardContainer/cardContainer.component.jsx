import { AdaugaAdreseButton, ContentAdress, HeaderAdress } from "../AdrressContainer/useradress.styles"
import { useContext, useEffect, useState } from "react";
import AdaugaCard from "./adaugaCard.component";
import Card from "./card.component";
import React from 'react';
import { UserContext } from "../../../context/user.context";
import { RetrieveCards } from "../../../utility/firebase";
const CardContainer = () => {
    const { userUid } = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const handleCloseSign = () => {
        setOpen(!open);
    }
    useEffect(() => {
        const fetchData = async () => {
            const cardArray = await RetrieveCards(userUid);
            setCards(cardArray)
        }
        fetchData()
    }, [userUid, cards])
    return (
        <div>
            {
                open && <AdaugaCard close={handleCloseSign} />
            }
            <HeaderAdress>
                <h4>Cardurile mele</h4>
                <AdaugaAdreseButton onClick={handleCloseSign}>Adauga Card</AdaugaAdreseButton>
            </HeaderAdress>
            <ContentAdress>
                {
                    cards && cards.map(({ nrCard, titularCard, dataExpirare, plata})=>(
                        <Card 
                        key={nrCard} 
                        nrCard={nrCard}
                        titular={titularCard}
                        dataExpirare={dataExpirare}
                        cardPrincipal={plata}
                        />
                    ))
                }
               
            </ContentAdress>
        </div>
    )
}
export default CardContainer
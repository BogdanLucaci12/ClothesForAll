import { ComandaComp, Purchase, DeliveryDetails, DescriptionEachPurchase, Cfb } from "./comenzi.style"
import { useEffect, useState } from "react";
import ControlledCarousel from "./carousel.component";
const Comanda = ({comanda}) => {

    const { adresa: { adresa, judet, localitate, telefon },
        email, id, total, cartItems,
    } = comanda;
    const [indexC, setIndexC] = useState("0")
    const [descriptionOfItem, setDescriptionOfItem] = useState({
        nume:"", 
        categorie:"", 
        marime:"",
         culoare:"",
          pret:"", 
          quantity:""
    })
    const { nume, categorie, marime, culoare, pret, quantity } = descriptionOfItem
    useEffect(()=>{
        if(indexC==="0"){
            setDescriptionOfItem(cartItems[0])
        }
        else {
            const desc=cartItems[indexC]
            setDescriptionOfItem(desc)
        }
    }, [indexC, cartItems])
    return (
        <ComandaComp>
            <div style={{padding:".5em"}}>Comanda nr : {id}</div>
            <Cfb>
                <Purchase>
                    <ControlledCarousel 
                        cartItems={cartItems}
                        activeIndex={(activeIndex) => setIndexC(activeIndex)}
                    />
                   
                    <DescriptionEachPurchase>
                    <div>
                        {categorie} {nume}
                    </div>
                    <div>
                            <div>Marime: <b> {marime}</b> </div>
                            <div>  Culoare: <b>{culoare} </b> </div>
                            <div> Cantitate: <b>{quantity} </b> Pret/buc: <b> {pret} RON</b></div>
                    </div>
                    </DescriptionEachPurchase>
                </Purchase>
                <DeliveryDetails>
                    <div> <b>Adresa de livrare a comenzii</b></div>
                    <div>{judet} {localitate}</div>
                    <div>{adresa}</div>
                    <div> <b>Persoana de contact</b></div>
                    <div>{adresa.nume}</div>
                    <div>{telefon}</div>
                    <div>{email}</div>
                    <div>Sumar comanda</div>
                    <div>Total: <b>{total} RON</b></div>
                </DeliveryDetails>
            </Cfb>
        </ComandaComp>
    )
}

export default Comanda
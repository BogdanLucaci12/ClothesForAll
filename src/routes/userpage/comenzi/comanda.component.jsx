import { ComandaComp, CustomCarousel, Purchase, DeliveryDetails, DescriptionEachPurchase } from "./comenzi.style"
import logo from "../../../assets/logo.png"
import { useEffect, useState } from "react";
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
        }else {
            const desc=cartItems.find(item=>item.ImageUrl===indexC.pageIndex.item.src)
            setDescriptionOfItem(desc)
        }
    }, [indexC])
    
    return (
        <ComandaComp>
            <div style={{padding:".5em"}}>Comanda nr : {id}</div>
            <div style={{ display: "flex" }}>
                <Purchase>
                    <CustomCarousel
                        onChange={( pageIndex) =>
                            setIndexC({  pageIndex })
                        }>
                        {cartItems.map((cart, index) => (
                            <img
                                key={index}
                                src={cart.ImageUrl} alt="" />
                        ))}
                    </CustomCarousel>
                    <DescriptionEachPurchase>
                    <div>
                        {categorie} {nume}
                    </div>
                    <div>
                            <div>Marime: <b> {marime}</b> </div>
                            <div>  Culoare: <b>{culoare} </b> </div>
                            <div> Cantitate: <b>{quantity} </b></div>
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
                    <div></div>
                </DeliveryDetails>
            </div>
        </ComandaComp>
    )
}

export default Comanda
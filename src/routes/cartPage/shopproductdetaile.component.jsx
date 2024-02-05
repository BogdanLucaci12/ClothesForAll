import { GoToPay, ShowPriceDetailsStyles, Valori } from "./cartPage.styles";
import { Cartcontext } from "../../context/addtocart.context";
import { useContext, useState, useEffect } from "react";
const ShowPriceDetails = ()=>{
    const { total } = useContext(Cartcontext)
    const [transport, setTransport]=useState(25)
    useEffect(()=>{
      if(total>199){
        setTransport(0)
      }else (
        setTransport(25)
      )
    }, [total])
    return (
    
        <ShowPriceDetailsStyles>
            <div>
                <h1 style={{textAlign:"center"}}>Sumar</h1>
                </div>
            <div>
            <Valori>
             <h3>Subtotal</h3>
             <h3> {total}</h3>
                </Valori>
                <Valori>
                    <h3>Reducere</h3>
                    <h3> 0 RON</h3>
                </Valori>
                <Valori>
                    <h3>Transport</h3>
                    <h3> {transport} RON</h3>
                </Valori>
                <Valori>
                    <h3>Total</h3>
                    <h3> {total+transport} RON</h3>
                </Valori>
            </div>
            <GoToPay>Plateste</GoToPay>
        </ShowPriceDetailsStyles>
    )
}
export default ShowPriceDetails;
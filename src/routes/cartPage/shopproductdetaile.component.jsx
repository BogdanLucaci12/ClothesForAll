import { GoToPay, ShowPriceDetailsStyles, Valori } from "./cartPage.styles";
import { Cartcontext } from "../../context/addtocart.context";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ShowPriceDetails = () => {
    const { total } = useContext(Cartcontext)
    const [transport, setTransport] = useState(25)
    const navigate=useNavigate()
    useEffect(() => {
        if (total > 199) {
            setTransport(0)
        } else (
            setTransport(25)
        )
    }, [total])
    return (
        <ShowPriceDetailsStyles>
            <div>
                <p style={{ textAlign: "center" }}>Sumar</p>
            </div>
            <div>
                <Valori>
                    <p>Subtotal</p>
                    <p> {total}</p>
                </Valori>
                <Valori>
                    <p>Reducere</p>
                    <p> 0 RON</p>
                </Valori>
                <Valori>
                    <p>Transport</p>
                    <p> {transport} RON</p>
                </Valori>
                <Valori>
                    <p>Total</p>
                    <p> {total + transport} RON</p>
                </Valori>
            </div>
            <GoToPay onClick={()=>navigate("/pay")}>Plateste</GoToPay>
        </ShowPriceDetailsStyles>
    )
}
export default ShowPriceDetails;
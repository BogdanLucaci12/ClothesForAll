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
                <h1 style={{ textAlign: "center" }}>Sumar</h1>
            </div>
            <div>
                <Valori>
                    <h5>Subtotal</h5>
                    <h5> {total}</h5>
                </Valori>
                <Valori>
                    <h5>Reducere</h5>
                    <h5> 0 RON</h5>
                </Valori>
                <Valori>
                    <h5>Transport</h5>
                    <h5> {transport} RON</h5>
                </Valori>
                <Valori>
                    <h5>Total</h5>
                    <h5> {total + transport} RON</h5>
                </Valori>
            </div>
            <GoToPay onClick={()=>navigate("/pay")}>Plateste</GoToPay>
        </ShowPriceDetailsStyles>
    )
}
export default ShowPriceDetails;
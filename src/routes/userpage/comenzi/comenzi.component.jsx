import { useContext } from "react"
import { UserContext } from "../../../context/user.context"
import { ContainerComanda } from "./comenzi.style"
import Spinner from 'react-bootstrap/Spinner';
import Comanda from "./comanda.component"
const ComenziPage=()=>{
    const {purchase}=useContext(UserContext)
    return (
        <ContainerComanda>
            
            {purchase === undefined ? (<Spinner animation="border" variant="dark" />): 
                purchase === "NoPurchase" ? (<h3 >Nu ai comenzi</h3>):
          purchase.map((e, index)=>(
            <Comanda 
            key={index}
            comanda={e}/>
          ))}

        </ContainerComanda>
    )
}
export default ComenziPage
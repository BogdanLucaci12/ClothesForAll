import { useContext } from "react"
import { UserContext } from "../../../context/user.context"
import { ContainerComanda } from "./comenzi.style"
import Comanda from "./comanda.component"
const ComenziPage=()=>{
    const {purchase}=useContext(UserContext)
    return (
        <ContainerComanda>
          {purchase.map(e=>(
            <Comanda comanda={e}/>
          ))}

        </ContainerComanda>
    )
}
export default ComenziPage
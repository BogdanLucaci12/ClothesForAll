import { useContext } from "react";
import { Link } from "react-router-dom";
import {Cartcontext} from "../../../context/addtocart.context"
import { CosGol, CosPlin, MainDiv } from "./cartcontent.styles";
import { Button, Items } from "./cartcontent.styles";
import Item from "./itemCart.component";
const CartContent=()=>{
    const {cartItems} = useContext(Cartcontext)
    return(
        <MainDiv>
            {Object.keys(cartItems).length > 0 ?
        (
      <CosPlin>
        <Items>
        {Object.values(cartItems).map((prod)=>{
          const randomKey = `${prod.id}_${prod.marime}_${prod.culoare}`;
                return <Item key={randomKey} prod={prod}/>
        })}
        </Items>
        <Link to="/cart">
        <Button>
                Finalizeaza comanda
          </Button>
        </Link>
      </CosPlin>
     )
     :
                (<CosGol><div>
            
                    Nu ai produse in cos
                 
                    </div>
                    </CosGol>)}
        </MainDiv>)
}
export default CartContent;
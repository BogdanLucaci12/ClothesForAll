import { Cartcontext } from "../../context/addtocart.context";
import { useContext } from "react";
import { MainDiv, NoProductInCart, ShowProduct } from "./cartPage.styles";
import Product from "./product.component";
import ShowPriceDetails from "./shopproductdetaile.component";
const CartPage= ()=>{
    const {cartItems}=useContext(Cartcontext)

    return (
        <MainDiv>
            {Object.keys(cartItems).length>0? (
                <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
            <ShowProduct>
                {
                    Object.values(cartItems).map((product)=>{
                        const randomKey = `${product.id}_${product.marime}_${product.culoare}`;
                        return <Product key={randomKey} product={product}/>
                    })
                }
            </ShowProduct>
            <ShowPriceDetails>
            </ShowPriceDetails>

                </div>
            ):(
                    <NoProductInCart><h1>Nu exista produse in cos</h1></NoProductInCart>
            )}
        </MainDiv>
    )
}
export default CartPage;
import { ProductMainDiv, Image, ProductDetails, PlusIcon, Cantitate, MinusIcon } from "./cartPage.styles";
import { Addtocart } from "../shop/showselectedpro/showselectedprod.styles";
import { useContext } from "react";
import { Cartcontext } from '../../context/addtocart.context'
const Product=({product})=>{
    const {nume, pret, quantity, culoare, marime, ImageUrl, id}=product;
    const { increaseQuantity, decreaseQuantity, cartItems } = useContext(Cartcontext);
    const handleButtonPlus=(item)=>{
        increaseQuantity(item)
    }
    const handleButtonMinus=(item)=>{
        decreaseQuantity(item)
    }
    console.log(product)
return (
   <ProductMainDiv>
    <div>
     <Image>
        <img src={ImageUrl} alt={id}/>
            </Image>
    </div>
        <ProductDetails>
        <h2>{nume}</h2>
        <h3>{pret} RON</h3>
        <h5>Culoare: {culoare}</h5>
        <h5>Marime: {marime}</h5>
    </ProductDetails>
    <div style={{marginLeft:"auto"}}>
        <Cantitate>
            <h3>
            Cantitate: 
                    <PlusIcon onClick={() => handleButtonPlus(product)} />
                    {quantity}
                    <MinusIcon onClick={() => handleButtonMinus(product)}/>
            </h3>
        </Cantitate>
    </div>

   </ProductMainDiv>
)
}
export default Product;
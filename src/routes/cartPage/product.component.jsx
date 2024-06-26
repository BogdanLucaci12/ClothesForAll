import { ProductMainDiv, Image, ProductDetails, PlusIcon, Cantitate, MinusIcon, Highlight } from "./cartPage.styles";
import { useContext } from "react";
import { Cartcontext } from '../../context/addtocart.context'
const Product=({product})=>{
    const {nume, pret, quantity, culoare, marime, ImageUrl, id, categorie}=product;
    const { increaseQuantity, decreaseQuantity } = useContext(Cartcontext);
    const handleButtonPlus=(item)=>{
        increaseQuantity(item)
    }
    const handleButtonMinus=(item)=>{
        decreaseQuantity(item)
    }
    
return (
   <ProductMainDiv>
    <div>
     <Image>
        <img src={ImageUrl} alt={id}/>
            </Image>
    </div>
        <ProductDetails>
        <div style={{fontSize:"15px"}}>{nume}</div>
        <div>{categorie}</div>
        <h5>{pret} RON</h5>
            <h6 style={{ display: "flex" }}>
                <Highlight >Culoare: </Highlight> {culoare}</h6>
         <h6 style={{display:"flex"}}>
                <Highlight >Marime: </Highlight> {marime}</h6>
    </ProductDetails>
    <div style={{marginLeft:"auto"}}>
        <Cantitate>
            <h5>
            Cantitate: 
                    <PlusIcon onClick={() => handleButtonPlus(product)} />
                    {quantity}
                    <MinusIcon onClick={() => handleButtonMinus(product)}/>
            </h5>
        </Cantitate>
    </div>

   </ProductMainDiv>
)
}
export default Product;
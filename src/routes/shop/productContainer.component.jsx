import { Casuta, ColorSize, ProductContainerstyle, ProductImage, FavoritesIcon } from "./shop.styles"
import { FavoritesContext } from "../../context/favorites.context";
import { useContext } from "react";
const ProductContainer= ({produs, onClick})=>{
    const { id, ImageUrl, pret, Pret, Nume, nume, culoare, marime } = produs;
    const {addToFav } = useContext(FavoritesContext)
    const handleClick= ()=>{
    onClick(produs)
   }
   const handleClickFav=()=>{
       addToFav(produs)
   }
    return(
        <ProductContainerstyle onClick={handleClick} to="/selprod">
            <FavoritesIcon onClick={handleClickFav}/>
            <ProductImage src={ImageUrl} />
            <h5>{pret || Pret} RON</h5>
            <p>{Nume || nume}</p>
            <div style={{ display: "block" }}>Culori:
                <ColorSize> {culoare.map((culori) => {
                    return <Casuta key={culori}>{culori.toLowerCase()}</Casuta>
                })}</ColorSize>
               
            </div>
            <div style={{ display: "block" }}>Marimi:
            <ColorSize>
                {marime.map((marime) => {
                    return <Casuta key={marime} >{marime}</Casuta>
                })}
            </ColorSize>
            </div>
         
        </ProductContainerstyle>
    )
}
export default ProductContainer;
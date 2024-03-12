import { Casuta, ColorSize, ProductContainerstyle, ProductImage, FavoritesIcon } from "./shop.styles"
import { FavoritesContext } from "../../context/favorites.context";
import { useContext, } from "react";
import { useNavigate } from "react-router-dom";
const ProductContainer= ({produs, onClick})=>{
    const { ImageUrl, pret, Pret, Nume, nume, culoare, marime, categorie } = produs;
    const {addToFav } = useContext(FavoritesContext)
    const navigate = useNavigate();
    const handleClickFav=()=>{
        addToFav(produs);
    }
    const handleClick= ()=>{
        onClick(produs);
        navigate("/selprod");
   }
    return(
        <ProductContainerstyle>
            <FavoritesIcon  onClick={handleClickFav}/>
        <div onClick={handleClick} > 
            <ProductImage src={ImageUrl} />
            <h5>{pret || Pret} RON</h5>
            <div>{categorie}</div>
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
             </div>  
         
        </ProductContainerstyle>
    )
}
export default ProductContainer;
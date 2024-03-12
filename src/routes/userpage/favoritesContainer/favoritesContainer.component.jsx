import { Fragment, useContext } from "react"
import { FavoritesContext } from "../../../context/favorites.context";
import ProductContainer from "../../../routes/shop/productContainer.component"

const FavoritesContainer= ()=>{
    const { favoriteItem }=useContext(FavoritesContext)
  
    return(
        <div style={{padding:"1em", display:"flex", flexWrap:"wrap"}}>
            {
                favoriteItem.length>0 ? (favoriteItem.map((fav)=>(
                    <ProductContainer
                    produs={fav}
                    />
                ))) : 
                (
                <h5>Nu ai selectat nici un produs favorit</h5>
                )
            }
        </div>
    )
}
export default FavoritesContainer
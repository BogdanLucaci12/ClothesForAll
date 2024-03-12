import { useContext } from "react"
import { FavoritesContext } from "../../../context/favorites.context"
import { CosGol, CosPlin, MainDiv } from "../cartNav/cartcontent.styles";
import { Items, Button } from "../cartNav/cartcontent.styles";
import Item from "./favoritesItem.component";
const FavoritesContent=()=>{
    const { favoriteItem} = useContext(FavoritesContext)
    
    return (
        <MainDiv>
            {Object.keys(favoriteItem).length > 0 ?
                (
                    <CosPlin>
                        <Items>
                            {Object.values(favoriteItem).map((prod, index) => {
                                const randomKey = `${prod.id}_${prod.marime}_${prod.culoare}`;
                                return <Item key={index} prod={prod} />
                            })}
                        </Items>
                       
                    </CosPlin>
                )
                :
                (<CosGol><div>
                    <p>

                    Nu ai adaugat nici un produs favorit
                    </p>
                </div>
                </CosGol>)}
        </MainDiv>)
}
export default FavoritesContent
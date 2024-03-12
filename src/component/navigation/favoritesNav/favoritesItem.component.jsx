import { useContext } from "react";
import { Itemstyles, PicItem, DetailesItem, DivEDf, RemovefavItem, CustomCursor } from "../cartNav/itemCart.styles";
import { FavoritesContext } from "../../../context/favorites.context";

const Item = ({ prod }) => {
    const { nume, pret, ImageUrl } = prod;
    const {deleteItem}=useContext(FavoritesContext);
    const handleClick = (prod)=>{
        deleteItem(prod);
    }
    return (
        <Itemstyles>
            <PicItem>
                <img src={ImageUrl} />
            </PicItem>
            <DetailesItem>
         
                <DivEDf>{nume}</DivEDf>
                <DivEDf>{pret} RON</DivEDf>
                <DivEDf>
                    <RemovefavItem onClick={()=>handleClick(prod)}/>
                </DivEDf>
            </DetailesItem>
            
        </Itemstyles>
    )
}
export default Item;
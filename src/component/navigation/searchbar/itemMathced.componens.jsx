import { ImageItem, ItemDiv, ContentItem } from "./searchbarnav.styles"
import myImage from "../../../hanorac champion femei.jpg"
import {ItemContext} from "../../../context/itemcontext.component";
import { useContext } from "react";
const ItemMatched = ({ produs })=>{
    const { item, setItem }=useContext(ItemContext)
    const {ImageUrl, nume, pret, categorie}=produs
    
const handleClick= ()=>{
    setItem(produs)
}
console.log(item)
    return <ItemDiv onClick={handleClick} to="/selprod">
        <ImageItem src={ImageUrl}/>
        <ContentItem>
            <h4>{nume}</h4>
            <h6>{categorie}</h6>
            <h6>{pret} RON</h6>
        </ContentItem>
    </ItemDiv>
}
export default ItemMatched
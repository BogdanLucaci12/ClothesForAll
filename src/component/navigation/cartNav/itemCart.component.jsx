import { Itemstyles, PicItem, DetailesItem, DivEDf } from "./itemCart.styles";
const Item=({prod})=>{
    const {nume, pret, ImageUrl, quantity}=prod;
    return (
        <Itemstyles>
            <PicItem>
                <img src={ImageUrl} alt=""/>
            </PicItem>
            <DetailesItem>
                <DivEDf>{nume}</DivEDf>
                <DivEDf>{pret} RON</DivEDf>
                <DivEDf>Cantitate: <p>{quantity}</p></DivEDf>
            </DetailesItem>
        </Itemstyles>
    )
}
export default Item
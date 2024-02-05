import { Itemstyles, PicItem, DetailesItem } from "../cartNav/itemCart.styles";
const Item = ({ prod }) => {
    const { nume, pret, ImageUrl, quantity } = prod;
    return (
        <Itemstyles>
            <PicItem>
                <img src={ImageUrl} />
            </PicItem>
            <DetailesItem>
                <p>{nume}</p>
                <p>{pret}RON</p>
                <div style={{ display: 'flex' }}>Cantitate: <p>{quantity}</p></div>
            </DetailesItem>
        </Itemstyles>
    )
}
export default Item;
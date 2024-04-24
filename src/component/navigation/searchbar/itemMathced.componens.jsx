import React, { useContext } from "react";
import { ImageItem, ItemDiv, ContentItem } from "./searchbarnav.styles";
import { ItemContext } from "../../../context/itemcontext.component";
import { LabelInSearchBar } from "./managementLabel.component";

const ItemMatched = ({ produs }) => {
    const { setLabelOff } = LabelInSearchBar()
    const { setItem } = useContext(ItemContext);
    const { ImageUrl, nume, pret, categorie } = produs;
    const handleClick = () => {
        setLabelOff(false);
        setItem(produs);
    };
    return (
        <ItemDiv onClick={handleClick} to="/selprod">
            <ImageItem src={ImageUrl} />
            <ContentItem>
                <h5>{nume}</h5>
                <h6>{categorie}</h6>
                <h6>{pret} RON</h6>
            </ContentItem>
        </ItemDiv>
    )
    ;
};

export default ItemMatched;

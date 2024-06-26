import React from "react";
import { FeaturesMain, ImageUserContainer, Descriere, } from "./userpage.styles";

const Features = ({ image, denumire, onClick }) => {
    return (
        <FeaturesMain onClick={onClick}>
            <ImageUserContainer >
                {image}
            </ImageUserContainer>
            <Descriere>
                <div>{denumire}</div>
            </Descriere>
        </FeaturesMain>
    );
};
export default Features;

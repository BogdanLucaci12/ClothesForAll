import { MainDiv, Meniu, ShowDetailsForSelectedMeniu, HeaderMeniuUser, ImageUserContainer, Image, ContentMeniu } from "./userpage.styles";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import Features from "./features.component";
import { FcTodoList } from "react-icons/fc";
import { AiFillCreditCard } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { TiHeartOutline } from "react-icons/ti";
import { BsPower } from "react-icons/bs";
import AboutUser from "./aboutuserContainer/aboutuser.component";
import { ManageClickOnUserPage } from "../../context/managaAccountSubpage.component";
import UserAdress from "./AdrressContainer/useradress.component";
import CardContainer from "./cardContainer/cardContainer.component";
const UserPage = () => {
    const { currentUser, userUid } = useContext(UserContext)
    const { states, setClickState } = useContext(ManageClickOnUserPage)
    const handleAdressClick = () => {
        setClickState("adress");
    }
    const handleCardClick = () => {
    setClickState("card")
    }
    const handleDefaultClick = () => {
        setClickState("defaultClick")
    }
    return (
        <MainDiv>
            <Meniu>
                <HeaderMeniuUser onClick={handleDefaultClick}>
                    <ImageUserContainer>
                        <Image />
                    </ImageUserContainer>
                    <h4>{currentUser}</h4>
                </HeaderMeniuUser>
                <ContentMeniu>
                    <Features image={<FcTodoList style={{ fontSize: "3em" }} />} denumire={"Comenzi"}
                   
                    />
                    <Features image={< AiFillCreditCard style={{ fontSize: "3em" }} />} denumire={"Cardurile mele"}
                        onClick={handleCardClick}
                    />
                    <Features image={< ImLocation style={{ fontSize: "3em" }} />} denumire={"Adresele mele"}
                        onClick={handleAdressClick} />
                    <Features image={< TiHeartOutline style={{ fontSize: "3em" }} />} denumire={"Produse favorite"} />
                    <Features image={< BsPower style={{ fontSize: "3em" }} />} denumire={"Delogheaza-te"} />
                </ContentMeniu>
            </Meniu>
            <ShowDetailsForSelectedMeniu>
                {
                    states.defaultClick && <AboutUser />
                }
                {
                    states.adress && <UserAdress />
                }
                {
                    states.card && <CardContainer />
                }

            </ShowDetailsForSelectedMeniu>
        </MainDiv>
    )
}
export default UserPage;
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
import FavoritesContainer from "./favoritesContainer/favoritesContainer.component";
import { signOutUser } from "../../utility/firebase";
import { useNavigate } from "react-router-dom";
import ComenziPage from "./comenzi/comenzi.component";
const UserPage = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { states, setClickState } = useContext(ManageClickOnUserPage)
    const navigate=useNavigate()
    const handleAdressClick = () => {
        setClickState("adress");
    }
    const handleCardClick = () => {
    setClickState("card")
    }
    const handleDefaultClick = () => {
        setClickState("defaultClick")
    }
    const handleClickFav=()=>{
        setClickState("fav")
    }
    const handleClickComenzi=()=>{
        setClickState("comenzi")
    }
    const handleDelogare=async()=>{
        await signOutUser();
        setCurrentUser("");
        setTimeout(()=>{navigate("/")}, 2000)
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
                    <Features image={<FcTodoList style={{ fontSize: "2em" }} />} denumire={"Comenzi"}
                   onClick={handleClickComenzi}
                    />
                    <Features image={< AiFillCreditCard style={{ fontSize: "2em" }} />} denumire={"Cardurile mele"}
                        onClick={handleCardClick}
                    />
                    <Features image={< ImLocation style={{ fontSize: "2em" }} />} denumire={"Adresele mele"}
                        onClick={handleAdressClick} />
                    <Features image={< TiHeartOutline style={{ fontSize: "2em" }} />} denumire={"Produse favorite"} onClick={handleClickFav}/>
                    <Features image={< BsPower style={{ fontSize: "2em" }} />} denumire={"Delogheaza-te"} onClick={handleDelogare}/>
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
                {
                    states.fav && <FavoritesContainer/>
                }
                {
                    states.comenzi && <ComenziPage/>
                }
            </ShowDetailsForSelectedMeniu>
        </MainDiv>
    )
}
export default UserPage;
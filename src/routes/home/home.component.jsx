import { HomeMainDiv, HomePic, A23b, A23bc } from "./home.styles";
import pic from "../../assets/mainPic.png"
const Home = ()=>{
    return (
        <HomeMainDiv>
            <A23b>
                <div>
                <h1>Welcome to Our Exclusive Online Store</h1>
                </div>
                <div>
                <h5>Discover a world where fashion meets minimalism. Our collection bringe togheter the essence of style and simplicity, caterubg to your unique tastes with exceptional quality and design</h5>
                </div>
            </A23b>
            <A23bc>
                <HomePic src={pic}/>
            </A23bc>
        </HomeMainDiv>
    )
}
export default Home;
import { Navigationcontainer, LogoContainer, GenProduse, UserIcon } from "./navigation.syles";
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import SearchBarNav from "./searchbar/searchbarnav.component";
import CartIcon from "./cartNav/cartIcon.component";
import FavoritesIcon from "./favoritesIcon.component";
import AccountIcon from "./accountNav/account.component";
import { CategorieContext } from "../../context/categorie.context";
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
const NavigationBar = () => {
    const {setSeteazaCategoria } = useContext(CategorieContext);
    const seteazaBarbat = () => setSeteazaCategoria("barbati")
    const seteazaFemeie = () => setSeteazaCategoria("femei")
    const seteazaCopil = () => setSeteazaCategoria("copil")
    const [navVisible, setNavVisible] = useState(true);
    const lastScrollTop = useRef(0);
    const isMobile = useMediaQuery({ maxWidth: 900 });
    useEffect(() => {
        const handleScroll = () => {
            if(isMobile){
                const scrollTop = window.scrollY;
                if (scrollTop > lastScrollTop.current) {
                    setNavVisible(false);
                } else {
                    setNavVisible(true);
                }
                lastScrollTop.current = scrollTop;
            }
            else {
                return
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);
    return (
        <div>
            <div>
                <Navigationcontainer>
                    <LogoContainer to='/'>
                        <img src={logo} alt="" style={{ width: '100%', height: '100%' }} />
                    </LogoContainer>
                    <GenProduse >
                        <Link to="/shop" onClick={seteazaFemeie}><h5>Femei</h5></Link>
                        <Link to="/shop" onClick={seteazaBarbat}><h5>Barbati</h5></Link>
                        <Link to="/shop" onClick={seteazaCopil}><h5>Copii</h5></Link>
                    </GenProduse>
                    <SearchBarNav />
                    {
                        navVisible && (
                    <UserIcon>
                        <CartIcon />
                        <FavoritesIcon />
                        <AccountIcon/>
                    </UserIcon>
                        )
                    }
                </Navigationcontainer>

            </div>
            <Outlet />
        </div>
    )
}
export default NavigationBar;
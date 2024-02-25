import { Navigationcontainer, LogoContainer, GenProduse, UserIcon } from "./navigation.syles";
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import SearchBarNav from "./searchbar/searchbarnav.component";
import CartIcon from "./cartNav/cartIcon.component";
import FavoritesIcon from "./favoritesIcon.component";
import AccountIcon from "./accountNav/account.component";
import { CategorieContext } from "../../context/categorie.context";
import { useContext } from "react";
const NavigationBar = () => {
    const { seteazaCategoria, setSeteazaCategoria } = useContext(CategorieContext);
    const seteazaBarbat = () => setSeteazaCategoria("barbati")
    const seteazaFemeie = () => setSeteazaCategoria("femei")
    const seteazaCopil = () => setSeteazaCategoria("copil")
    return (
        <div>
            <div>
                <Navigationcontainer>
                    <LogoContainer to='/'>
                        <img src={logo} alt="" style={{ width: '100%', height: '100%' }} />
                    </LogoContainer>
                    <GenProduse >
                        <Link to="/shop" onClick={seteazaFemeie}><h4>Femei</h4></Link>
                        <Link to="/shop" onClick={seteazaBarbat}><h4>Barbati</h4></Link>
                        <Link to="/shop" onClick={seteazaCopil}><h4>Copii</h4></Link>
                    </GenProduse>
                    <SearchBarNav />
                    <UserIcon>
                        <CartIcon />
                        <FavoritesIcon />
                        <AccountIcon>
                            <Link to="/cart"></Link>
                        </AccountIcon>
                    </UserIcon>
                </Navigationcontainer>

            </div>
            <Outlet />
        </div>
    )
}
export default NavigationBar;
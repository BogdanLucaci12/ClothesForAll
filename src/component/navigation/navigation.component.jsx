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
    return (
        <div>
            <div>
                <Navigationcontainer>
                    <LogoContainer to='/'>
                        <img src={logo} alt="" style={{ width: '4vw', height: '90%' }} />
                    </LogoContainer>
                    <GenProduse style={{ display: 'flex', justifyContent: 'space-between', width: "20%" }}>
                        <Link to="/shop" onClick={seteazaFemeie}>Femei</Link>
                        <Link to="/shop" onClick={seteazaBarbat}>Barbati</Link>
                        <Link to="/shop">Copii</Link>
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
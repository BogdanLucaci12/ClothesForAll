import { Link } from 'react-router-dom';
import { NavigationIconContainer, CountLengthCart } from './navigation.syles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DropdownComponent from './dropdownmenu/dropdownmenu.component';
import useDropdownMenu from './dropdownmenu/handledropdownmenu.component';
import { useContext, useState } from 'react';
import FavoritesContent from './favoritesNav/favorites.componenst';
import { FavoritesContext } from '../../context/favorites.context';
const FavoritesIcon = () => {
    const { isDropdownMenuOpen, handleClose, handleOpen } = useDropdownMenu();
    const {favoriteItem}=useContext(FavoritesContext)
    return (
        <NavigationIconContainer
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            <CountLengthCart>{favoriteItem.length}</CountLengthCart>
            <Link>
                <FavoriteBorderOutlinedIcon style={{ fontSize: '4vh' }} />
                <p>Favorite</p>
            </Link>
            {
                isDropdownMenuOpen &&
                <DropdownComponent>
                    <FavoritesContent />
                </DropdownComponent>

            }
        </NavigationIconContainer>

    )
}
export default FavoritesIcon;
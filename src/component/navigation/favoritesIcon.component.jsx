import { Link } from 'react-router-dom';
import { NavigationIconContainer } from './navigation.syles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DropdownComponent from './dropdownmenu/dropdownmenu.component';
import useDropdownMenu from './dropdownmenu/handledropdownmenu.component';
import { useState } from 'react';
import FavoritesContent from './favoritesNav/favorites.componenst';
const FavoritesIcon= ()=>{
    const {isDropdownMenuOpen,handleClose,handleOpen}=useDropdownMenu();
    return (
        <NavigationIconContainer 
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        >
            <Link>
            <FavoriteBorderOutlinedIcon style={{ fontSize: '4vh' }} />
            <p>Favorite</p>  
            </Link>
            {
                isDropdownMenuOpen && <DropdownComponent>
                    <FavoritesContent/>
                    </DropdownComponent>
          
            }
        </NavigationIconContainer>
    
    )
}
export default FavoritesIcon;
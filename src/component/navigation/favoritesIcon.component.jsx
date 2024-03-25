import { Link, useNavigate } from 'react-router-dom';
import { NavigationIconContainer, CountLengthCart } from './navigation.syles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DropdownComponent from './dropdownmenu/dropdownmenu.component';
import useDropdownMenu from './dropdownmenu/handledropdownmenu.component';
import { useContext, useState } from 'react';
import FavoritesContent from './favoritesNav/favorites.componenst';
import { FavoritesContext } from '../../context/favorites.context';
import { ManageClickOnUserPage } from '../../context/managaAccountSubpage.component';
import { UserContext } from '../../context/user.context';

const FavoritesIcon = () => {
    const { isDropdownMenuOpen, handleClose, handleOpen } = useDropdownMenu();
    const {favoriteItem}=useContext(FavoritesContext)
    const {setClickState}=useContext(ManageClickOnUserPage)
    const { currentUser }=useContext(UserContext)
    const navigate=useNavigate()
    const handleclick =()=>{
        if (currentUser){
            navigate("/userPage")
            setClickState("fav")
        }
        else{
            navigate("/account")
        }
    }
    return (
        <NavigationIconContainer
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            
        >
            <CountLengthCart>{favoriteItem.length}</CountLengthCart>
            <div onClick={handleclick}>
                <FavoriteBorderOutlinedIcon style={{ fontSize: '4vh' }} />
                <p>Favorite</p>
            </div>
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
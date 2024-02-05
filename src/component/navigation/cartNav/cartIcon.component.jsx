import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavigationIconContainer } from '../navigation.syles';
import { Link } from 'react-router-dom';
import DropdownComponent from '../dropdownmenu/dropdownmenu.component';
import useDropdownMenu from '../dropdownmenu/handledropdownmenu.component';
import CartContent from './cartcontent.component';
const CartIcon = () => {
   const { isDropdownMenuOpen, handleOpen, handleClose } = useDropdownMenu();

   return (
      <NavigationIconContainer onMouseEnter={handleOpen} onMouseLeave={handleClose}>
         <Link to="/cart">
            <ShoppingCartOutlinedIcon style={{ fontSize: '4vh' }} />
            <p>Coșul meu</p>
         </Link>
         {isDropdownMenuOpen &&
            <DropdownComponent>
               <CartContent />
            </DropdownComponent>}
      </NavigationIconContainer>
   );
};

export default CartIcon;

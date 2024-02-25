import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavigationIconContainer, CountLengthCart } from '../navigation.syles';
import { Link } from 'react-router-dom';
import DropdownComponent from '../dropdownmenu/dropdownmenu.component';
import useDropdownMenu from '../dropdownmenu/handledropdownmenu.component';
import CartContent from './cartcontent.component';
import { useContext } from 'react';
import { Cartcontext } from '../../../context/addtocart.context';
const CartIcon = () => {
   const { isDropdownMenuOpen, handleOpen, handleClose } = useDropdownMenu();
   const {cartItems}=useContext(Cartcontext)
   return (
      <NavigationIconContainer onMouseEnter={handleOpen} onMouseLeave={handleClose}>
         <CountLengthCart>{cartItems.length}</CountLengthCart>
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

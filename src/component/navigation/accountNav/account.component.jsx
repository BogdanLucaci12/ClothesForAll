import { NavigationIconContainer } from '../navigation.syles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DropdownComponent from '../dropdownmenu/dropdownmenu.component';
import useDropdownMenu from '../dropdownmenu/handledropdownmenu.component';
import AccountContent from './content/accountcontent.component';
import { useContext } from 'react';
import { UserContext } from '../../../context/user.context';
const AccountIcon = () => {
    const { isDropdownMenuOpen, handleOpen, handleClose } = useDropdownMenu();
    const { currentUser }=useContext(UserContext)
    return (
        <NavigationIconContainer
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
           
        >
            <AccountCircleOutlinedIcon style={{ fontSize: '4vh' }} />
            {
                currentUser ? (<p>{currentUser}</p>) : (<p>Contul Meu</p>)
            }
            
            {
                isDropdownMenuOpen &&
                <DropdownComponent>
                    <AccountContent/>
                </DropdownComponent>
            }
        </NavigationIconContainer>
    )
}
export default AccountIcon;
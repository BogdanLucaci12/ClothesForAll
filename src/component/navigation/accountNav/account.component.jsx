import { NavigationIconContainer } from '../navigation.syles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DropdownComponent from '../dropdownmenu/dropdownmenu.component';
import useDropdownMenu from '../dropdownmenu/handledropdownmenu.component';
import AccountContent from './content/accountcontent.component';
import { useContext } from 'react';
import { UserContext } from '../../../context/user.context';
import { useNavigate } from 'react-router-dom';
const AccountIcon = () => {
    const { isDropdownMenuOpen, handleOpen, handleClose } = useDropdownMenu();
    const { currentUser }=useContext(UserContext);
    const navigate=useNavigate()
    const handleclick = ()=>{
        if(currentUser===""){
            navigate("/account")
        }
        else {
            navigate("/userPage")
        }
    }
    return (
        <NavigationIconContainer
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            
            
            <AccountCircleOutlinedIcon style={{ fontSize: '3.5vh' }} onClick={handleclick}/>
            
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
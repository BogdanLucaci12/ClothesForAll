import { AccountContentStyle } from "./accountcontent.styles";
import { Button } from "../../../button/button.styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import { signOutUser } from "../../../../utility/firebase";
const AccountContent = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler= async()=>{
        await signOutUser();
        setCurrentUser(null)
    }
    return (
        <AccountContentStyle >
            <div>
                {
                    currentUser ? (<p>Bine ai venit, {currentUser}</p>) : <p>Nici un utilizator logat</p>
                }
            </div>
            <div>
                {
                    currentUser ?
                        (<Link to="/account">
                            <Button onClick={signOutHandler}>
                                Delogheaza-te
                            </Button>
                        </Link>) :
                        ( <Link to="/account">
                     <Button>
                        Logheaza-te
                    </Button>
                </Link>)
            }
            </div>
        </AccountContentStyle>
    )
}
export default AccountContent;
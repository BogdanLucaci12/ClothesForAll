import { AccountContentStyle } from "./accountcontent.styles";
import { Button } from "../../../button/button.styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import { signOutUser } from "../../../../utility/firebase";
import { useNavigate } from "react-router-dom";

const AccountContent = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate()
    const signOutHandler = async () => {
        try {
            await signOutUser();
            setCurrentUser("");
            setTimeout(() => { navigate("/") }, 1000)

        } catch (error) {
            console.error("Error during logout:", error);
        }
    }
    return (
        <AccountContentStyle >
            <div>
                {
                    currentUser ? (<p>Bine ai venit, {currentUser}</p>) : <p>Niciun utilizator logat</p>
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
                        (<Link to="/account">
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
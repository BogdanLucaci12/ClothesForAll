import { SignUp, LogRegContainer, LogIn, SignInGoogle, LabelUser, InputUser, FormUser } from "./LogReg.styled";
import GoogleIcon from '@mui/icons-material/Google';
import { ButtonSignRegIn } from "../button/button.styles";
import { useState, useContext, } from "react";
import Dissapear from "./inputlabeldissapear.component";
import { signInWithGooglePopUp, 
  createUserDocumentFromAuth, 
  createAuthUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
   getDisplayName,
  getUserDisplayName
  } from "../../utility/firebase";
import { UserContext } from "../../context/user.context";
import { useNavigate } from 'react-router-dom';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const AccountPage = () => {
  const { handleInputFocus, labelOffEmail, labelOffPassword, labelOffName, labelOffconfirmPassword } = Dissapear();
  const [logInState, setLogInState] = useState(true);
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  const signInProvider = async () => {
    const { user } = await signInWithGooglePopUp();
    setCurrentUser(user.displayName);
    navigate("/")
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const handleSignIn= async (event) => {
event.preventDefault()
try{
  const {user} = await signInUserWithEmailAndPassword(email, password);
  const userDisplayName = await getUserDisplayName(user);
  setCurrentUser(userDisplayName)
  resetFormFields();
  navigate("/");
}
catch(error){
  console.log("erorr for signIn", error.code)
}
  }
  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("pasword doesnt match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName })
    resetFormFields();
      const resetLogInPage= ()=>{
        setLogInState(true)
      }
      resetLogInPage()
    }
    catch (error) {
      console.log('user register encountered an error', error)
    }
  }
  const changeEvent = (e) => {
    handleInputFocus(e);
    handleChange(e);
  }
  return (
    <LogRegContainer>
      {
        logInState ? (
          <LogIn>
            <h1 style={{ textAlign: 'center' }}>LogIn</h1>
            <FormUser onSubmit={handleSignIn}>
              <div>
                <LabelUser $hidelabel={labelOffEmail}>Email</LabelUser>
                <InputUser
                  type="email"
                  name="email"
                  onChange={changeEvent}
                  value={email}
                />
              </div>
              <div>
                <LabelUser $hidelabel={labelOffPassword}>Password</LabelUser>
                <InputUser
                  type="password"
                  name="password"
                  onChange={changeEvent}
                  value={password}
                />
              </div>
              <ButtonSignRegIn>LogIn</ButtonSignRegIn>
            </FormUser>
            <div style={{ display: 'flex' }}>Nu ai cont? <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogInState(false)}>Inregistreaza-te</div></div>
          </LogIn>
        )
          : (
            <SignUp>
              <h1 style={{ textAlign: 'center' }}>Register</h1>
              <FormUser onSubmit={handleSubmitRegister}>
                <div>
                  <LabelUser $hidelabel={labelOffName}>Name</LabelUser>
                  <InputUser
                    type="name"
                    name="displayName"
                    onChange={changeEvent}
                    value={displayName}
                  />
                </div>
                <div>
                  <LabelUser $hidelabel={labelOffEmail}>Email</LabelUser>
                  <InputUser
                    type="email"
                    name="email"
                    onChange={changeEvent}
                    value={email}
                  />
                </div>
                <div>
                  <LabelUser $hidelabel={labelOffPassword}>Password</LabelUser>
                  <InputUser
                    type="password"
                    name="password"
                    onChange={changeEvent}
                    value={password}
                  />
                </div>
                <div>
                  <LabelUser $hidelabel={labelOffconfirmPassword}>Confirm Password</LabelUser>
                  <InputUser
                    type="password"
                    name="confirmPassword"
                    onChange={changeEvent}
                    value={confirmPassword}
                  />
                </div>
                <ButtonSignRegIn>Register</ButtonSignRegIn>
              </FormUser>
             
              <p>Ai deja cont? <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogInState(true)}>Logheaza-te</div></p>
            </SignUp>)}
      <SignInGoogle>
        <p>Or</p>
        <ButtonSignRegIn onClick={signInProvider}> <GoogleIcon /> SignIn with Google</ButtonSignRegIn>
      </SignInGoogle>
    </LogRegContainer>
  )
}
export default AccountPage;
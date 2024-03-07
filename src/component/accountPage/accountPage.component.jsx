import { SignUp, LogRegContainer, LogIn, SignInGoogle, LabelUser, InputUser, FormUser } from "./LogReg.styled";
import GoogleIcon from '@mui/icons-material/Google';
import { ButtonSignRegIn } from "../button/button.styles";
import { useState, useContext, useEffect } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  getUserDisplayName
} from "../../utility/firebase";
import { UserContext } from "../../context/user.context";
import { useNavigate } from 'react-router-dom';


const defaultFormFields = {
  nume: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const AccountPage = () => {
  const [logInState, setLogInState] = useState(true);
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { nume, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const [labelOffEmail, setLabelOffEmail] = useState(true);
  const [labelOffPassword, setLabelOffPassword] = useState(true);
  const [labelOffName, setLabelOffName] = useState(true);
  const [labelOffconfirmPassword, setLabelOffconfirmPassword] = useState(true);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })

  }
  const signInProvider = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user)
    setCurrentUser(user.displayName);
    navigate("/")
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      const userDisplayName = await getUserDisplayName(user);
      setCurrentUser(userDisplayName)
      resetFormFields();
      navigate("/");
    }
    catch (error) {
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
      await createUserDocumentFromAuth(user, { nume })
      resetFormFields();
      setLogInState(true)
    }
    catch (error) {
      console.log('user register encountered an error', error)
    }
  }
  useEffect(() => {
    nume !== "" ? setLabelOffName(false) : setLabelOffName(true)
    email !== "" ? setLabelOffEmail(false) : setLabelOffEmail(true)
    password !== "" ? setLabelOffPassword(false) : setLabelOffPassword(true)
    confirmPassword !== "" ? setLabelOffconfirmPassword(false) : setLabelOffconfirmPassword(true)
  }, [nume, email, password, confirmPassword]);
  const changeEvent = (e) => {
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
                {
                  labelOffEmail && (
                    <LabelUser>Email</LabelUser>
                  )
                }
                <InputUser
                  id="email"
                  type="email"
                  name="email"
                  onChange={changeEvent}
                  value={email}
                />
              </div>
              <div>
                {
                  labelOffPassword &&
                  (
                    <LabelUser>Password</LabelUser>
                  )
                }
                <InputUser
                  type="password"
                  name="password"
                  onChange={changeEvent}
                  value={password}
                />
              </div>
              <ButtonSignRegIn>LogIn</ButtonSignRegIn>
            </FormUser>
            <div style={{ display: 'block' }}>Nu ai cont? <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogInState(false)}> Inregistreaza-te</div></div>
          </LogIn>
        )
          : (
            <SignUp>
              <h1 style={{ textAlign: 'center' }}>Register</h1>
              <FormUser onSubmit={handleSubmitRegister}>
                <div>
                  {
                    labelOffName && (
                      <LabelUser>Name</LabelUser>
                    )
                  }
                  <InputUser
                    type="text"
                    name="nume"
                    onChange={changeEvent}
                    value={nume}
                  />
                </div>
                <div>
                  {
                    labelOffEmail && (
                      <LabelUser >Email</LabelUser>
                    )
                  }
                  <InputUser
                    type="email"
                    name="email"
                    onChange={changeEvent}
                    value={email}
                  />
                </div>
                <div>
                  {
                    labelOffPassword && (
                      <LabelUser>Password</LabelUser>
                    )
                  }
                  <InputUser
                    type="password"
                    name="password"
                    onChange={changeEvent}
                    value={password}
                  />
                </div>
                <div>
                  {
                    labelOffconfirmPassword && (
                      <LabelUser >Confirm Password</LabelUser>
                    )
                  }
                  <InputUser
                    type="password"
                    name="confirmPassword"
                    onChange={changeEvent}
                    value={confirmPassword}
                  />
                </div>
                <ButtonSignRegIn>Register</ButtonSignRegIn>
              </FormUser>

              <div>Ai deja cont? <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogInState(true)}>Logheaza-te</div></div>
            </SignUp>)}
      <SignInGoogle>
        <p>Or</p>
        <ButtonSignRegIn onClick={signInProvider}> <GoogleIcon /> SignIn with Google</ButtonSignRegIn>
      </SignInGoogle>
    </LogRegContainer>
  )
}
export default AccountPage;
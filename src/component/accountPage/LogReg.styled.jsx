import styled from "styled-components";

export const LogRegContainer= styled.div`
position: absolute;
display: grid;
justify-content: center;
top:50%;
left:50%;
min-width:30%;
max-width:50;
height:50%;
border:.1px solid black;
transform: translate(-50%, -50%);
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius: 10px;
background-color:white;
z-index:5;
`

export const LogIn=styled.div`
margin-top:2em;
display:grid;
place-items: center;
`
export const SignUp=styled.div`
display:grid;
place-items: center;
`
export const LabelUser=styled.label`

position:absolute;
  opacity: ${({ $hidelabel }) => ($hidelabel ? 0 : 1)};
  transition: opacity 0.3s ease;
`
export const InputUser=styled.input`
height:3vh;
border:1px solid rgba(0, 0, 0, 0.2);
border-radius: 5px;
width:18vw;
`
export const FormUser=styled.form`
position:relative;
display:grid;
gap:1em;
width:100%;
place-items:center;
`

export const SignInGoogle=styled.div`
display:grid;
place-items:center;
`
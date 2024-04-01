
import styled from "styled-components";
import { LiaUserCircle } from "react-icons/lia";
import { GrAdd } from "react-icons/gr";


export const AboutUserMain = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: center;
`

export const Containerul = styled.div`
height: auto;
width: 80%;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:1rem;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width:900px) {
    box-shadow: none
}
`
export const HeaderContainer = styled.div`
margin-bottom:0;
width: 100%;
display: flex;
justify-content:center;
`
export const Content = styled.div`
height: 25vh;
width: 100%;
display:flex;
align-items: center;
justify-content: center;
@media screen and (max-width:900px) {
    flex-direction: column;
}
`
export const Image = styled(LiaUserCircle)`
width: 9vw;
height: 9vh;
`
export const FooterContainer = styled.div`
margin-top:0;
width: 100%;
font-size:15px;
display: flex;
justify-content:center;
&:hover{
cursor: pointer;
background-color:black;
color:white;
border-bottom-right-radius: 1rem;
border-bottom-left-radius: 1rem;
}
`
export const ButtonSubmit=styled.button`
position: relative;
background-color:black;
color:white;
display:flex;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
display:flex;
justify-content:center;
cursor:pointer;
padding:.8em;
width: 15vw;
top:90%;
@media screen and (max-width:900px) {
 width:100%;  
}
`

export const ModifiyDataMainDiv=styled.div`
position:absolute;
width:100%;
height:100%;
overflow:hidden;
background-color:rgba(0,0,0,0.5);
right:0;
top:0;
display:flex;
justify-content:center;
align-items:center;
z-index:10;
@media screen and (max-width:900px) {
   
}
`
export const ModifiyDataContainer=styled.div`
position:relative;
width:50vw;
height:auto;
background:white;
border-radius:1rem;
padding:.5em;
@media screen and (max-width:900px) {
 width:100%;  
}
`

export const CloseSign = styled(GrAdd)`
position:absolute;
width:2em;
height:2em;
cursor:pointer;
transition:transform 950ms ease-in-out;
right:0;

&:hover{
    transform:rotate(360deg)
}
`
export const Formular=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:auto;
& input{
    width:50%;
    margin-right:1em;
    border-radius:1em;
    height:3em;
border: 1px solid rgba(0,0,0,0.3);
}

& label{
    font-size:20px;
    margin-right:1em;
    margin-left:0;
}
& div{
    margin:1em;
     margin-left:0;
}
`
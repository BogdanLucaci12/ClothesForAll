import styled from "styled-components";
import { LiaUserCircle } from "react-icons/lia";

export const MainDiv= styled.div`
width:100%;
height:100%;
padding:1em;
display:flex;
background-color:#FFEEDD;
gap:1em;
`

export const Meniu=styled.div`
width:25%;
height:85vh;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
background-color:white;
border-radius:2rem;
`

export const ShowDetailsForSelectedMeniu=styled.div`
width:85%;
height:auto;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
background-color:white;
border-radius:2rem;
display:flex;
flex-direction:column;
`
export const HeaderMeniuUser=styled.div`
height: 10vh;
width:100%;
background-color:rgba(0,0,0,0.7);
border-top-right-radius:2rem;
border-top-left-radius:2rem;
display:flex;
justify-content:space-around;
align-items:center;
color:white;
cursor:pointer;
`
export const ImageUserContainer=styled.div`
width: 5em;
height: 5em;
display:flex;
justify-content:center;
align-items:center;

`

export const Image = styled(LiaUserCircle)`
width: 100%;
height: 100%;
`
export const ContentMeniu=styled.div`
margin-top:1em;
display:flex;
flex-direction:column;
align-items:center;
gap:1.5em;
`
export const FeaturesMain=styled.div`
width:95%;
height: 7vh;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:2rem;
display:flex;
justify-content:space-around;
align-items:center;
padding:1em;
&:hover{
    background-color:rgba(0,0,0,0.7);
    color:white;
    cursor:pointer;
}
`
export const Descriere=styled.div`
font-size:25px;
`

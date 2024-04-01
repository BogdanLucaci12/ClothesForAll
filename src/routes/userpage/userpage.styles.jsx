import styled from "styled-components";
import { LiaUserCircle } from "react-icons/lia";

export const MainDiv= styled.div`
width:100%;
height:100%;
padding:1em;
display:flex;
background-color:#FFEEDD;
gap:1em;
@media screen and (max-width:900px) {
  flex-direction:column;
  margin-top:2em;
}
`

export const Meniu=styled.div`
width:25%;
height:85vh;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
background-color:white;
border-radius:2rem;
@media screen and (max-width:900px) {
  width:100%;
  height:17vh;
}
`

export const ShowDetailsForSelectedMeniu=styled.div`
width:85%;
height:auto;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
background-color:white;
border-radius:2rem;
display:flex;
flex-direction:column;
padding:.4em;
@media screen and (max-width:900px) {
    width:100%;
    padding:0
}
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
@media screen and (max-width:900px) {

}
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
@media screen and (max-width:900px) {
 flex-direction:initial;
     justify-content:center;
    margin:.2em;
}
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
@media screen and (max-width:900px) {
    height:3em;
    width:3em;
    justify-content:center
}
`
export const Descriere=styled.div`
font-size:15px;
@media screen and (max-width:900px) {
    display:none
}
`

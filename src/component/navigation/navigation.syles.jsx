import styled from "styled-components"
import { Link } from "react-router-dom"
export const Navigationcontainer=styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:.5em;
     justify-content: space-around;
  box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius: 10px;
position: relative;;
@media screen and (max-width:900px) {
  justify-content:start;
}

`
export const LogoContainer=styled(Link)`
width:4em;
height:auto;
@media screen and (max-width:900px) {

}
`

export const GenProduse=styled.div`
position: relative;
display:flex;
justify-content: space-around;
width:30%;
@media screen and (max-width:900px) {
width:90%;
 justify-content: space-between;
 padding: 1em;
}
`

export const UserIcon=styled.div`
display: flex;
justify-content: space-between;
gap:.5em;
align-items: center;
text-align:center;
min-width:15vw;
  @media screen and (max-width:900px) {
position: fixed;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:2rem;
background-color:white;
min-width: 95%;
height: 3em;
top:85vh;
justify-content: space-around;
z-index:5
}
`
export const NavigationIconContainer=styled.div`
display:flex;
flex-direction: column;
align-items: center;
place-items:center;
position:relative;
cursor:pointer;
height:3em
`
export const CountLengthCart=styled.div`
position: absolute;
top: 0;
right:0;
background-color:black;
border-radius:50%;
height:1.5em;
width:1.5em;
color:white;
display:flex;
align-items: center;
justify-content: center;
`
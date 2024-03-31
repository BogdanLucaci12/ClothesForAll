import styled from "styled-components";
import { CgAddR, CgRemoveR } from "react-icons/cg";

export const PlusIcon = styled(CgAddR)`
cursor: pointer;
margin:0 .4em;
`
export const MinusIcon = styled(CgRemoveR)`
cursor: pointer;
margin-left:.4em;
`

export const MainDiv = styled.div`
width:100%;
height:100%;
padding:2em;
position:relative;
display: flex;
justify-content:center;
`
export const ShowProduct = styled.div`
width:60%;
height: auto;
margin: 1em;
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius: 10px;
 @media screen and (max-width:900px) {
width:100%; 
}
`
export const ShowPriceDetailsStyles = styled.div`
width:20%;
max-height:35vh;
margin: 1em;
  box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius: 10px;
padding:.8em;
@media screen and (max-width:900px) {
width:100%; 

}
`
export const ProductMainDiv = styled.div`
height:25vh;
width:100%;
border-bottom:.7px solid rgba(0,0,0,0.3);
padding:1em;
position:relative;
display:flex;
justify-content:center;
@media screen and (max-width:900px) {
display:block;
height:auto;
justify-content:center;
}
`
export const Image = styled.div`
height:auto;
display:flex;
position:relative;
justify-content:center;
align-items:center;

& img {
    width:10em;
height:10em
}
`
export const ProductDetails = styled.div`
display:flex;
margin-left:1em;
width:100%;
flex-direction:column;
 & h3, & h5{
  margin: 1em 0;
}

`
export const Cantitate = styled.div`
display:flex;
position:relative;
justify-content:center;
align-items:center;
`

export const Valori = styled.div`
display:flex;
justify-content:space-between;
`
export const GoToPay = styled.button`
width:100%;
border-radius: 1em;
height:2em;
color:white;
background-color:black;
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
`
export const NoProductInCart = styled.div`
position:absolute;
top:20vh;
left:50%;
transform:translate(-50%, -50%);
color:white;
background-color:black;
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius:2em;
padding:2em;
 @media screen and (max-width:900px) {
left:50%;
width:80vw;
}
`

export const ProductInCart = styled.div`
width:100%;
height:auto;
 display:flex;
 justify-content:center;
 @media screen and (max-width:900px) {
display:block;
}
`

export const Highlight = styled.div`
color:white;
background-color:black;
margin-right:1em;
padding:.1em
`
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
width:auto;
height:auto;
padding:2em;
display:flex;
flex-direction:row;
justify-content:center;
`
export const ShowProduct=styled.div`
width:60%;
height: auto;
margin: 1em;
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius: 10px;
`
export const ShowPriceDetailsStyles =styled.div`
width:20%;
max-height: 20em;
margin: 1em;
  box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius: 10px;
padding:.8em
`
export const ProductMainDiv =styled.div`
height:25vh;
width:100%;
border-bottom:.7px solid rgba(0,0,0,0.3);
padding:1em;
position:relative;
display:flex;
`
export const Image=styled.div`
height:100%;
width:40%;
display:flex;
& img {
    width:20em;
    max-height:20em;
    min-height:15em;
}
`
export const ProductDetails=styled.div`
display:flex;
margin-left:1em;
flex-direction:column;
 & h3, & h5{
  margin: 1em 0;
}
`
export const Cantitate=styled.div`
display:flex;
position:relative;
justify-content:center;
align-items:center;
`

export const Valori= styled.div`
display:flex;
justify-content:space-between;
`
export const GoToPay=styled.button`
width:50%;
margin-left:25%;
border-radius: 1em;
height:3em;
color:white;
background-color:black;
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
`
export const NoProductInCart= styled.div`

position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
color:white;
background-color:black;
box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 10px 35px -14px rgba(0,0,0,0.75);
border-radius:2em;
padding:5em;
`
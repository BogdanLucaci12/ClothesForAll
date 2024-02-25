import styled from "styled-components";

export const Back=styled.div`
background-color: white;

overflow: hidden;
`
export const MainDiv=styled.div`
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%, -50%);
background-color: white;
width:60%;
padding:1em;
display: flex;
border-radius:1em;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.5);
@media screen and (max-width: 900px) {
    display:block;
    width: 70%;
    top: 55%;
  }
`
export const MainpicDiv=styled.div`
width:50%;
height:auto;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
@media screen and (max-width: 900px) {
   width:100%;
   height:20rem;
  }
`
export const ProductDetailes=styled.div`
width:50%;
height:auto;
display: flex;
flex-direction: column;
gap: 2em;
padding-left: 1em;
@media screen and (max-width: 900px) {
   width:100%;
   gap: 1em;
  }
`
export const Alege=styled.div`
width:100%;
height:2em;
text-align: center;
border-radius:1em;
font-size:1.25em;
position:relative;
cursor:pointer;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
`
export const OpenDropdown=styled.div`
position: absolute;
display: flex;
justify-content:center;
flex-direction:column;
height:auto;
width:100%;
border:1px solid black;
z-index:1;
background-color:rgba(0,0,0,.9);
border-radius:1em;
p{
    cursor:pointer;
    margin:0;
    padding:.3em;
    color:white;
    &:hover{
        background-color: white;
        opacity:.8;
        color:black;
        border-radius:1em;
    }
}
`
export const Addtocart=styled.button`
margin-top:auto;
height: 3em;
width: 100%;
background-color:black;
color:white;
border-radius:1em;
`
export const ProdusAdaugat = styled.div`
position:relative;
width:30%;
height:5%;
left:50%;
transform: translate(-50%, 0%);
border-radius:2em;
background-color:rgba(0, 0, 0, .7);
color:white;
padding:1em;
z-index:3;
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-width: 900px) {
   width:80%;
  }
`
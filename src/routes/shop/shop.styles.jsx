import styled from "styled-components";
import { CgHeart } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
export const MainDiv= styled.div`
padding: 1em;
width: 100%;
height: 100%;
display:flex;
position: relative;
 @media only screen and (max-width: 900px) {
display:block
}
`
export const FilterContainers= styled.div`
border-right:1px solid rgba(0, 0, 0, .2);
width: 15%;
height: 100vh;
padding-top:1em;
 @media only screen and (max-width: 900px) {
  border-right:0px;
  width: 100%;
  display:flex;
  height: 100%;
  flex-wrap: wrap;
}
`
export const ProductsContainer=styled.div`
padding: 1em;
display:block;
position: relative;
width: 85%;
@media only screen and (max-width: 900px) {
   width: 100%;
}
`
export const HeaderProductsContainer=styled.div`
height: 8vh;
width: 100%;
border-bottom: 1px solid rgba(0, 0, 0, .2);
display: flex;
position: relative;
align-items: center;
@media only screen and (max-width: 900px) {
  border-bottom: 0px;
}
`
export const ProductContainerstyle= styled.div`
display:block;
height:28em;
width:17em;
overflow: hidden;
border-radius:5px;
position: relative;
transition:transform 0.3s ease-in-out;
padding:.5em;
background-color:white;
&:hover {
    cursor: pointer;
    transform:scale(1.1);
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
z-index:10;
}
  @media only screen and (max-width: 900px) {
  width: 17em;
  box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
}
 @media only screen and (max-width: 633px) {
  width: 17em;
}
`
export const ProductImage= styled.img`
margin:.5em;
height:12em;
width:15em;
object-fit: cover;
`
export const Containerforproducts=styled.div`
width:auto;
height:auto;
display:flex;
flex-wrap: wrap;
gap:2em;
  position: relative;
  z-index:0;
justifi-content:center
`
export const ColorSize= styled.div`
display:flex;
gap: 10px;
`
export const SortItemsContainer=styled.div`
padding:.2em 1em;
background-color: white;

height: auto;
-webkit-box-shadow: 4px 2px 15px -4px #000000; 
box-shadow: 4px 2px 15px -4px #000000;
 cursor:pointer;
 border-radius:1em;
  @media only screen and (max-width: 900px) {
  width: 15em;
}

`
export const HiddenSortContainer=styled.div`
heigh:auto;
position: absolute;
-webkit-box-shadow: 4px 2px 15px -4px #000000; 
box-shadow: 4px 2px 15px -4px #000000;
border-radius:1em;
z-index:5;
background-color: white;
font-size:1.15em;
display: block;
left:0;
  @media only screen and (max-width: 900px) {
 
}
&>div:first-child{
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  &:hover{
    background-color: rgba(0, 0, 0, 0.4); 
  }}
  &>div:last-child{
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  &:hover{
    background-color: rgba(0, 0, 0, 0.4); 
  }
}
`
export const Div=styled.div`
padding:.9em;
 transition: background-color 0.3s ease;
border-bottom: 1px solid rgba(0,0,0,0.5);
 &:hover{
   cursor:pointer;
  }
`
export const Casuta=styled.div`
border-right: 1px solid rgba(0, 0, 0, 0.4);
padding:.2em;

`
export const Filtru=styled.div`
margin-top:2em;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:2rem;
padding:.8em;
margin-right:1em;
height:auto;
overflow:hidden;
cursor:pointer;

 @media only screen and (max-width: 900px) {
width:11rem;
height:1em;
}
`
export const FavoritesIcon=styled(CgHeart)`
width:10%;
height:10%;
position:absolute;
&:hover{
  filter:drop-shadow(.1em .1em .5em red);
}
`
export const ProdAdaugatCuSucces=styled.div`
top:10%;
left:40%;
position:absolute;
width:35rem;
height:5rem;
z-index:10;
background-color: white;
color:black;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:2rem;
display:flex;
align-items:center;
justify-content:center;
padding:2em;
font-size:1.4em;
`
export const ArrowForFilter=styled(IoIosArrowDown)`
display:flex;
width:2em;
height:2em;

`

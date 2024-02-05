import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgHeart } from "react-icons/cg";
export const MainDiv= styled.div`
padding: 1em;
width: 100%;
height: 100%;
display:flex;
position: relative;
`
export const FilterContainer= styled.div`
border-right: 1px solid black;
width: 15%;
height: 100vh;
padding-top:1em;
`
export const ProductsContainer=styled.div`
padding: 1em;
display:block;
position: relative;
width: 85%;
`
export const HeaderProductsContainer=styled.div`
height: 8vh;
width: 100%;
border-bottom: 1px solid black;
display: flex;
position: relative;
align-items: center;
padding: 1em;

`
export const ProductContainerstyle= styled(Link)`
display:block;
height:22em;
width:20em;
overflow: hidden;
border-radius:5px;
position: relative;
&:hover {
    height: 26em;
    cursor: pointer;
-webkit-box-shadow: 4px 2px 15px -4px #000000; 
box-shadow: 4px 2px 15px -4px #000000;
z-index:10;
  }
`
export const ProductImage= styled.img`
margin: .5em;
width: 95%;
height: 13em;
`
export const Containerforproducts=styled.div`
width:100%;
height:auto;
display:grid;
grid-template-columns: repeat(4, auto);
row-gap:5em;
  position: relative;
  z-index:0;
`
export const ColorSize= styled.div`
display:flex;
gap: 10px;
`
export const SortItemsContainer=styled.div`
border: 1px solid black;
padding:.2em 1em;
color: white;
background-color: rgba(107, 74, 74, 0.5);
width: 13vw;
height: auto;
-webkit-box-shadow: 4px 2px 15px -4px #000000; 
box-shadow: 4px 2px 15px -4px #000000;
 cursor:pointer
`
export const HiddenSortContainer=styled.div`
heigh:auto;
width:13vw;
position: absolute;
left:16px;
-webkit-box-shadow: 4px 2px 15px -4px #000000; 
box-shadow: 4px 2px 15px -4px #000000;
border: 1px solid black;
z-index:5;
background-color: rgba(107, 74, 74, 0.5);
font-size:1.3em;
display: block;
`
export const Div=styled.div`
padding:.9em;
 transition: background-color 0.3s ease;

 &:hover{
    background-color: rgba(255, 255, 255, 0.4); 
   cursor:pointer
  }
`
export const Casuta=styled.div`
border-right: 1px solid black;
padding:.2em;
`
export const Filtre=styled.div`
margin-top:2em;
`
export const FavoritesIcon=styled(CgHeart)`
width:13%;
height:13%;
position:absolute;

`

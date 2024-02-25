import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
export const FormInput=styled.input`
-webkit-box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54); 
box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54);
border-radius: 10px;
width: 100%;
height: 4vh;
border: .1px solid black
`
export const LoopIcons=styled(FaSearch)`
position: absolute;
z-index: 1;
right: 1em;
top: 25%;
font-size:1.5em;
`
export const LabelInput = styled.label`
  position: absolute;
  z-index: 1;
  margin-left: 20px;
  margin-top: 1vh;
`;

export const DropdownSearchStyles= styled.div`
position: absolute;
width: 100%;
height:auto;
-webkit-box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54); 
box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54);
border-radius: 10px;
background-color:white;
display:flex;
flex-direction: row;;
flex-wrap:wrap;
gap:1em;
z-index:10;
padding:1em;
`
export const ItemDiv = styled(Link)`
padding:.1em;
display:flex;
justify-content:space-between;
&:hover{
  cursor:pointer;
}
`
export const ImageItem= styled.img`
max-width:5em;
min-width:1em;
max-height:5em;
min-height:2em;
`
export const ContentItem = styled.div`

`
export const Form=styled.form`
width:30%;
position: relative;
@media screen and (max-width:900px) {
  position: absolute;
  width: 98%;
  top:9vh;
}
`
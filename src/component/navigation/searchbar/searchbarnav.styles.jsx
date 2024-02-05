import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormInput=styled.input`
-webkit-box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54); 
box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54);
border-radius: 10px;
width: 100%;
height: 4vh;
border: .1px solid black
`
export const LabelInput = styled.label`
  position: absolute;
  z-index: 1;
  margin-left: 20px;
  margin-top: 1vh;
  opacity: ${({ $hidelabel }) => ($hidelabel ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

export const DropdownSearchStyles= styled.div`
position: absolute;
width: 29vw;
height:auto;
-webkit-box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54); 
box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.54);
border-radius: 10px;
background-color:white;
display:grid;
grid-template-columns:repeat(3, auto);
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
width:6em;
`
export const ContentItem = styled.div`

`

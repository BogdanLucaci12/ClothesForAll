import styled from "styled-components";

export const DropdownComponentStyled=styled.div`
position: absolute;
display: grid;
top:6vh;
width: 13vw;
height: 35vh;
z-index:2;
border-radius:5px;
-webkit-box-shadow: 4px 2px 15px -4px #000000; 
box-shadow: 4px 2px 15px -4px #000000;
background-color: white;
margin-right:2em;
@media only screen and (max-width: 768px) {
  display: none
}
`
import styled from "styled-components";
import { Link } from "react-router-dom";
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

`
export const LogoContainer=styled(Link)`
display: flex;
align-items: center;
justify-content: center;
`

export const GenProduse=styled.div`
display:flex;
justify-content: space-between;
`

export const UserIcon=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
text-align:center;
min-width:15vw;
`
export const NavigationIconContainer=styled.div`
height:100%;
display:grid;
align-items: center;
text-align: center;
place-items:center;
box-sizing: border-box;
`

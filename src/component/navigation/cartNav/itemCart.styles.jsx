import styled from "styled-components";
import { GrClose } from "react-icons/gr";
export const Itemstyles=styled.div`
height:10vh;
width:100%;
border-bottom:.7px solid rgba(0,0,0,0.3) ;
display:flex;
flex-direction:row;
padding:.4em
`
export const PicItem=styled.div`
height:10vh;
width:5vw;
& img {
    width:100%; 
    height:90%;
}
`
export const DetailesItem=styled.div`
display:block;
flex-direction:column;
margin-left:auto;
`
export const DivEDf=styled.div`
width:100%;
margin-left:auto;
justify-content:flex-end;
display:flex;
font-size:12px
`
export const RemovefavItem = styled(GrClose)`
width:1em;
height:1em;
transition: transform 0.5s ease-in-out;
&:hover{
    transform:rotate(90deg);
    cursor:pointer;
    CustomCursor {
      display: flex;
    }
}
`


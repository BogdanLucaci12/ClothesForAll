import styled from "styled-components";

export const CardMainDiv =styled.div`
width:47%;
height:25vh;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius: 2rem;
display:flex;
flex-direction: column;
margin:1em;
@media screen and (max-width:900px) {
  width:100%
}
`

export const ImageCard=styled.img`
width:35%;
height:15vh;
@media screen and (max-width:900px) {
  width:50%;
}
`

export const ContentCard = styled.div`
width:75%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width:900px) {
  width:100%
}
`
export const HeaderCard=styled.div`
display:flex;
justify-content: center;
align-items: center;
height:85%;
@media screen and (max-width:900px) {
  flex-direction:column
}
`

export const FooterCard=styled.div`
display:flex;
justify-content:space-around;
align-items:center
`
export const StergeCard=styled.div`
background-color:black;
color:white;
border-radius:2rem;
padding:.2em .5em;
cursor:pointer;
`


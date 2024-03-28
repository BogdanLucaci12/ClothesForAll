import styled from "styled-components";


export const HomeMainDiv=styled.div`
margin:1em;
height:80vh;
width:99%;
display: flex;
@media only screen and (max-width: 900px) {
flex-direction: column;
width: 100%;
height:100%;
}
`
export const HomePic = styled.img`
width:100%;
height:80%;
border-radius:2rem;
@media only screen and (max-width: 900px) {
width: 100%;
height:100%;
}
`
export const A23b=styled.div`
width:50%;
div{
    box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
    width:50%;
    border-radius:2rem;
    padding:2em;
    margin:5em
}
@media only screen and (max-width: 900px) {
width:100%;
div{
  padding:1em;
}
}
`
export const A23bc=styled.div`
width:50%;
display: flex;
justify-content:center;
align-items:center;
@media only screen and (max-width: 900px) {
width:100%
}
`

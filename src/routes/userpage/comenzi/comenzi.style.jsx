import styled from "styled-components";

export const ContainerComanda = styled.div`
width=100%;
height=100%;
display:flex;
flex-wrap:wrap;
`
export const ComandaComp = styled.div`
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
width:45em;
height:20em;
margin:1em;
border-radius:1rem;
display:flex;
flex-direction:column;
@media only screen and (max-width: 900px) {
    height:40em
}
`
export const Purchase = styled.div`
padding:1em;
 width:49%;
 height:18em;
 display:flex;
 flex-direction:column;
@media only screen and (max-width: 900px) {
width:100%;
}
 `
export const DeliveryDetails = styled.div`
 width:49%;
 height:100%;
  font-size:1.2em;
  padding:1em;
  @media only screen and (max-width: 900px) {
width:100%;
}
 `

export const DescriptionEachPurchase=styled.div`
font-size:1em
`
export const Cfb=styled.div`
display:flex;
@media only screen and (max-width: 900px) {
flex-direction:column;
}
`
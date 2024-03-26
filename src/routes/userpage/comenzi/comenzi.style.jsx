import styled from "styled-components";
import Carousel from 'react-elastic-carousel'

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
`
export const Purchase = styled.div`
padding:1em;
 width:49%;
 height:18em;
 display:flex;
 flex-direction:column;

 `
export const DeliveryDetails = styled.div`
 width:49%;
 height:100%;
  font-size:1.2em;
  padding:1em;
 `
export const CustomCarousel = styled(Carousel)`

 img{
width:8em;
 height:8em;
 }
 .rec.rec-arrow {
    border-radius: 0;
    background-color:white;
    border:none
}
`

export const DescriptionEachPurchase=styled.div`
font-size:1em
`
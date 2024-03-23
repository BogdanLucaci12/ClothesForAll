import styled from "styled-components";
import { SlTarget } from "react-icons/sl";
export const Choose = styled(SlTarget)`
font-size: 1.5em;
`
export const PaymentPageMainDiv=styled.div`
margin-top:3em;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:2rem;
background-color:white;
color:black;
padding:1em;
width:50vw;
height:auto;
font-size:1.2em;
:Div1:hover{
    background-color:rgba(0,0,0,0.5);
}
`
export const Div1=styled.div`
border-top:1px solid rgba(0,0,0,0.5);
&:hover{
    background-color:rgba(0,0,0,0.2);
    cursor:pointer;
}
`

export const FormCardPayment=styled.form`
margin:1em 0;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
gap:.5em;
label{
   margin-right:1em;   
}
input{
    width:auto;
    border-radius:1rem;
    border:1px solid rgba(0,0,0,0.5);  
}
`
export const AlegecardPaymentPage=styled.div`
display:flex;
gap:1em;
border-bottom:1px solid rgba(0,0,0,0.5);
height:2em;
justify-content:space-around;
align-items:center;
div{
    display:flex;
    gap:1em;
    width:18em;
}
input{
      border-radius:1rem;
    border:1px solid rgba(0,0,0,0.5);  
    width:5em;
    height:1.5em;
}
`
export const DivForInputPaymentPage =styled.div`
    width:49%;
   display:flex;
   justify-content:space-between;
`
export const ExpCard=styled.div`
display:flex;
gap:.5em;
div{
    border:1px solid rgba(0,0,0,0.5);
    border-radius:2rem;
    width:7em;
    display:flex;
    justify-content:center;
}
`

export const AlertaCVV=styled.div`
position: absolute;
background-color:white;
z-index:10;
margin:5% 8%;
padding:1em;
border-radius:2rem;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
`
export const FormularPlata=styled.div`

`
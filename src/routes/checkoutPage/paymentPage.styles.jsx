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
flex:1 0 49%;
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
cursor:pointer;
border-bottom:1px solid rgba(0,0,0,0.5);
height:2em;
&:hover{
    background-color:rgba(0,0,0,0.2);
}

`
export const DivForInputPaymentPage =styled.div`
    width:49%;
   display:flex;
   justify-content:space-between;
`
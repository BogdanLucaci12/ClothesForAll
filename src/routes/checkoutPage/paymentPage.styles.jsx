import styled from "styled-components";

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
@media only screen and (max-width: 900px) {
width:100%;
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
 @media only screen and (max-width: 900px) {
flex-direction:column;
height:auto;
justify-content:flex-start;
align-items:flex-start
}
`
export const DivForInputPaymentPage =styled.div`
    width:49%;
   display:flex;
   justify-content:space-between;
   @media only screen and (max-width: 900px) {
width:100%;
flex-direction:column;
}
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
export const FormularPlata=styled.form`
width:20em;
`
export const WarningPlata=styled.div`
border:5px solid red;
border-radius:1rem;
display:flex;
justify-content:center;
align-items:center;
color:red;
padding:.2em;
`

export const CardStyle={
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#7F388B',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '20px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#000000',
            },
            '::placeholder': {
                color: '#000000',
            },

        },
        invalid: {
            iconColor: '#000000',
            color: '#000000',
        },
    },
}
export const CardDetailsForPaymentPage=styled.div`
display:flex;
gap:1em;
@media only screen and (max-width: 900px) {
flex-direction: column;
gap:.1em
}
`
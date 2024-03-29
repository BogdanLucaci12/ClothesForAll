import styled from "styled-components";


export const UserAdressMainDiv=styled.div`
width:100%;
height:100%;
`
export const HeaderAdress=styled.div`
width:100%;
height:7vh;
display: flex;
justify-content: space-between;
padding:1em;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.2)

`
export const AdaugaAdreseButton =styled.div`
background-color:black;
color:white;
display: flex;
justify-content: center;
border-radius:1rem;
cursor:pointer;
padding:.5em;
`
export const Titlu=styled.div`
display: flex;
width:100%;
justify-content: center;
align-items: center;
border-bottom:1px solid rgba(0,0,0,0.2);
height:10%;
font-size:20px;
`
export const Content=styled.div`
width:100%;
display:flex;
justify-content: center;
flex-direction: column;
padding:1em;
font-size:20px


`

export const Inputdiv=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content: space-around;
& input{
    width:100%;
    margin-right:1em;
    border-radius:1em;
    height:2.5em;
border: 1px solid rgba(0,0,0,0.3);
}
@media only screen and (max-width: 900px) {
    flex-direction: column;
}
`
export const ExtAdresa = styled.div`
width:100%;
display:block;
padding:1em;

& input{
    width:100%;
    margin-right:1em;
    border-radius:1em;
    height:2.5em;
border: 1px solid rgba(0,0,0,0.3);
}
@media only screen and (max-width: 900px) {
   margin:0
}
`

export const AdaugaAdresabttn=styled.div`
background-color:black;
color:white;
justify-content: center;
align-items:center;
width:20%;
border-radius:1rem;
display:flex;
cursor:pointer;
@media only screen and (max-width: 900px) {
    width:100%;
}
`
export const Option=styled.div`
position: absolute;
background-color:white;
width:44%;
height:15vh;
overflow-x:scroll;
border:1px solid rgba(0,0,0,.5);
border-radius:1rem;

text-align:center;
& option:hover{
    background-color:rgba(0,0,0,.2);
    cursor:pointer
}
`
export const ContentAdress=styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
`
export const ContainerAdresa=styled.div`
width:auto;
height:15em;
display:flex;
flex-direction:column;
align-items:center;
box-shadow: 0px 0px 12px 7px rgba(0,0,0,0.1);
border-radius:2rem;
margin:1em;
padding:1em;
font-size:20px;
position:relative;
@media screen and (max-width:900px) {
 
}
`
export const HeaderAdresa=styled.div`
height:90%;
`

export const FooterAdresa=styled.div`
cursor:pointer;
background-color:black;
color:white;
width:100%;
display:flex;
justify-content:center;
border-radius:2rem;
`
export const MesajSucces=styled.div`
position:absolute;
left:25%;
top:25%;
width:50%;
height:5vh;
background-color: rgba(0,0,0,0.6);
color:white;
z-index:15;
border-radius:2rem;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
`
export const InputdivForm=styled.div`
width:45%;
@media only screen and (max-width: 900px) {
    width:100%;
}
`
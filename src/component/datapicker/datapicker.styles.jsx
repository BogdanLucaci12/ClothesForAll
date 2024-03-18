import styled from "styled-components";

export const ContainerDataPicker = styled.div`
position:relative;
display:flex;
gap:1em;
`
export const HeaderDropdown = styled.div`
border:${(props) => props.$warning === "warning" ? "5px solid red" : "1px solid  rgba(0,0,0,0.3)"};
width:5em;
display:flex;
justify-content:center;
border-radius:1rem;
cursor:pointer;
`
export const ContentDataPicker = styled.div`
width:5em;
border:1px solid  rgba(0,0,0,0.3);
display:flex;
flex-direction:column;
border-radius:1rem;
overflow:scroll;
height:10em;
position:absolute;
z-index:10;
background-color:white;
scrollbar-width: thin;   
div{
     width:100%;
     text-align:center;
          cursor:pointer;
    &:hover{
        background-color:rgba(0,0,0,0.3)
    }
}
`
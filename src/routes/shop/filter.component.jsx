import { Filtru, ArrowForFilter } from "./shop.styles"
import { useState } from "react";

const Filter = ({ numefiltru, selected, criteriu, onFilterChange }) =>{
    const [isClicked, setIsClicked] = useState(false);
    const selection = (e) => {
        const selectedValue = e.target.id;
        onFilterChange(selectedValue);
    };
    
    const formstyle = {
        height: isClicked ? "auto" : "3em",
    }

return (
    <Filtru style={formstyle} onClick={() => setIsClicked(!isClicked)}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h5>{numefiltru}</h5> <ArrowForFilter /></div>
        <form style={{ display: "flex", flexWrap:"wrap", gap:"1em" }}>
        <input type="radio" id="All" name="All" checked={selected==="All"} onChange={selection}/>
            <label htmlFor="All">All</label>
        {criteriu.map((crit)=>(
            <div key={crit} style={{display:"flex"}}>
                <input inline  type="radio" id={crit} name={crit} checked={selected===crit} onChange={selection}/>
                <label htmlFor={crit}>{crit}</label>
            </div>
        ))}
        </form>
    </Filtru>
)
}

export default Filter 
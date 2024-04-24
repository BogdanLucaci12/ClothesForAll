import { useState } from "react"
export const LabelInSearchBar= ()=>{
    const [labelOff, setLabelOff] = useState(false);
    return{labelOff, setLabelOff}
}

import { createContext, Provider, useState, useEffect} from "react";

export const ItemContext= createContext({
item:[],
setItem: ()=>{}
})
export const ItemProvider= ({children})=>{
const [item, setItem]=useState([]);
    const value={item, setItem}
    return(
        <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
    )
}
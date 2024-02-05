import { createContext, useState } from "react";


export const CategorieContext = createContext({
    seteazaCategoria: "",
    setSeteazaCategoria:()=>{}
});
export const CategorieProvider=({children})=>{
const [seteazaCategoria, setSeteazaCategoria]=useState("")

    const value = { seteazaCategoria, setSeteazaCategoria }
    return (
        <CategorieContext.Provider value={value}>{children}</CategorieContext.Provider> 
   )
}
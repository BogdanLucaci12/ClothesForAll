import { createContext, useEffect, useState } from "react";

export const UserContext=createContext({
    currentUser: null,
    setCurrentUser:()=>null,
})
export const UserProvider=({children})=>{
const [currentUser, setCurrentUser]=useState(()=>{
    const existingUser=localStorage.getItem("user")
    return existingUser ? existingUser : null
});
useEffect(()=>{
        localStorage.setItem("user", currentUser)
}, [currentUser])
const value={currentUser, setCurrentUser}
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
    
}
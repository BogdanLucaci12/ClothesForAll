import { createContext, useEffect, useState } from "react";

export const UserContext=createContext({
    currentUser: "",
    setCurrentUser:()=>{},
})
export const UserProvider=({children})=>{
const [currentUser, setCurrentUser]=useState(()=>{
    const existingUser=localStorage.getItem("user")
    return existingUser==undefined && existingUser;
});
useEffect(()=>{
        localStorage.setItem("user", currentUser)
}, [currentUser])
const value={currentUser, setCurrentUser}
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
    
}
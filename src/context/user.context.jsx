import { createContext, useEffect, useState } from "react";
import { auth } from "../utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
export const UserContext=createContext({
    currentUser: "",
    setCurrentUser:()=>{},
    userUid:"",
    setUserUid:()=>{}
})
export const UserProvider=({children})=>{
const [currentUser, setCurrentUser]=useState(()=>{
    const existingUser=localStorage.getItem("user")
    return existingUser ? existingUser : "";
});
const [userUid, setUserUid]=useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserUid(user.uid)
            }
            else {
               console.log("no user available")
            }
        })
    }, [])
useEffect(()=>{
        localStorage.setItem("user", currentUser)
}, [currentUser])
    const value = { currentUser, setCurrentUser, userUid, setUserUid }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
    
}
import { createContext, useEffect, useState } from "react";
import { auth } from "../utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { showAdress, RetrieveCards, getUserCollection } from "../utility/firebase";
export const UserContext = createContext({
    currentUser: "",
    setCurrentUser: () => { },
    userUid: "",
    setUserUid: () => { },
    adrese: [],
    cards: [],
    isLoading: true,
    usercollection: [],

})
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const existingUser = localStorage.getItem("user")
        return existingUser ? existingUser : "";
    });
    const [userUid, setUserUid] = useState()
    const [adrese, setAdrese] = useState([]);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [usercollection, setUserCollection] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserUid(user.uid)
                
            }
            else {
                console.log("no user available")
            }
        })
    }, [])
    useEffect(() => {
        localStorage.setItem("user", currentUser)
    }, [currentUser])
    useEffect(() => {


        const fetchData = async () => {
            const date = await showAdress(userUid);
            setAdrese(date)
        }
        fetchData()

    }, [userUid])
    useEffect(() => {

        const fetchData = async () => {
            const cardArray = await RetrieveCards(userUid);
            setCards(cardArray)
        }
        fetchData()

    }, [userUid])
    useEffect(() => {

        const getData = async () => {
            try {
                const data = await getUserCollection(userUid);
                setUserCollection(data);
                if (data.userName !== currentUser) {
                    setCurrentUser(data.userName)
                    localStorage.setItem("user", data.userName)
                }
            }
            catch (error) {
               
            }
            finally {
                setIsLoading(false);
            }
        }
        getData()
    }, [userUid])

    const value = { isLoading, currentUser, setCurrentUser, userUid, setUserUid, adrese, cards, isLoading, usercollection }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}
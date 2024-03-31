import { createContext, useEffect, useState } from "react";
import { UrmaresteComanda, auth } from "../utility/firebase";
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
    email: "",
    purchase: []
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const existingUser = localStorage.getItem("user")
        return existingUser===undefined || existingUser===null ? ""
        :
         existingUser
         ;
    });
    const [userUid, setUserUid] = useState()
    const [email, setEmail] = useState()
    const [adrese, setAdrese] = useState([]);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [usercollection, setUserCollection] = useState()
    const [purchase, setPurchase] = useState([])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserUid(user.uid)
                setEmail(user.email)
            }
            else {
                console.log("no user available")
            }
        })
    }, [auth])
    useEffect(() => {
        localStorage.setItem("user", currentUser)
        console.log(currentUser)
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
            }
            catch (error) {
            }
            finally {
                setIsLoading(false);
            }
        }
        getData()
    }, [userUid])
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await UrmaresteComanda(userUid)
                setPurchase(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [userUid])
    const value = { isLoading, currentUser, setCurrentUser, userUid, setUserUid, adrese, cards, usercollection, email, purchase }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
import { createContext } from "react";
import { useState, useEffect } from "react";

export const FavoritesContext = createContext({
    favoriteItem: [],
    addToFav: () => { },
    showMessageForAdd: false,
    setShowMessageForAdd: () => { },
    allReadyInFav: false,
    setAllReadyInFav: () => { },
    deleteItem: () => { }
})

export const FavoritesProvider = ({ children }) => {
    const [showMessageForAdd, setShowMessageForAdd] = useState(false)
    const [allReadyInFav, setAllReadyInFav] = useState(false)
    const [favoriteItem, setFavoritesItem] = useState(() => {
        const itemiFavoritiSalvati = localStorage.getItem("favorites")
        return itemiFavoritiSalvati ? JSON.parse(itemiFavoritiSalvati) : []
    })


    const addToFav = (produs) => {
        const existingFavItem = favoriteItem.find((item) => item.id === produs.id);
        if (existingFavItem) {
            setAllReadyInFav(true);
            setTimeout(() => {
                setAllReadyInFav(false)
            }, 2000)
            return
        }
        else {
            setFavoritesItem([...favoriteItem, produs])
            setShowMessageForAdd(true)
            setTimeout(() => {
                setShowMessageForAdd(false)
            }, 2000)
        }
    }
    const deleteItem = (item) => {
        const newFavorites = favoriteItem.filter((favitem) => favitem.ImageUrl !== item.ImageUrl)
        setFavoritesItem(newFavorites)
    }
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteItem))
    }, [favoriteItem])
    const value = { favoriteItem, setFavoritesItem, addToFav, allReadyInFav, showMessageForAdd, deleteItem }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
import { createContext } from "react";
import { useState, useContext, useEffect } from "react";

export const FavoritesContext=createContext({
    favoriteItem:[],
    addToFav: ()=>{}
})
export const FavoritesProvider = ({children})=>{
    const [favoriteItem, setFavoritesItem]=useState(()=>{
        const itemiFavoritiSalvati=localStorage.getItem("favorites")
        return itemiFavoritiSalvati ? JSON.parse(itemiFavoritiSalvati) : []
    })
   const addToFav=(produs)=>{
    const existingFavItem=favoriteItem.find((item)=>item.id===produs.id);
    if(existingFavItem) return
    setFavoritesItem([...favoriteItem, produs])
   }
   
    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favoriteItem))
    }, [favoriteItem])
    const value = { favoriteItem, setFavoritesItem, addToFav }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
import { createContext, useState, useEffect, useContext } from "react";
import { getCategoriesAndDocuments, getImagebyUrl } from "../utility/firebase";
import { CategorieContext } from "./categorie.context";
export const ProductsContext = createContext({
    produseCategorie: {},
});

export const ProductsProvider = ({ children }) => {
    const [produseCategorie, setProduseCategorie] = useState({});
    const { seteazaCategoria } = useContext(CategorieContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryMap = await getCategoriesAndDocuments(seteazaCategoria);
                const updatedCategoryMap = await updateImageUrls(categoryMap);
                setProduseCategorie(updatedCategoryMap);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [seteazaCategoria]);

    const updateImageUrls = async (produse) => {
        const updatedProduse= await Promise.all(
            produse.map(async (produs) => {
                const url = produs.ImageUrl;
                const newImageUrl = await getImagebyUrl(url);
                return { ...produs, ImageUrl: newImageUrl };
            })
        );
        return updatedProduse;
    };
    
    const value = { produseCategorie};
  
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};

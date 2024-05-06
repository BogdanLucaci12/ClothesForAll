import { createContext, useState, useEffect } from "react";
import { SearchDatabases, getImagebyUrl } from "../utility/firebase";
export const SearchItemContext = createContext({
    searchItem: []
})
export const SearchItemProviver = ({ children }) => {
    const [searchItems, setSearchItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allItemsInDb = await SearchDatabases();
                const updatedCategoryMap = await updateImageUrls(allItemsInDb);

                async function updateImageUrls(products) {
                    const updatedProducts = await Promise.all(
                        products.map(async (product) => {
                            const url = product.ImageUrl;
                            const newImageUrl = await getImagebyUrl(url);
                            return { ...product, ImageUrl: newImageUrl };
                        })
                    );
                    return updatedProducts;
                }

                setSearchItems(updatedCategoryMap);
            } catch (error) {
                console.error("Error fetching or updating products:", error);
            }
        };
        fetchData(); // Fetch data when component mounts
    }, []);


    const value = { searchItems }
    return <SearchItemContext.Provider value={value}>{children}</SearchItemContext.Provider>
}
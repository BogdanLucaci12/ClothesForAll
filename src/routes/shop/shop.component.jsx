import { Div, HiddenSortContainer, FilterContainers, Containerforproducts, ProductsContainer, MainDiv, HeaderProductsContainer, SortItemsContainer, Filtre, ProdAdaugatCuSucces } from "./shop.styles";
import { ProductsContext } from "../../context/products.context";
import { useContext, useState, useEffect } from "react";
import ProductContainer from "./productContainer.component.jsx";
import { ItemContext } from "../../context/itemcontext.component";
import { FavoritesContext } from "../../context/favorites.context.jsx";
import Filter from "./filter.component.jsx";
import Spinner from 'react-bootstrap/Spinner';
const Shop = () => {
    const { produseCategorie } = useContext(ProductsContext);
    const { setItem } = useContext(ItemContext);
    const { showMessageForAdd, allReadyInFav }=useContext(FavoritesContext)
    const [produse, setProduse] = useState([]);
    const [categorie, setCategorie] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedMarime, setSelectedMarime] = useState("All");
    const [selectedCuloare, setSelectedCuloare] = useState("All");
    const [marime, setMarime] = useState([]);
    const [culoare, setCuloare] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        if (produseCategorie.length>0) {
            setProduse(produseCategorie)
            setLoading(false)
        }
    }, [produseCategorie])
    useEffect(() => {
        const fetchData = async () => {
            if (produse.length > 0) {
                const categoriiUnice = Array.from(new Set(produse.map((produs) => produs.categorie)));
                setCategorie(categoriiUnice);
                const allColorsArrays = produse.map((produs) => produs.culoare || produs.Culoare);
                const allColors = [].concat(...allColorsArrays);
                const culoriunice = Array.from(new Set(allColors));
                setCuloare(culoriunice);
                const allMarimiArrays = produse.map((produs) => produs.marime || produs.Marime);
                const allMarimi = [].concat(...allMarimiArrays);
                const marimiUnice = Array.from(new Set(allMarimi));
                setMarime(marimiUnice);
            }
        };
        fetchData();
    }, [produseCategorie, produse]);

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(open => !open);
    }
    const Sort = (tipSortare) => {
        let sortedProduse;
        if (tipSortare === 'crescator') {
            sortedProduse = produse.sort((a, b) => a.pret - b.pret);
        } else if (tipSortare === 'descrescator') {
            sortedProduse = produse.sort((a, b) => b.pret - a.pret);
        }
        setProduse(sortedProduse);
    };
    const Takeitemcontent = (produs) => {
        setItem(produs)
    }   
    return (
        <MainDiv>
            {
               allReadyInFav && 
                (<ProdAdaugatCuSucces>
                    Produsul este deja adaugat la favorite
                </ProdAdaugatCuSucces>)
            }
            {
                showMessageForAdd && (
                    <ProdAdaugatCuSucces>
                        Produs adaugat cu succes la favorite
                    </ProdAdaugatCuSucces>
                )
            }
           
            <FilterContainers>
                    <Filter 
                    numefiltru={"Categorie"} 
                    selected={selectedCategory}
                    criteriu={categorie}
                    onFilterChange={(selectedValue) => setSelectedCategory(selectedValue)}
                   
                    />
                <Filter
                    numefiltru={"Culoare"}
                    selected={selectedCuloare}
                    criteriu={culoare}
                    onFilterChange={(selectedValue) => setSelectedCuloare(selectedValue)}
                />
                <Filter
                    numefiltru={"Marime"}
                    selected={selectedMarime}
                    criteriu={marime}
                    onFilterChange={(selectedValue) => setSelectedMarime(selectedValue)}
                />
            </FilterContainers>
            <ProductsContainer>
              
                <HeaderProductsContainer>
                    <SortItemsContainer onClick={() => handleOpen()}>
                        <div style={{ textAlign: "center", fontSize:"1.15em" }}>Sorteaza produsele</div>
                        {open &&
                            (<HiddenSortContainer>
                                <Div onClick={() => Sort('crescator')}>Sorteaza crescator</Div>
                                <Div onClick={() => Sort('descrescator')}>Sorteaza descrescator</Div>
                            </HiddenSortContainer>
                            )
                        }
                    </SortItemsContainer>
                </HeaderProductsContainer>
                <Containerforproducts>
                 
                    {
                        loading ? (<Spinner animation="border" variant="dark" />):
                        produse
                            .filter((produs) =>
                                (selectedCategory === "All" || produs.categorie === selectedCategory) &&
                                (selectedCuloare === "All" || produs.culoare.includes(selectedCuloare)) &&
                                (selectedMarime === "All" || produs.marime.includes(selectedMarime))
                            )
                            .map((produs) => (
                                <ProductContainer key={produs.ImageUrl} produs={produs} onClick={() => Takeitemcontent(produs)} />
                            ))}
                </Containerforproducts>
            </ProductsContainer>
            <></>
        </MainDiv>
    )
}
export default Shop;
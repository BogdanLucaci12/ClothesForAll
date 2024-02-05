import { Div, HiddenSortContainer, FilterContainer, Containerforproducts, ProductsContainer, MainDiv, HeaderProductsContainer, SortItemsContainer, Filtre } from "./shop.styles";
import { ProductsContext } from "../../context/products.context";
import { useContext, useState, useEffect } from "react";
import ProductContainer from "./productContainer.component";
import Form from 'react-bootstrap/Form';
import { ItemContext } from "../../context/itemcontext.component";
const Shop = () => {
    const { produseCategorie } = useContext(ProductsContext);
    const {setItem}=useContext(ItemContext);
    const [produse, setProduse] = useState([]);
    const [categorie, setCategorie]=useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedMarime, setSelectedMarime] = useState("All");
    const [selectedCuloare, setSelectedCuloare] = useState("All");
    const [marime, setMarime] = useState([]);
    const [culoare, setCuloare]=useState([]);
    useEffect(() => {
        setProduse(produseCategorie);
        const fetchData = async () => {
            
            if (produse && produse.length > 0) {
                const categoriiUnice = Array.from(new Set(produseCategorie.map((produs) => produs.categorie)));
                setCategorie(categoriiUnice);
                const allColorsArrays = produseCategorie.map((produs) => produs.culoare || produs.Culoare).filter(Boolean);         
               const allColors = [].concat(...allColorsArrays);
                const culoriunice = Array.from(new Set(allColors));
                setCuloare(culoriunice);
                const allMarimiArrays = produseCategorie.map((produs) => produs.marime || produs.Marime).filter(Boolean); 
                const allMarimi = [].concat(...allMarimiArrays);
                const marimiUnice = Array.from(new Set(allMarimi));          
                      setMarime(marimiUnice);
              
            }
        };

        fetchData();
    }, [produseCategorie, produse]);

    // console.log(produse, categorie);
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
    const Takeitemcontent= (produs)=>{
        setItem(produs)
    }
    return (
        <MainDiv>
            <FilterContainer>

                <Filtre>
                    <h4>
                        Categorie:
                    </h4>
                    <Form>
                        <Form.Check
                            inline
                            label="All"
                         
                            type="radio"
                            checked={selectedCategory === "All"}
                            onChange={() => setSelectedCategory("All")}
                        />
                        {categorie.map((categorie) => (
                            <Form.Check
                                key={categorie}
                                inline
                                label={categorie}
                            
                                type="radio"
                                checked={selectedCategory === categorie}
                                onChange={() => setSelectedCategory(categorie)}
                            />
                        ))}
                    </Form>
                </Filtre>
                <Filtre>
                    <h4>
                        Culori:
                    </h4>
                    <Form>
                        <Form.Check
                            inline
                            label="All"
                            type="radio"
                            checked={selectedCuloare === "All"}
                            onChange={() => setSelectedCuloare("All")}
                        />
                        {culoare.map((culoare) => (
                            <Form.Check
                                key={culoare}
                                inline
                                label={culoare}
                                type="radio"
                                checked={selectedCuloare === culoare}
                                onChange={() => setSelectedCuloare(culoare)}
                            />
                        ))}
                    </Form>
                </Filtre>
                <Filtre>
                    <h4>
                        Marime:
                    </h4>
                    <Form>
                        <Form.Check
                            inline
                            label="All"
                            type="radio"
                            checked={selectedMarime === "All"}
                            onChange={() => setSelectedMarime("All")}
                        />
                        {marime.map((marime) => (
                            <Form.Check
                                key={marime}
                                inline
                                label={marime}
                                type="radio"
                                checked={selectedMarime === marime}
                                onChange={() => setSelectedMarime(marime)}
                            />
                        ))}
                    </Form>
                </Filtre>

            </FilterContainer>
            <ProductsContainer>
                <HeaderProductsContainer>
                    <SortItemsContainer onClick={() => handleOpen()}>
                        <h5 style={{ textAlign: "center" }}>Sorteaza produsele</h5>
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
                    {produse.length > 0 &&
                        produse
                            .filter((produs) => 
                                   (selectedCategory === "All" || produs.categorie === selectedCategory)&&
                                   (selectedCuloare === "All" || produs.culoare.includes(selectedCuloare)) &&
                                   (selectedMarime === "All" || produs.marime.includes(selectedMarime))
                                   )
                            .map((produs) => (
                                <ProductContainer key={produs.id} produs={produs} onClick={() => Takeitemcontent(produs)}/>
                            ))}
                </Containerforproducts>
            </ProductsContainer>
            <></>
        </MainDiv>
    )
}
export default Shop;
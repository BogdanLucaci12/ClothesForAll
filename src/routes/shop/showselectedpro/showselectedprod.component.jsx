import { ProdusAdaugat ,Addtocart, Back ,Alege, MainDiv, MainpicDiv, OpenDropdown, ProductDetailes } from "./showselectedprod.styles";
import { ItemContext } from "../../../context/itemcontext.component";
import { useContext, useState, useEffect } from "react";
import { Cartcontext } from "../../../context/addtocart.context";
const MarimeCuloare={
    culoare: "",
    marime:""
}
const ShowSelectedProd= ()=>{
    const {addToCart }=useContext(Cartcontext);
    const { item } = useContext(ItemContext);
    const {nume, Nume ,ImageUrl, culoare, marime, pret, categorie}=item
    const [isOpenSize, setIsOpenSize] = useState(false);
    const [isOpenColor, setIsOpenColor] = useState(false);
    const [marimeculoare, setMarimeCuloare]=useState(MarimeCuloare);
    const [available, setAvailable]=useState(false);
    const [produsAdaugat, setProdusAdaugat]=useState(false);
    useEffect(() => {
        if (marimeculoare.marime !== "" && marimeculoare.culoare !== "") {
            setAvailable(true);
        } 
    }, [marimeculoare]);
    const handleSizeClick = () => {
        setIsOpenSize(!isOpenSize);
        setIsOpenColor(false); 
    }
   
    const handleColorClick = () => {
        setIsOpenColor(!isOpenColor);
        setIsOpenSize(false); 
    };
    const takeMarimeCuloare = (marime, culoare) => {
        setMarimeCuloare((prev) => ({
            marime: isOpenSize ? marime : prev.marime,
            culoare: isOpenColor ? culoare : prev.culoare,
        }));
    };
    const adaugaProdusInfo = () => {
        // Adaugare produs logic aici
        setProdusAdaugat(true);

        // Setare timeout pentru a reveni la fals după 3 secunde
        setTimeout(() => {
            setProdusAdaugat(false);
        }, 3000); // 3000 milisecunde = 3 secunde
    };
     const handlebuttonclick = () => {
        const newCartItem={
            ...item, 
            marime:marimeculoare.marime,
            culoare:marimeculoare.culoare,
            quantity: 1
        }
         addToCart(newCartItem)
         adaugaProdusInfo();
     }
  
return (
   <Back>
        {
            produsAdaugat && (<ProdusAdaugat><h5>Produs adaugat cu succes</h5></ProdusAdaugat>)
        }
     <MainDiv>
      
        <MainpicDiv>
                <img src={ImageUrl} alt="" style={{width: "100%", height:"100%"}}/>
        </MainpicDiv>
            <ProductDetailes>
                <h1 style={{textAlign:"center"}}>{nume||Nume}</h1>
                <h5 style={{ textAlign: "center" }}>{categorie}</h5>
                <h3 style={{ textAlign: "center" }}>{pret} RON</h3>
                <Alege onClick={handleSizeClick}>
                    {
                        marimeculoare.marime ? (<h3>{marimeculoare.marime}</h3>) : ("Alege marimea dorita")
                }
                   { isOpenSize &&
                   (
                     <OpenDropdown>
                       { marime && marime.map((marimeOption)=>
                           <p key={marimeOption} onClick={() => takeMarimeCuloare(marimeOption)}>{marimeOption}</p>
                       )
                            }
                        </OpenDropdown>
                    )
                   }
                </Alege>
                
            <Alege onClick={handleColorClick}>
                    {
                        marimeculoare.culoare ? (<h3>{marimeculoare.culoare}</h3>) : ("Alege culoare dorita")
                    }
                {isOpenColor &&
                        <OpenDropdown>
                            {culoare && culoare.map((culoareOption) => 
                                <p key={culoareOption} onClick={() => takeMarimeCuloare(null, culoareOption)}>{culoareOption}</p>
                            )
                            }
                        </OpenDropdown>
                    }
                </Alege>
             
                {  
                   available ? 
                    (
                <Addtocart onClick={handlebuttonclick}>Adauga in cos</Addtocart>
                ) 
                :
                 (<Addtocart>Selecteaza marimea si culoarea</Addtocart>)
                 
                }
               
            </ProductDetailes>
     </MainDiv>
    </Back>
    )
}
export default ShowSelectedProd;
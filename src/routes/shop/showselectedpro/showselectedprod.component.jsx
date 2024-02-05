import { ProdusAdaugat ,Addtocart, Back ,Alege, MainDiv, MainpicDiv, OpenDropdown, ProductDetailes } from "./showselectedprod.styles";
import { ItemContext } from "../../../context/itemcontext.component";
import { useContext, useState, useRef, useEffect } from "react";
import { Cartcontext } from "../../../context/addtocart.context";
import { Button } from "../../../component/button/button.styles";
const MarimeCuloare={
    culoare: "",
    marime:""
}
const ShowSelectedProd= ()=>{
    const { cartItems, setCartItems, addToCart }=useContext(Cartcontext);
    const { item } = useContext(ItemContext);
    const {nume, Nume ,ImageUrl, culoare, marime, pret}=item
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
    const adaugaProdus = () => {
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
         adaugaProdus();
     }
  
return (
   <Back>
        {
            produsAdaugat && (<ProdusAdaugat><h1>Produs adaugat cu succes</h1></ProdusAdaugat>)
        }
     <MainDiv>
      
        <MainpicDiv>
                <img src={ImageUrl} alt="" style={{width:"100%", height:"auto"}}/>
        </MainpicDiv>
            <ProductDetailes>
                <h1 style={{textAlign:"center"}}>{nume||Nume}</h1>
                <h3>{pret} RON</h3>
            <Alege onClick={handleSizeClick}>Alege marimea dorita
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
                <h1>{marimeculoare.marime}</h1>
            <Alege onClick={handleColorClick}>Alege culoarea dorita 
                {isOpenColor &&
                        <OpenDropdown>
                            {culoare && culoare.map((culoareOption) => 
                                <p key={culoareOption} onClick={() => takeMarimeCuloare(null, culoareOption)}>{culoareOption}</p>
                            )
                            }
                        </OpenDropdown>
                    }
                </Alege>
                <h1>{marimeculoare.culoare}</h1>
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
import React, { useContext, useEffect, useState, useRef } from "react";
import { FormInput, LabelInput, LoopIcons, Form} from "./searchbarnav.styles";
import DropdownSearch from "./dropdownsearch.component";
import { SearchItemContext } from "../../../context/searchitem.context";
import { LabelDropdownContext } from "../../../context/labelanddropdownforsearch.context";
const SearchBarNav = () => {
    const { labelOff, setLabelOff }=useContext(LabelDropdownContext);
    const [itemToBeShown, setItemToBeShown] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const { searchItems } = useContext(SearchItemContext);
    const refinput=useRef(null);
    const handleInputFocus = (e) => {
        setSearchfield(e.target.value);
        setLabelOff(true);
        if (e.target.value === "") {
            setLabelOff(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (refinput.current && !refinput.current.contains(e.target)) {
                // Clic în afara formularului
                setLabelOff(false);
            }
        };

        // Adăugăm evenimentul pentru clic în afara formularului
        document.addEventListener("mousedown", handleClickOutside);

        // Curățăm evenimentul la dezmontarea componentei
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setLabelOff]);

    const handleClick=()=>{
        setLabelOff(true);
    }

    useEffect(() => {
        const searchItem = searchItems.filter((prod, idx) =>idx<4 && (
             prod.nume.toLowerCase().includes(searchfield.toLowerCase())
            || prod.categorie.toLowerCase().includes(searchfield.toLowerCase())
        ));
        setItemToBeShown(searchItem);
    }, [searchfield]);
    return (
        <Form ref={refinput}>
           {
                labelOff ?  
         (  <LabelInput htmlFor="search">
                    </LabelInput>) :
                     (<LabelInput htmlFor="search">
                        Cauta produsul dorit
                    </LabelInput>)
           }
            <LoopIcons/>
            <FormInput
                type="search"
                id="search"
                name="search"
                onChange={handleInputFocus}
                onClick={handleClick}
               
            />
            {labelOff  && <DropdownSearch
            itemToBeShown={itemToBeShown} 
          />}
        </Form>
    );
};

export default SearchBarNav;

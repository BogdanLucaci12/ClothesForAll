import React, { useContext, useEffect, useState, useRef } from "react";
import { FormInput, LabelInput, LoopIcons, Form} from "./searchbarnav.styles";
import DropdownSearch from "./dropdownsearch.component";
import { SearchItemContext } from "../../../context/searchitem.context";
import { LabelInSearchBar } from "./managementLabel.component";
const SearchBarNav = () => {
    const { labelOff, setLabelOff } = LabelInSearchBar()
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
                setLabelOff(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
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
    }, [searchfield, searchItems])
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

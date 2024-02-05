import React, { useContext, useEffect, useState } from "react";
import { FormInput, LabelInput } from "./searchbarnav.styles";
import DropdownSearch from "./dropdownsearch.component";
import { SearchItemContext } from "../../../context/searchitem.context";
const SearchBarNav = () => {
    const [labelOff, setLabelOff] = useState(false);
    const [itemToBeShown, setItemToBeShown] = useState([])
    const [searchfield, setSearchfield] = useState("")
    const {searchItems}=useContext(SearchItemContext)
    const handleInputFocus = (e) => {
         setSearchfield(e.target.value)
        setLabelOff(true);
        if (e.target.value === "") {
            setLabelOff(false)
        }
    };
   
    useEffect(() => {
                const searchItem = searchItems.filter((prod) => {
               
                    return prod.nume.toLowerCase().includes(searchfield.toLowerCase()) || prod.categorie.toLowerCase().includes(searchfield.toLowerCase());
                });
                setItemToBeShown(searchItem);
                
    }, [searchfield, searchItems]);
    return (
        <form style={{ width: '30%' }}>
            <LabelInput htmlFor="search" $hidelabel={labelOff}>
                Cauta produsul dorit
            </LabelInput>
            <FormInput
                type="search"
                id="search"
                name="search"
                onChange={handleInputFocus}
            />
            {labelOff && <DropdownSearch itemToBeShown={itemToBeShown}/>}

        </form>
    );
};

export default SearchBarNav;

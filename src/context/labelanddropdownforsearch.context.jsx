import { createContext, useState } from "react";

export const LabelDropdownContext = createContext({
    labelOff: false,
    setLabelOff: () => {}
})
export const LabelDropdownProvider = ({ children }) => {
    const [labelOff, setLabelOff] = useState(false);
    const value = { labelOff, setLabelOff }
    return (
        <LabelDropdownContext.Provider value={value}>{children}</LabelDropdownContext.Provider>
    )
}
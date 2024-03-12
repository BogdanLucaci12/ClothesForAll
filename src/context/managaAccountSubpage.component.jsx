import { createContext, useState } from "react";

export const ManageClickOnUserPage = createContext({
  states: {
    defaultClick: true,
    adress: false,
    card: false,
    fav:false
  },
  setClickState: () => { },
})
export const ManageClickOnUserPageProvier = ({ children }) => {
   const [clickStates, setClickStates] = useState({
    defaultClick: true,
    adress: false,
    card: false,
    fav: false
  });

  const setClickState = (clickedState) => {
    setClickStates((prevState) => {
      const updatedStates = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === clickedState;
        return acc;
      }, {});
      return updatedStates;
    });
  };

  const value = {
    states: clickStates,
    setClickState,
  };

    return (
        <ManageClickOnUserPage.Provider value={value}>{children}</ManageClickOnUserPage.Provider>
    )
}
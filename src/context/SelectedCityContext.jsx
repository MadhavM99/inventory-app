import { createContext, useContext, useEffect, useState } from "react";

// create context
const SelectedCityContext = createContext();

// create and export Provider
export const SelectedCityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </SelectedCityContext.Provider>
  );
};

// create and export hook
export const useSelectedCity = () => {
  return useContext(SelectedCityContext);
};

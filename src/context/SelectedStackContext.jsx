// create context
//create provider
// create hook
import { createContext, useContext, useEffect, useState } from "react";

const SelectedStackContext = createContext();

export const SelectedStackProvider = ({ children }) => {
  const [selectedStack, setSelectedStack] = useState(null);
  return (
    <SelectedStackContext.Provider value={{ selectedStack, setSelectedStack }}>
      {children}
    </SelectedStackContext.Provider>
  );
};

export const useSelectedStack = () => {
  return useContext(SelectedStackContext);
};

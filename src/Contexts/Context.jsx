import { createContext, useContext } from "react";

const initialContext = createContext();

function ContextProvider({ children }) {
  return (
    <initialContext.Provider value={{}}>{children}</initialContext.Provider>
  );
}

function useContextData() {
  const data = useContext(initialContext);
  if (data === undefined)
    throw new Error("You cannot use context out of the ContextProvider");
  return data;
}

export { ContextProvider, useContextData };

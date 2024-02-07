import { createContext, useEffect, useState } from "react";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
};

export default appContext;

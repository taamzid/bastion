import { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [selectedBalance, setSelectedBalance] = useState("");

  const contextValue = {
    selectedBalance,
    setSelectedBalance,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;

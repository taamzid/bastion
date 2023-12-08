/* eslint-disable react/prop-types */
import { useState } from "react";
import DataContext from "./dataContext";

const DataContextProvider = ({ children }) => {
  const [selectedBalance, setSelectedBalance] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const contextValue = {
    selectedBalance,
    setSelectedBalance,
    selectedName,
    setSelectedName,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;

import React, { createContext, useReducer } from "react";
import ReduceApp from "../reduce/ReduceApp";
export let AlertMassage = createContext();
const AlertContextProvider = ({ children }) => {
  let initial = {
    users: [],
    task: [],
    filtered: [],
    filterDon: "all",
    filterSearch: "",
  };
  const [value, dispatch] = useReducer(ReduceApp, initial);
  return (
    <div>
      <AlertMassage.Provider value={{ value, dispatch }}>
        {children}
      </AlertMassage.Provider>
    </div>
  );
};

export default AlertContextProvider;

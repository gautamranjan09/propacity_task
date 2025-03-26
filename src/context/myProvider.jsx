import React, { useState } from "react";
import myContext from "./myContext";

const MyProvider = ({ children }) => {
  const [subItems, setSubItems] = useState([]);

  return <myContext.Provider value={{ subItems: subItems, setSubItems: setSubItems }}>{children}</myContext.Provider>;
};

export default MyProvider;

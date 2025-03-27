import React, { useState } from "react";
import myContext from "./myContext";

const MyProvider = ({ children }) => {
  const [subItems, setSubItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetailsSidebarOpen, setIsDetailsSidebarOpen] = useState(false);

  const openDetailsSidebar = (item) => {
    setSelectedItem(item);
    setIsDetailsSidebarOpen(true);
  };

  const closeDetailsSidebar = () => {
    setIsDetailsSidebarOpen(false);
    setSelectedItem(null);
  };

  return <myContext.Provider value={{ subItems: subItems, setSubItems: setSubItems, openDetailsSidebar, closeDetailsSidebar, selectedItem, isDetailsSidebarOpen }}>{children}</myContext.Provider>;
};

export default MyProvider;

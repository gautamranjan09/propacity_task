import React, { createContext } from "react";

const myContext = createContext({ subItems: [], setSubItems: () => {}, selectedItem: null, isDetailsSidebarOpen: false, openDetailsSidebar: () => {}, closeDetailsSidebar: () => {} });

export default myContext;

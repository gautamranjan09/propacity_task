import React, { createContext } from "react";

const myContext = createContext({
  subItems: [],
  setSubItems: () => {},
  selectedItem: null,
  isDetailsSidebarOpen: false,
  openDetailsSidebar: () => {},
  closeDetailsSidebar: () => {},
  isDeleteModalOpen: false,
  openDeleteModal: () => {},
  closeDeleteModal: () => {},
  handleDelete: () => {},
  itemToDelete: null,
  filteredItems: [],
  setFilteredItems: () => {},
  activeDropdownItem: null,
  setActiveDropdownItem: () => {},
});

export default myContext;

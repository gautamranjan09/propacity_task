import React, { useState } from "react";
import myContext from "./myContext";

const MyProvider = ({ children }) => {
  const [subItems, setSubItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetailsSidebarOpen, setIsDetailsSidebarOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const openDetailsSidebar = (item) => {
    setSelectedItem(item);
    setIsDetailsSidebarOpen(true);
  };

  const closeDetailsSidebar = () => {
    setIsDetailsSidebarOpen(false);
    setSelectedItem(null);
  };

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleDelete = () => {
    // Remove the item from subItems
    const updatedSubItems = subItems.filter(
      (item) => item !== itemToDelete // Compare the entire item object
    );

    setSubItems(updatedSubItems);
    closeDeleteModal();

    // If the deleted item was the selected item in sidebar, close it
    if (selectedItem === itemToDelete) {
      closeDetailsSidebar();
    }
  };

  return (
    <myContext.Provider
      value={{
        subItems: subItems,
        setSubItems: setSubItems,
        openDetailsSidebar,
        closeDetailsSidebar,
        selectedItem,
        isDetailsSidebarOpen,
        isDeleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
        handleDelete,
        itemToDelete,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyProvider;

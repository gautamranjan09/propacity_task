import React, { useContext } from "react";
import RenderDetailFields from "./RenderDetailFields";
import myContext from "../context/myContext";

const ItemDetailsSidebar = () => {
  const {selectedItem, isDetailsSidebarOpen, closeDetailsSidebar} = useContext(myContext);

  return (
    <div
      className={`
        fixed top-0 right-0 w-80 h-full bg-[#0F1729] text-white 
        transform transition-transform duration-300 ease-in-out 
        ${isDetailsSidebarOpen ? "translate-x-0" : "translate-x-full"} 
        shadow-lg z-50 overflow-y-auto
      `}
    >
      <div className="p-4 relative">
        {/* Close Button */}
        <button onClick={closeDetailsSidebar} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
          X
        </button>

        {/* Movie/Item Image Placeholder */}
        <div className="mb-4 h-64 bg-white/10 flex items-center justify-center rounded-lg overflow-hidden">
          <span className="text-white text-center">
            {selectedItem?.title || selectedItem?.name || "Item Details"}
          </span>
        </div>

        {/* Dynamically Rendered Details */}
        {selectedItem && <RenderDetailFields details={selectedItem} />}

        {/* Close Button */}
        <button onClick={closeDetailsSidebar} className="w-full mt-4 bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemDetailsSidebar;

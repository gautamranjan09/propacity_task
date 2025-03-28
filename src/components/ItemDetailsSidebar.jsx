import React, { useContext } from "react";
import RenderDetailFields from "./RenderDetailFields";
import myContext from "../context/myContext";
import dashboardImg from "../assets/dashboard.png";

const ItemDetailsSidebar = () => {
  const { selectedItem, isDetailsSidebarOpen, closeDetailsSidebar } = useContext(myContext);

  return (
    <div
      className={`
        fixed top-0 right-0 w-full max-w-[400px] h-full bg-[#03123D] text-[#FFFFFF] 
        transform transition-transform duration-300 ease-in-out 
        ${isDetailsSidebarOpen ? "translate-x-0" : "translate-x-full"} 
        shadow-lg z-50 overflow-y-auto font-poppins
      `}
    >
      <div className="relative w-full">
        {/* Close Button */}
        <div className="flex items-center justify-between py-3 px-5 border-b border-[#FFFFFF]">
          <p className="text-xl leading-[30px] tracking-[0.1px] font-medium">Movie Details</p>
          <button onClick={closeDetailsSidebar} className="text-4xl font-mono pb-1 text-[#FFFFFF] hover:text-gray-300 transition-colors">
            &times;
          </button>
        </div>

        {/* Details Content */}
        <div className="px-5 py-4 flex flex-col gap-[10px]">
          {/* Movie/Item Image Placeholder */}
          <p className="font-roboto font-normal text-sm">Image</p>
          <img src={dashboardImg} alt="Darth Vader" className="w-full h-[211px] object-cover rounded-lg border border-[#FFFFFF]" />

          {/* Dynamically Rendered Details */}
          {selectedItem && <RenderDetailFields details={selectedItem} />}
        </div>
        {/* Close Button */}
        <div className="pt-5 px-[10px] pb-6 border-t border-[#DEDEDE]">
          <button onClick={closeDetailsSidebar} className="w-full font-semibold text-[18px] leading-[24px] tracking-[0px] font-inter bg-[#CB1A80] text-[#FAFAFB] py-[10px] px-4 rounded-lg hover:bg-pink-700 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsSidebar;

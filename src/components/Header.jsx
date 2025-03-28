import React, { useContext, useState } from "react";
import starwarIcon from "../assets/star_war_icon.png";
import vectorIcon from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import myContext from "../context/myContext";

const Header = ({ toggleMobileMenu }) => {
  const [searchText, setSearchText] = useState("");
  const { setFilteredItems } = useContext(myContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setFilteredItems(value);
  };

  return (
    <header className="bg-[#03123D] w-full p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Mobile menu toggle */}
        <button className="lg:hidden mr-4" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <img onClick={() => navigate("/")} src={starwarIcon} alt="starwar Logo" className="w-18 h-9" />
      </div>
      <div>
        <div className="w-40 md:w-52 h-8 border border-[#FFFFFF] rounded-sm text-[#FFFFFF] flex items-center gap-2 py-1 px-2">
          <img src={vectorIcon} alt="vector icon" className="w-[13.33px] h-[13.33px]" />
          <input type="text" placeholder="Search" value={searchText} onChange={handleSearch} className="w-full text-[14px] text-[#FFFFFF] bg-transparent border-none outline-none" />
          {searchText && (
            <button
              onClick={() => {
                setSearchText("");
                setFilteredItems("");
              }}
              className="text-[#FFFFFF] text-lg focus:outline-none"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import ItemDetailsSidebar from "./ItemDetailsSidebar";
import filmReelIcon from "../assets/FilmReel.png";
import alienIcon from "../assets/Alien.png";
import planetIcon from "../assets/Planet.png";
import spaceshipIcon from "../assets/RocketLaunch.png";
import vehicleIcon from "../assets/CarProfile.png";
import peopleIcon from "../assets/Users.png";
import folderIcon from "../assets/FolderSimple.png";
import starwarIcon from "../assets/star_war_icon.png";

const Sidebar = ({ isMobileMenuOpen, closeMobileMenu }) => {
  const [openSection, setOpenSection] = useState("");
  const { subItems, openDetailsSidebar } = useContext(myContext);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Films", subItems: ["Movie Name", "Movie Name"] },
    { name: "People", subItems: ["Person Name", "Person Name"] },
    { name: "Planets", subItems: ["Planet Name", "Planet Name"] },
    { name: "Species", subItems: ["Species Name", "Species Name"] },
    { name: "Starships", subItems: ["Starship Name", "Starship Name"] },
    { name: "Vehicles", subItems: ["Vehicle Name", "Vehicle Name"] },
  ];

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
    navigate(`/${sectionName.toLowerCase()}`);
  };


  return (
    <>
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#03123D] text-white overflow-y-auto 
        transform transition-transform duration-300 ease-in-out -translate-x-full lg:top-16
        lg:translate-x-0 scrollbar scrollbar-hover:scrollbar-thumb-[#CB1A80] scrollbar-active:scrollbar-track-[#69abf3]
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between lg:hidden relative top-4">
        <img onClick={()=>navigate("/")} src={starwarIcon} alt="starwar Logo" className="w-18 h-9 cursor-pointer"/>
        {/* Close button for mobile */}
        <button className=" text-3xl pb-1 pr-4 text-white z-50 cursor-pointer" onClick={closeMobileMenu}>
          &times;
        </button>
        </div>

        <div className="pt-16 lg:pt-0">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <div className={`flex justify-between items-center p-3 cursor-pointer transition-all duration-300 ease-in-out ${openSection === item.name ? "bg-[#CB1A80]" : "hover:bg-[#F9FAFD4D]"}`} onClick={() => toggleSection(item.name)}>
                <div className="flex items-center gap-2 font-medium text-sm font-inter tracking-[0.5px] text-[#FFFFFF]">
                  <img src={folderIcon} alt="Film Reel Icon" className="h-[18px] w-[18px]" />
                  <span>{item.name}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transform ${openSection === item.name ? "-rotate-180" : ""} transition-all duration-300 ease-in-out`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              {openSection === item.name && (
                <div className="bg-gray-800/50">
                  {subItems.map((subItem, subIndex) => (
                    <div key={subIndex} onClick={() => openDetailsSidebar(subItem)} className="pl-6 p-3 hover:bg-[#F9FAFD4D] flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-2 font-medium text-sm font-inter tracking-[0.5px] text-[#FFFFFF]">
                        {" "}
                        {openSection === "Films" && <img src={filmReelIcon} alt="Film Reel Icon" className="h-[18px] w-[18px]" />}
                        {openSection === "People" && <img src={peopleIcon} alt="People Icon" className="h-[18px] w-[18px]" />}
                        {openSection === "Planets" && <img src={planetIcon} alt="Planet Icon" className="h-[18px] w-[18px]" />}
                        {openSection === "Species" && <img src={alienIcon} alt="Species Icon" className="h-[18px] w-[18px]" />}
                        {openSection === "Starships" && <img src={spaceshipIcon} alt="Starship Icon" className="h-[18px] w-[18px]" />}
                        {openSection === "Vehicles" && <img src={vehicleIcon} alt="Vehicles Icon" className="h-[18px] w-[18px]" />}
                        {openSection === "Films" ? subItem.title : subItem.name}{" "}
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Sidebar for item details */}
      <ItemDetailsSidebar />
    </>
  );
};

export default Sidebar;

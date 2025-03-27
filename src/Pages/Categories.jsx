import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import myContext from "../context/myContext";
import { useLocation } from "react-router-dom";
import ItemDetailsSidebar from "../components/ItemDetailsSidebar";
import filmReelIcon from "../assets/FilmReel.png";
import alienIcon from "../assets/Alien.png";
import planetIcon from "../assets/Planet.png";
import spaceshipIcon from "../assets/RocketLaunch.png";
import vehicleIcon from "../assets/CarProfile.png";
import peopleIcon from "../assets/Users.png";


const Categories = () => {
  const [viewMode, setViewMode] = useState("grid");
  const { subItems, setSubItems, selectedItem, isDetailsSidebarOpen, openDetailsSidebar, closeDetailsSidebar } = useContext(myContext);
  const [data, setData] = useState({
    item: "",
    name: "",
    description_1: "",
    description_2: "",
    description_3: "",
  });
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api${location.pathname}/`);
        setSubItems(response.data.results);
        if (location.pathname === "/films") {
          setData({
            item: "Films",
            name: "Title",
            description_1: "Director",
            description_2: "release_date",
            description_3: "Release Date",
          });
        } else if (location.pathname === "/people") {
          setData({
            item: "People",
            name: "Name",
            description_1: "Gender",
            description_2: "birth_year",
            description_3: "Birth Year",
          });
        } else if (location.pathname === "/planets") {
          setData({
            item: "Planets",
            name: "Name",
            description_1: "Climate",
            description_2: "population",
            description_3: "Population",
          });
        } else if (location.pathname === "/species") {
          setData({
            item: "Species",
            name: "Name",
            description_1: "Classification",
            description_2: "average_lifespan",
            description_3: "Lifespan",
          });
        } else if (location.pathname === "/starships") {
          setData({
            item: "Starships",
            name: "Name",
            description_1: "Model",
            description_2: "hyperdrive_rating",
            description_3: "Hyperdrive Rating",
          });
        } else if (location.pathname === "/vehicles") {
          setData({
            item: "Vehicles",
            name: "Name",
            description_1: "Model",
            description_2: "max_atmosphering_speed",
            description_3: "Top Speed",
          });
        }
      } catch (error) {
        console.error("Error fetching Categories:", error);
      }
    };

    fetchCategories();
  }, [location.pathname]);


  return (
    <div className="bg-[#03123D] min-h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl font-bold">{data.item}</h1>
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <button onClick={() => setViewMode("grid")} className={`p-2 rounded ${viewMode === "grid" ? "bg-pink-600 text-white" : "bg-white/10 text-white"}`}>
              Grid
            </button>
            <button onClick={() => setViewMode("list")} className={`p-2 rounded ${viewMode === "list" ? "bg-pink-600 text-white" : "bg-white/10 text-white"}`}>
              List
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subItems.map((item, index) => (
            <div key={`${item[data.name.toLowerCase()]}${index}`} onClick={() => openDetailsSidebar(item)} className="flex flex-col gap-1 rounded-lg overflow-hidden shadow-lg max-h-[250px] max-w-[394px]">
              <div className="h-48 w-full bg-white/10 flex items-center justify-center">
                <span className="text-white text-center">Film Poster</span>
              </div>
              <div className="pl-4 py-3 pr-3 flex justify-between items-center bg-[#F9FAFD33]">
                <div className="flex items-center gap-3">
                  {item.title && <img src={filmReelIcon} alt="Film Reel Icon" className="h-6 w-6" />}
                  {data.item === "People" && <img src={peopleIcon} alt="People Icon" className="h-6 w-6" />}
                  {data.item === "Planets"  && <img src={planetIcon} alt="Planet Icon" className="h-6 w-6" />}
                  {data.item === "Species"  && <img src={alienIcon} alt="Species Icon" className="h-6 w-6" />}
                  {data.item === "Starships"  && <img src={spaceshipIcon} alt="Starship Icon" className="h-6 w-6" />}
                  {data.item === "Vehicles"  && <img src={vehicleIcon} alt="Vehicles Icon" className="h-6 w-6" />}
                  <p className="text-[#FFFFFF] font-medium text-sm font-inter tracking-[0.5px]">{item?.title || item?.name}</p>
                </div>
                <div className="relative">
                  <button className="text-white hover:bg-white/10 rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div>
          <div className="bg-[#4D5875] text-white grid grid-cols-3 py-[6px] px-4 font-bold">
            <span>{data.name}</span>
            <span>{data.description_1}</span>
            <span>{data.description_3}</span>
          </div>
          {subItems.map((item, index) => (
            <div key={`${item[data.name.toLowerCase()]}${index}`} className="grid grid-cols-3 text-white py-3 px-4 border-t border-white/10 bg-[#03123D] hover:bg-[#1E2B4D] relative group">
              <span>{item[data.name.toLowerCase()]}</span>
              <span>{item[data.description_1.toLowerCase()]}</span>
              <div className="flex justify-between items-center">
                <span>{item[data.description_2]}</span>
                <button className="text-white hover:bg-white/10 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sidebar for item details */}
      <ItemDetailsSidebar 
        isOpen={isDetailsSidebarOpen}
        onClose={closeDetailsSidebar}
        item={selectedItem}
      />
      
    </div>
  );
};

export default Categories;

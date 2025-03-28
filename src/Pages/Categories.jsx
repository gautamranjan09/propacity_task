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
import ThreeDotDropdown from "../components/ThreeDotDropdown";
import movieImg from "../assets/movie.jpg";
import listIcon from "../assets/list.svg";
import gridIcon from "../assets/grid.png";

const Categories = () => {
  const [viewMode, setViewMode] = useState("list");
  const { subItems, setSubItems, openDetailsSidebar } = useContext(myContext);
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
          setViewMode("grid");
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
    <div className="bg-[#03123D] min-h-screen p-4 lg:ml-[17rem]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl font-bold">{data.item}</h1>
        <div className="flex items-center">
          <div className="flex font-medium text-sm tracking-[0.5px] font-inter border border-[#DEDEDE] rounded">
            <button onClick={() => setViewMode("grid")} className={`p-1 transition-all duration-300 ease-out flex items-center gap-1 group relative ${viewMode === "grid" ? "bg-[#F1F1F5] text-[#696974]" : "hover:bg-[#F1F1F5]/80"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-colors duration-300 ${viewMode === "grid" ? "fill-[#696974]" : "fill-[#F1F1F5] group-hover:fill-[#696974]"}`}>
                <g id="View grid">
                  <path
                    id="Vector"
                    d="M7 5C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V9C5 9.53043 5.21071 10.0391 5.58579 10.4142C5.96086 10.7893 6.46957 11 7 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V7C11 6.46957 10.7893 5.96086 10.4142 5.58579C10.0391 5.21071 9.53043 5 9 5H7ZM7 13C6.46957 13 5.96086 13.2107 5.58579 13.5858C5.21071 13.9609 5 14.4696 5 15V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H9C9.53043 19 10.0391 18.7893 10.4142 18.4142C10.7893 18.0391 11 17.5304 11 17V15C11 14.4696 10.7893 13.9609 10.4142 13.5858C10.0391 13.2107 9.53043 13 9 13H7ZM13 7C13 6.46957 13.2107 5.96086 13.5858 5.58579C13.9609 5.21071 14.4696 5 15 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V9C19 9.53043 18.7893 10.0391 18.4142 10.4142C18.0391 10.7893 17.5304 11 17 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V7ZM13 15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H17C17.5304 13 18.0391 13.2107 18.4142 13.5858C18.7893 13.9609 19 14.4696 19 15V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H15C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17V15Z"
                  />
                </g>
              </svg>
              <span className={`transition-all duration-300 ${viewMode === "grid" ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>Grid</span>
            </button>
            <button onClick={() => setViewMode("list")} className={`p-1 transition-all duration-300 ease-out flex items-center gap-1 group relative ${viewMode === "list" ? "bg-[#F1F1F5] text-[#696974]" : " hover:bg-[#F1F1F5]/80"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-colors duration-300 ${viewMode === "list" ? "fill-[#696974]" : "fill-[#F1F1F5] group-hover:fill-[#696974]"}`}>
                <g id="View list">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19L6 19C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18C5 17.7348 5.10536 17.4804 5.29289 17.2929C5.48043 17.1054 5.73478 17 6 17L18 17C18.2652 17 18.5196 17.1054 18.7071 17.2929C18.8946 17.4804 19 17.7348 19 18ZM19 14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15L6 15C5.73478 15 5.48043 14.8946 5.29289 14.7071C5.10536 14.5196 5 14.2652 5 14C5 13.7348 5.10536 13.4804 5.29289 13.2929C5.48043 13.1054 5.73478 13 6 13L18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14ZM19 10C19 10.2652 18.8946 10.5196 18.7071 10.7071C18.5196 10.8946 18.2652 11 18 11L6 11C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9L18 9C18.2652 9 18.5196 9.10536 18.7071 9.29289C18.8946 9.48043 19 9.73478 19 10ZM19 6C19 6.26522 18.8946 6.51957 18.7071 6.70711C18.5196 6.89464 18.2652 7 18 7L6 7C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5L18 5C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6Z"
                  />
                </g>
              </svg>
              <span className={`transition-all duration-300 ${viewMode === "list" ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>List</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subItems.map((item, index) => (
            <div key={`${item[data.name.toLowerCase()]}${index}`} onClick={() => openDetailsSidebar(item)} className="flex flex-col gap-1 rounded-lg shadow-lg max-h-[250px] cursor-pointer">
              <div className="h-48 w-full bg-white/10 flex items-center justify-center rounded-lg overflow-hidden">
                {/* <span className="text-white text-center rounded-lg">Film Poster</span> */}
                <img src={movieImg} alt="Movie Poster" className="w-full h-full object-cover rounded-lg hover:scale-125 hover:opacity-50  transition-all ease-in-out duration-300" />
              </div>
              <div className="pl-4 py-3 pr-3 flex justify-between items-center bg-[#F9FAFD33] rounded-lg">
                <div className="flex items-center gap-3">
                  {item.title && <img src={filmReelIcon} alt="Film Reel Icon" className="h-6 w-6" />}
                  {data.item === "People" && <img src={peopleIcon} alt="People Icon" className="h-6 w-6" />}
                  {data.item === "Planets" && <img src={planetIcon} alt="Planet Icon" className="h-6 w-6" />}
                  {data.item === "Species" && <img src={alienIcon} alt="Species Icon" className="h-6 w-6" />}
                  {data.item === "Starships" && <img src={spaceshipIcon} alt="Starship Icon" className="h-6 w-6" />}
                  {data.item === "Vehicles" && <img src={vehicleIcon} alt="Vehicles Icon" className="h-6 w-6" />}
                  <p className="text-[#FFFFFF] font-medium text-sm font-inter tracking-[0.5px]">{item?.title || item?.name}</p>
                </div>
                <div className="relative">
                  <ThreeDotDropdown />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="font-inter">
          <div className="bg-[#4D5875] text-[#FFFFFF] grid grid-cols-3 py-[12px] px-4 font-medium text-sm tracking-[0.5px] rounded-md">
            <span>Name</span>
            <span>{data.description_1}</span>
            <span>{data.description_3}</span>
          </div>
          {subItems.map((item, index) => (
            <div
              key={`${item[data.name.toLowerCase()]}${index}`}
              onClick={() => openDetailsSidebar(item)}
              className="grid grid-cols-3 text-[#FFFFFF] py-2 px-3 border-b border-[#DEDEDE] bg-[#03123D] hover:bg-[#1E2B4D] relative group font-medium text-sm tracking-[0.5px] transition-all ease-in-out duration-300"
            >
              <span className="flex gap-2 items-center">
                {" "}
                {item.title && <img src={filmReelIcon} alt="Film Reel Icon" className="h-[18px] w-[18px]" />}
                {data.item === "People" && <img src={peopleIcon} alt="People Icon" className="h-[18px] w-[18px]" />}
                {data.item === "Planets" && <img src={planetIcon} alt="Planet Icon" className="h-[18px] w-[18px]" />}
                {data.item === "Species" && <img src={alienIcon} alt="Species Icon" className="h-[18px] w-[18px]" />}
                {data.item === "Starships" && <img src={spaceshipIcon} alt="Starship Icon" className="h-[18px] w-[18px]" />}
                {data.item === "Vehicles" && <img src={vehicleIcon} alt="Vehicles Icon" className="h-[18px] w-[18px]" />}
                {item[data.name.toLowerCase()]}
              </span>
              <span className="flex items-center">{item[data.description_1.toLowerCase()]}</span>
              <div className="flex justify-between items-center">
                <span>{item[data.description_2]}</span>
                <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
                  <ThreeDotDropdown />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sidebar for item details */}
      <ItemDetailsSidebar />
    </div>
  );
};

export default Categories;

import React, { useContext, useState } from "react";
import deleteIcon from "../assets/delete.svg";
import downloadIcon from "../assets/download.svg";
import moveIcon from "../assets/move.svg";
import renameIcon from "../assets/rename.svg";
import shareIcon from "../assets/share.svg";
import viewIcon from "../assets/view.svg";
import privateIcon from "../assets/private.svg";
import myContext from "../context/myContext";

const ThreeDotDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openDeleteModal } = useContext(myContext);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent triggering parent click events
    setIsOpen(!isOpen);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    openDeleteModal(item);
    setIsOpen(false);
  };

  return (
    <>
      {/* Three dot button */}
      <button onClick={toggleDropdown} className="text-white hover:bg-[#F9FAFD33] rounded-md p-2 transition-all ease-in-out duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full z-30 w-[174px] bg-[#FFFFFF] rounded-sm shadow-lg border border-[#F1F1F5]"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking menu
        >
          <ul className="p-2 flex flex-col gap-1 text-[#252C32] font-inter text-[12px] font-medium leading-5 tracking-[0.5px]">
            <li>
              <button className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center gap-2">
                <img src={viewIcon} alt="View Icon" className="w-4 h-4" />
                View
              </button>
            </li>
            <li>
              <button className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center gap-2">
                <img src={downloadIcon} alt="View Icon" className="w-4 h-4" />
                Download
              </button>
            </li>
            <li>
              <button className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center gap-2">
                <img src={renameIcon} alt="View Icon" className="w-4 h-4" />
                Rename
              </button>
            </li>
            <li>
              <button className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center gap-2">
                <img src={shareIcon} alt="View Icon" className="w-4 h-4" />
                Share Link
              </button>
            </li>
            <li>
              <button className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center gap-2">
                <img src={moveIcon} alt="View Icon" className="w-4 h-4" />
                Move
              </button>
            </li>
            <li>
              <button className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center gap-2">
                <img src={privateIcon} alt="View Icon" className="w-4 h-4" />
                Mark Private
              </button>
            </li>
            <li>
              <button onClick={handleDelete} className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center text-[#F15454] gap-2">
                <img src={deleteIcon} alt="View Icon" className="w-4 h-4" />
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ThreeDotDropdown;

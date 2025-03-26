import React, { useState } from "react";

const Sidebar = ({ isMobileMenuOpen, closeMobileMenu }) => {
  const [openSection, setOpenSection] = useState("");

  const menuItems = [
    { name: "Films", subItems: ["Movie Name", "Movie Name"] },
    { name: "People", subItems: ["Person Name", "Person Name"] },
    { name: "Planets", subItems: ["Planet Name", "Planet Name"] },
    { name: "Species", subItems: ["Species Name", "Species Name"] },
    { name: "Starships", subItems: ["Starship Name", "Starship Name"] },
    { name: "Vehicles", subItems: ["Vehicle Name", "Vehicle Name"] },
  ];

  const toggleSection = async (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
    try {
      const response = await axios.get(`https://swapi.dev/api/${sectionName}/`);
      setFilms(response.data.results);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#03123D] text-white 
        transform transition-transform duration-300 ease-in-out -translate-x-full lg:top-16
        lg:translate-x-0 
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Close button for mobile */}
      <button className="lg:hidden absolute top-4 right-4 text-3xl text-white z-50 cursor-pointer" onClick={closeMobileMenu}>
        &times;
      </button>

      <div className="pt-16 lg:pt-0">
        {menuItems.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <div className={`flex justify-between items-center p-3 cursor-pointer ${openSection === item.name ? "bg-pink-600" : "hover:bg-gray-800/50"}`} onClick={() => toggleSection(item.name)}>
              <span>{item.name}</span>
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
                className={`transform ${openSection === item.name ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            {openSection === item.name && (
              <div className="bg-gray-800/50">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="pl-6 p-3 hover:bg-gray-800/50 flex justify-between items-center cursor-pointer">
                    {subItem}
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
  );
};

export default Sidebar;

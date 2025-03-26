import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import dashboardImg from "../assets/dashboard.png";

const Dashboard = () => {
  const [openSection, setOpenSection] = useState("Films");
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-[#03123D] overflow-hidden">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <div className="flex flex-1 relative overflow-hidden">
        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={closeMobileMenu} />}

        {/* Sidebar */}
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />

        {/* Main Content Area */}
        <div className="flex-1 bg-[#03123D] p-4 md:p-8 overflow-auto ml-0 lg:ml-64">
          {selectedCategory === "Dashboard" && (
            <div className= "flex flex-col gap-3 bg-[#FFFFFF] rounded-xl border-2 h-[386px] border-[#E0E6ED] p-4 md:p-6 max-w-[695px] mx-auto shadow-[0px_7px_34px_0px_rgba(23,23,37,0.25)]">
              <img src={dashboardImg} alt="Darth Vader" className="w-full h-40 md:h-64 object-cover rounded-lg" />

              <div className="text-[#3B3F5C] font-open-sans tracking-[0.14px]">
                <h1 className="text-[22px] w-[301px] leading-6 font-bold mb-4">Welcome to Star Wars Dashboard</h1>
                <p className="text-sm font-normal">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import dashboardImg from "../assets/dashboard.png";

const Dashboard = ({children}) => {

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
        <div className="flex-1 bg-[#03123D] overflow-auto ml-0 lg:ml-64">
        {/* Main Content Area */}
        {children}
        </div> 
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock4Icon, LayoutDashboard } from "lucide-react";

const navLinks = [
  { link: "Dashboard", path: "/", icon: LayoutDashboard },
  { link: "Calendar", path: "/calendar", icon: Clock4Icon },
];

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-60 flex  flex-col border-r bg-[#FDFDFD]">
      {/* Logo */}
      <div className="text-orange-600 text-4xl font-extrabold px-6 mt-4 mb-8">
        Logo
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-2 mt-6">
        {navLinks.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              navigate(item.path);
            }}
            className={`flex items-center space-x-3 w-full px-8 py-3 rounded-lg transition-all duration-300 ${
              activeIndex === index ? "bg-[#ff5a27] text-white" : "text-black"
            }`}
          >
            <item.icon className="w-6" />
            <span>{item.link}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
        <span className="font-medium">John Doe</span>
        <svg
          xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
          viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
            clipRule="evenodd" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Profile
          </a>
          <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Settings
          </a>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

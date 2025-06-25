import React, { useState, useEffect } from "react";
import ThemeChangeIcon from "./ThemeChangeIcon";

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (!e.target.closest("#user-dropdown")) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative inline-block " id="user-dropdown">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User"
          className="w-8 h-8 mr-2 cursor-pointer rounded-full"
          onClick={toggleDropdown}
        />

        {open && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-md py-2 w-40 z-50">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My Channel
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </div>
          </div>
        )}
      </div>

      <ThemeChangeIcon />
    </>
  );
};

export default UserProfile;

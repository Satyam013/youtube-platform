import React from "react";
import HeaderLogo from "../Header/HeaderLogo";
import SearchBar from "../Header/SearchText/SearchBar";
import UserProfileIcon from "../Header/UserProfileIcon";
import ThemeToggle from "../ThemeToggle";

const Head = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 h-16 px-4 flex items-center justify-between bg-white dark:bg-black text-black dark:text-white shadow-md">
      {/* Left - Logo */}
      <div className="flex-shrink-0">
        <HeaderLogo />
      </div>

      {/* Center - Search Bar (Absolute Centered) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[600px] max-w-[80%]">
        <SearchBar />
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        <ThemeToggle />
        <UserProfileIcon />
      </div>
    </div>
  );
};

export default Head;

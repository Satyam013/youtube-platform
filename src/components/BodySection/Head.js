import React from "react";
import HeaderLogo from "../Header/HeaderLogo";
import SearchBar from "../Header/SearchText/SearchBar";
import UserProfileIcon from "../Header/UserProfileIcon";
import ThemeToggle from "../ThemeToggle";

const Head = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50  grid grid-flow-col items-center p-2  h-16 bg-white dark:bg-black text-black dark:text-white shadow-md ">
      <HeaderLogo />

      <SearchBar />

      <div className="flex justify-end items-center space-x-8">
        <ThemeToggle />
        <UserProfileIcon />
      </div>
    </div>
  );
};

export default Head;

import React from "react";
import HeaderLogo from "./header/HeaderLogo";
import SearchBar from "./header/SearchBar";
import UserProfileIcon from "./header/UserProfileIcon";

const Head = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white grid grid-flow-col items-center p-2 shadow-md h-16">
      <HeaderLogo />
      <SearchBar />
      <UserProfileIcon />
    </div>
  );
};

export default Head;

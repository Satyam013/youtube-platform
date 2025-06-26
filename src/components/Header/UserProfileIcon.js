import React, { useState, useEffect } from "react";
import { USER_LOGO } from "../../utils/constants/imagesConstant";
import { Link } from "react-router-dom";

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
        <div
          onClick={toggleDropdown}
          className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-gray-700 dark:hover:bg-white cursor-pointer  border dark:border-gray-500 transition duration-300"
        >
          <img
            src={USER_LOGO}
            alt="User"
            className="w-10 h-10  cursor-pointer rounded-full"
          />
        </div>

        {open && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-md py-2 w-40 z-50 dark:bg-black dark:text-white ">
            <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer hover:dark:text-black hover:dark:bg-green-600">
              <Link to={"/same"}>My Channel</Link>
            </div>
            <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer  hover:dark:text-black hover:dark:bg-green-600">
              <Link to={"/same"}>Settings</Link>
            </div>
            <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer  hover:dark:text-black hover:dark:bg-green-600">
              <Link to={"/same"}>Login</Link>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </>
  );
};

export default UserProfile;

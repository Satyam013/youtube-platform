import React from "react";

function Button({ name }) {
  return (
    <button className="px-4 py-1 bg-gray-100 text-sm rounded-md hover:bg-black hover:text-white  whitespace-nowrap dark:bg-black dark:hover:bg-green-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      {name}
    </button>
  );
}

export default Button;

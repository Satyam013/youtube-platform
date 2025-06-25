import React from "react";

function Button({ name }) {
  return (
    <button className="px-4 py-1 bg-gray-100 text-sm rounded-md hover:bg-black hover:text-white transition whitespace-nowrap">
      {name}
    </button>
  );
}

export default Button;

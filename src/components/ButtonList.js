import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Valentine",
  "Music",
  "Dance",
  "Fight",
  "Action",
  "Adventure",
  "Movie",
  "Concert",
  "Boating",
  "Car Driving",
];

function ButtonList() {
  return (
    <div className="w-full overflow-x-auto  scrollbar-hide pt-5">
      <div className="flex gap-2 px-0 py-2 w-max ">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;

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
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <div className="flex w-max whitespace-nowrap gap-2 px-4 py-2">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;

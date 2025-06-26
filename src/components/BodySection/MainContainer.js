import React from "react";
import VideoContainer from "../VideoCards/VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;

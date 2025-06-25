import React from "react";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;

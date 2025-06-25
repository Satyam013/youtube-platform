// import React from "react";
// import Sidebar from "./Sidebar";
// import { Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import ButtonList from "./ButtonList";

// const Body = () => {
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
//   const location = useLocation();

//   return (
//     <div className="flex pt-10 overflow-hidden">
//       <Sidebar />
//       <div
//         className={`pt-0 ${
//           isMenuOpen ? "pl-56" : "pl-8"
//         } transition-all duration-300`}
//       >
//         {location.pathname === "/" && (
//           <ButtonList className="sticky top-0 z-10 bg-white " />
//         )}
//         <div className="mt-[32px] ml-[-40px] h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;

import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import Head from "./Head";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  return (
    <div className="flex pt-10 overflow-hidden h-[100vh]">
      <Head />
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isMenuOpen ? "pl-56" : "pl-32"
        }`}
      >
        {/* ButtonList (sticky top and scrollable horizontally only) */}
        {location.pathname === "/" && (
          <div className="sticky top-2 z-20 bg-white">
            <ButtonList />
          </div>
        )}
        {/* Main scrollable content area */}

        <div className="mt-[30px] ml-[-40px] h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;

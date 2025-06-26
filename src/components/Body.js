import Sidebar from "./BodySection/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Head from "./BodySection/Head";
import ButtonList from "./Buttons/ButtonList";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  return (
    <div className="flex pt-10 overflow-hidden h-[100vh]">
      <Head />
      <Sidebar />

      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isMenuOpen ? "pl-56" : "pl-32"
        }`}
      >
        {location.pathname === "/" && (
          <div className="sticky top-2 z-20 bg-white dark:bg-black">
            <ButtonList />
          </div>
        )}

        <div className="mt-[30px] ml-[-40px] h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;

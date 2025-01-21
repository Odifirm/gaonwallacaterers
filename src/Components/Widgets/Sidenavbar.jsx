import React from "react";
import { useStateContext } from "../../Context/ContextProvider";
import { Icons } from "../../Library/IconLybrary";

const Sidenavbar = () => {
  const { activeSidebar, setActiveSidebar } = useStateContext();

  const CloseSidebar = () => {
    setActiveSidebar(!activeSidebar);
  };
  return (
    <div
      className={`font-mare mobile:block lg:hidden md:hidden fixed p-4 transition-all duration-700 ease-in-out w-72 z-[1000] h-full top-0 left-0 bg-white ${
        activeSidebar ? "block" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center  ">
        <div>
          <span className=" text-xl tracking-widest">Gaon Walla</span>
        </div>
        <div
          className="bg-primary rounded-full p-2
                "
        >
          <Icons.Close
            onClick={CloseSidebar}
            className="font-light cursor-pointer hover:rotate-90 transition-all delay-100 transform-gpu"
          />
        </div>
      </div>
      <nav className="sidenavbar py-3">
        <ul>
          <li className="">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/service ">Service</a>
          </li>

          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenavbar;

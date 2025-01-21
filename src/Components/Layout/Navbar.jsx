import React from "react";
import { Icons } from "../../Library/IconLybrary";
import { useStateContext } from "../../Context/ContextProvider";

const Navbar = () => {
  const {
    activeContactSection,
    setActiveContactionSection,
    activeSidebar,
    setActiveSidebar,
  } = useStateContext();

  const toggleMenu = () => {
    setActiveContactionSection(!activeContactSection);
  };
  const toggleSidebar = () => {
    setActiveSidebar(!activeSidebar);
  };
  return (
    <>
      <nav className=" font-mare bg-white mx-auto p-4 flex justify-between items-center sticky top-0 z-50">
        <span className="font-bold text-xl tracking-widest">
          <a href="/" className="hover:text-black">
            Gaon Walla
          </a>
        </span>
        <div className="font-mare text-sm hidden md:flex lg:flex space-x-10 mx-auto">
          <a
            href="/"
            className="text-gray-700 hover:text-gray-700 underline-animation cursor-pointer"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-gray-700 hover:text-gray-700 underline-animation cursor-pointer"
          >
            Menu
          </a>
          <a
            href="/services"
            className="text-gray-700 hover:text-gray-700 underline-animation cursor-pointer"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-gray-700 underline-animation cursor-pointer"
          >
            Contact
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-gray-700 underline-animation cursor-pointer"
          >
            About
          </a>
        </div>
        <div className="font-mare flex space-x-4">
          <Icons.ShowMenu
            onClick={toggleSidebar}
            className="font-light hidden mobile:block md:hidden lg:hidden xl:hidden cursor-pointer"
          />
          <Icons.Person className="font-light cursor-pointer" />
          <Icons.GridMenu
            onClick={toggleMenu}
            className="font-light cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Icons } from "../../Library/IconLybrary";
import { useStateContext } from "../../Context/ContextProvider";

const ContactWidget = () => {
  const { activeContactSection, setActiveContactionSection } =
    useStateContext();

  const toggleMenu = () => {
    console.log(activeContactSection);
    setActiveContactionSection(!activeContactSection);
  };
  return (
    <div
      className={`font-mare fixed p-12 transition-all duration-700 ease-in-out w-72 z-[1000] h-full top-0 right-0 bg-white ${
        activeContactSection ? "block" : "translate-x-full opacity-0"
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
            onClick={toggleMenu}
            className="font-light cursor-pointer hover:rotate-90 transition-all delay-100 transform-gpu"
          />
        </div>
      </div>
      <div className=" py-12">
        <div className="flex items-center gap-5 cursor-pointer py-4">
          <Icons.Facebook
            onClick={toggleMenu}
            className="text-xs font-light cursor-pointer hover:rotate-90 transition-all delay-100 transform-gpu"
          />
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-textcolor underline-animation"
          >
            Facebook
          </a>
        </div>
        <div className="flex items-center gap-5 cursor-pointer py-4">
          <Icons.Twitter
            onClick={toggleMenu}
            className="text-xs font-light cursor-pointer hover:rotate-90 transition-all delay-100 transform-gpu"
          />
          <a
            href="https://x.com/?lang=en"
            target="_blank"
            className="hover:text-textcolor underline-animation"
          >
            Twitter
          </a>
        </div>
        <div className="flex items-center gap-5 cursor-pointer py-4">
          <Icons.Youtube
            onClick={toggleMenu}
            className="text-xs font-light cursor-pointer hover:rotate-90 transition-all delay-100 transform-gpu"
          />
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="hover:text-textcolor underline-animation"
          >
            Youtube
          </a>
        </div>
      </div>

      <div className="absolute bottom-11 w-full">
        <hr />
        <div className="py-4">
          <p>+91 879 993 8000</p>
          <p>
            <a href="mailto:catering.gaowala@gmail.com">
              catering.gaowala@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;

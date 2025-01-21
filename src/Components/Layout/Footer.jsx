import React from "react";
import { Icons } from "../../Library/IconLybrary";

const Footer = () => {
  return (
    <div className="relative h-auto bg-black rounded-t-lg py-10">
      <div className="flex justify-center">
        <div className="z-0 -top-8 w-40 h-40 md:w-52 md:h-52 flex justify-center items-center bg-black rounded-full absolute">
          <span className="font-bold text-center h-fit -mt-12 p-2 text-textprimary tracking-widest text-lg md:text-xl">
            Gaon Walla
          </span>
        </div>
      </div>
      <div className="relative  z-10 mt-20 h-fit text-center px-5 md:px-10 rounded-lg text-[12px] md:text-[0.7rem] text-base-100">
        <div className="grid grid-cols-1 mobile:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-4">
          <div className="text-left px-8">
            <div>
              <span className="text-sm">Location</span>
            </div>
            <div className="py-4">
              <span className="">
                Gouda Sahi 2nd Line, Mandiapalli Berhampur University, near by
                Fhishery college, Brahmapur, Odisha 760007
              </span>
            </div>
          </div>

          <div className="text-left px-8">
            <div>
              <span className="text-sm">Contact</span>
            </div>
            <div className="py-4">
              <p>+91 879 993 8000</p>
              <p>
                <a href="mailto:catering.gaowala@gmail.com">
                  catering.gaowala@gmail.com
                </a>
              </p>
            </div>
            <div>Mon - Sun: 10:00 - 6:00 PM</div>
          </div>
          <div className="text-center xl:px-1 md:px-8 lg:px-1 mobile:px-8 mobile:py-4 md:py-0 sm:py-5 lg:py-0">
            <p className="text-[12px] mobile:text-[0.7rem] md:text-[0.7rem] text-base-100">
              Let's make your event memorable and unforgettable with our
              catering.
            </p>
            <p className="mobile:text-[0.8rem] m-3">Join Our email List</p>
            <div className="relative my-6 text-[0.6rem]">
              <input
                type="email"
                required
                className="w-full bg-white text-black bg-transparent 
                  border rounded-full pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                placeholder="Enter email"
              />
              <button
                className="absolute top-1 right-1 flex items-center bg-none  py-1 px-2.5 border border-transparent text-center
                text-textprimary outline-none
                transition-all gap-2 shadow-sm hover:shadowfocus:shadow-none  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Subcribe <Icons.Right className="" />
              </button>
            </div>
          </div>
          <div className="md:text-left hidden md:block sm:text-left lg:text-right mobile:text-left px-8">
            <span className="text-sm">Explore More</span>
            <div className="py-4">
              <p className="p-1">
                <a href="/about">About</a>
              </p>
              <p className="p-1">
                <a href="/menu">Menu</a>
              </p>
              <p className="p-1">
                <a href="/events">Blog</a>
              </p>
              <p className="p-1">
                <a href="/contact">Contact</a>
              </p>
              <p className="p-1">
                <a href="/gallery">Gallery</a>
              </p>
            </div>
          </div>
          <div className="md:text-left hidden md:block mobile:text-left lg:text-right px-8">
            <span className="text-sm">Events</span>
            <div className="py-4">
              <p className="p-1">
                <a href="/wedding">Wedding</a>
              </p>
              <p className="p-1">
                <a href="/birthday">Birthday</a>
              </p>
              <p className="p-1">
                <a href="/corporate">Corporate</a>
              </p>
              <p className="p-1">
                <a href="/social">Social</a>
              </p>
              <p className="p-1">
                <a href="/party">Party</a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-[0.6rem] flex flex-col md:flex-row justify-between items-center my-2">
          <div className="flex gap-1 items-center">
            Copyright ©
            <span className="text-textprimary cursor-pointer">
              <a href="https://odifirm.in" target="_blank">
                ODIFIRM
              </a>
            </span>
            . All rights reserved.
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            FOLLOW US.
            <Icons.Facebook className="cursor-pointer" />
            <Icons.Twitter className="cursor-pointer" />
            <Icons.Instagram className="cursor-pointer" />
            <Icons.Linkedin className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

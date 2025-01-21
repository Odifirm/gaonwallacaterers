import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../assets/Data/data";
import { Icons } from "../../Library/IconLybrary";

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="px-8 py-3 mb-10">
      <div className="font-bold p-5 px-10">
        <p className="text-[0.5rem] text-left tracking-widest text-secondary py-3">
          WHAT WE DO
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <span className="text-[30px] text-left text-black tracking-widest">
              COOKING & CATERIGN
            </span>
          </div>
          <div>
            <p className="text-secondary text-[0.7rem]">
              We are extremely happy to provide refined catering services for
              your special events! By choosing us, you get a guarantee that
              everything is made perfectly from tiny appetizers to an elegant
              wedding cake.
            </p>
          </div>
          <div>
            <p className=" text-[0.7rem] cursor-pointer float-end">
              <a
                href="/about"
                className="flex gap-2 items-center   transition-all"
              >
                About Us <Icons.Right />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseOver={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex justify-center">
                <img
                  src={service.image}
                  alt="food"
                  className={`w-32 h-32 rounded-full transform transition-transform duration-300 ${
                    hoverIndex === index ? "scale-110" : ""
                  }`}
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold m-3 text-textprimary">
                  {service.title}
                </p>
                <p className="text-lg font-semibold text-black">
                  {service.subtitle}
                </p>
                <p className="text-xs p-3">{service.shortdesc}</p>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/Service"
                  className="flex justify-center mt-5 hover:bg-textprimary hover:text-white p-2 w-fit rounded-full hover:animate-bounce"
                >
                  <Icons.Right />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

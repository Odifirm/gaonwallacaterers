import React from "react";
import imgnotfound from "../../assets/Vector illustrator/404.jpg";

const NotFound = () => {
  return (
    <>
      <div className="h-[90%] w-full flex items-center justify-center">
        <div className="block md:flex justify-center items-center">
          <div className="flex justify-center">
            <img src={imgnotfound} alt="" className="w-4/5 mix-blend-darken" />
          </div>
          <div className="">
            <p className="text-center text-2xl  md:text-5xl font-bold m-3 text-gray-800">
              We are Sorry...
            </p>
            <p className="text-center font-semibold text-gray-400">
              The Page you are looking for might have been removed
              <br /> and had its name changed or temporarily unavailable. <br />
              Please refer to your system administrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

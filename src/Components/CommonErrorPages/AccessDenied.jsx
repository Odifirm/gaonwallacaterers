import React from "react";
import AccessDenieds from "../../assets/Vector illustrator/403.avif";

const AccessDenied = () => {
  return (
    <div className="py-32 w-full md:flex items-center justify-center">
      <div className="mobile:inline-block text-center md:flex items-center justify-center">
        <div className="w-full flex justify-center md:w-1/2">
          <img
            src={AccessDenieds}
            alt=""
            className=" w-4/5 md:w-3/5 mix-blend-darken"
          />
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-center text-2xl md:text-3xl font-bold m-3 text-gray-800">
            We are Sorry...
          </p>
          <p className="text-center font-semibold text-gray-400 md:text-sm">
            The Page your'r trying to access has restricted access. <br />{" "}
            Please refer to your system administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;

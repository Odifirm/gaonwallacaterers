import React from "react";

const loader = () => {
  return (
    <div className="absolute top-2/4 left-2/4 ">
      {/* <div className="">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div> */}

      {/* loader 1 */}
      {/* <div className="flex items-center justify-center">
        <div className="relative">
          <div className="h-11 w-11 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-11 w-11 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div> */}
      {/* loader 2 */}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-12 h-12 animate-spin"
        viewBox="0 0 16 16"
      >
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path
          fillRule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        />
      </svg> */}

      {/* loader 3 */}

      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin-slow rounded-full h-10 w-10 border-t-4 border-b-4 border-base"></div>
        {/* <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
        /> */}
      </div>
    </div>
  );
};

export default loader;

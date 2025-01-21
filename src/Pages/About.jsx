import React from "react";
import { Icons } from "../Library/IconLybrary";
import image from "../assets/images/img2.jpg";
import image2 from "../assets/images/img3.jpg";

const About = () => {
  return (
    <div className=" bg-primary">
      <div className="p-5 my-1">
        <div className="text-center">
          <p className="text-2xl  font-extralight">About Us</p>
          <p className="order-center flex justify-center p-2 text-xs">
            <Icons.Dwon />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className=" flex items-center justify-center">
            <div className="relative mobile:w-40 md:60 lg:w-60 ">
              <img
                className=" rounded-xl object-cover  "
                src={image}
                alt="about Us image"
              />
              <div className="absolute  -bottom-0 -right-16 mobile:w-5/6 md:w-2/3 lg:2/3  bg-black text-white py-8 px-6">
                <p className="flex justify-center mobile:text-[0.5rem] sm:text[0.6rem] md:text-[0.7rem] lg:text-[0.7rem]">
                  Journey of Incredible Experiences
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full justify-center items-start gap-20 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl object-cover "
                src={image}
                alt="about Us image"
              />
            </div>
            <div className="pt-2">
              <img
                className=" sm:ml-0 ml-auto rounded-xl object-cover"
                src={image2}
                alt="about Us image"
              />
            </div>
          </div> */}
          <div className="relative h-fit mt-5 bg-white rounded-tl-xl rounded-br-xl rounded-bl-[2.5rem] rounded-tr-[2.5rem]  p-14 mobile:p-10 md:p-14  ">
            <div className="absolute left-3 flex items-center gap-3 text-[0.6rem] text-text-secondary top-3">
              <div className=" w-3 h-3 top-3 left-3 bg-primary rounded-full p-2 "></div>
              <span>WHAT WE DO</span>
            </div>
            <p className="mobile:text-xl sm:text-xl xs:text-xl md:text-xl lg:text-2xl">
              We provide catering service for all events since 2001
            </p>
            <div className="text-[0.7rem]">
              <p className=" mt-5">
                We have been providing exceptional catering and cooking services
                for over 25 years. Our commitment to quality and customer
                satisfaction has made us a trusted name in the industry. Whether
                it's a small gathering or a large event, we ensure that every
                detail is taken care of, delivering delicious food and
                impeccable service.
              </p>
              <p className=" mt-5">
                Our team of experienced chefs and staff are dedicated to making
                your event a success. We use only the freshest ingredients and
                customize our menus to suit your preferences and dietary needs.
                Let us help you create memorable experiences with our top-notch
                catering services. service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-8 pb-24">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5"> */}
        <div className="grid mobile:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mobile:block sm:block md:flex lg:flex">
          <div className="mobile:w-full sm:w-full md:w-3/4 lg:w-2/3">
            <span className="tracking-widest text-[0.6rem] text-text-secondary font-bold">
              ELEGANCE AND QUALITY
            </span>
            <p className="heading uppercase">Innovative culinary creations</p>
          </div>
          <div className="py-4">
            {/* mobile:w-full sm:w-full md:w-3/4 lg:w-3/4 */}
            <div className="flex mobile:inline-block sm:flex md:flex  lg:flex  justify-between gap-5 ">
              <div className="w-1/2  mobile:py-3">
                <div>
                  <Icons.Vision className="text-2xl text-text-secondary" />
                </div>
                <div className="heading">
                  <span>VISION</span>
                </div>
                <div className="text-[0.65rem]">
                  <p>
                    We believe in serving the finest ingredients with
                    exceptional food experiences to every plate. Each dish is
                    curated with a lot of passion and care.
                  </p>
                </div>
              </div>
              <div className="w-1/2  ">
                <div>
                  <Icons.Cooking className="text-2xl text-text-secondary" />
                </div>
                <div className="heading">
                  <span>MISSION</span>
                </div>
                <div className="text-[0.65rem]">
                  <p>
                    To cultivate an inclusive dining experience by offering a
                    diverse range of global cuisines. We are also committed to
                    giving back to the community by providing meals that nourish
                    both body and soul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;

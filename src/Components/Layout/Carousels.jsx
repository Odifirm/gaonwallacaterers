import React from "react";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import { Icons } from "../../Library/IconLybrary";
import hero from "../../assets/images/hero.jpg";
import hero1 from "../../assets/images/hero2.jpg";
import hero2 from "../../assets/images/hero3.jpg";
import hero3 from "../../assets/images/hero4.jpg";
import { herodata } from "../../assets/hero";

const Carousels = () => {
  const images = [hero, hero1, hero2, hero3];
  return (
    <div>
      <Carousel
        transition={{ duration: 1 }}
        className="h-[29rem]"
        autoplay={true}
        autoplayDelay={20000}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            onClick={handlePrev}
            className="!absolute top-[92%] text-white font-bold bg-transparent h-10 px-1 items-center flex justify-center"
          >
            <Icons.Left />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            onClick={handleNext}
            className="!absolute top-[92%] text-white bg-transparent left-8 h-10 px-1 flex  items-center justify-center "
          >
            <div>
              <Icons.Right />
            </div>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 -translate-x-2/4 gap-2 hidden">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {herodata.map((img, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={img.image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {/* {index === 0 && ( */}
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl font-mare"
                >
                  {img.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {img.shortdesc}
                </Typography>
              </div>
            </div>
            {/* // )} */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;

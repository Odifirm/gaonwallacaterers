import React, { useState } from "react";
import { Icons } from "../Library/IconLybrary";
import { GoogleMapLocation, TypingEffect } from "../Components";

const Contact = () => {
  const [formData, setFormData] = useState({ parentMenu: "0" });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const checkvalue = type === "checkbox" ? (checked ? "Y" : "N") : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checkvalue : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      console.error("Error while contact", error);
    }
  };

  return (
    <div className="my-10 mb-20">
      <div className="text-center">
        <span className="text-2xl">CONTACT</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 sm:mx-10 xl:mx-16 mobile:mx-10 md:mx-32 lg:mx-32">
        <div>
          <span className="text-sm">CONTACT DETAILS</span>

          <div className="w-3/5">
            <span className="text-[0.7rem] w-10">
              Gouda Sahi 2nd Line, Mandiapalli Berhampur University, near by
              Fhishery college, Brahmapur, Odisha 760007 .
            </span>
          </div>
        </div>
        <div className="" onSubmit={handleSubmit}>
          <form className="text-[0.6rem]">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                />
                <label
                  htmlFor="name"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  <Icons.User className="" />
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  <Icons.Mail className="" />
                  Email
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                  maxLength={13}
                />
                <label
                  htmlFor="name"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  <Icons.Phone className="" />
                  Phone
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                />
                <label
                  htmlFor="subject"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  <Icons.Info className="" />
                  Subject
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="noofperson"
                  id="noofperson"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                />
                <label
                  htmlFor="noofperson"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  <Icons.MultiPerson className="" />
                  Guest Count
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                />
                <label
                  htmlFor="date"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  Event Date
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-1 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="hidden"
                  name="menuId"
                  id="menuId"
                  // onChange={handleChange}
                  required
                  value="0"
                />
                <textarea
                  type="number"
                  name="aboute"
                  id="aboute"
                  className="forminput peer"
                  placeholder=""
                  // onChange={handleChange}
                  required
                />
                <label
                  htmlFor="aboute"
                  className="flex justify-center items-center gap-2 forminputlabels"
                >
                  <Icons.Pencil className="" />
                  Tell Us About Your Event
                </label>
              </div>
            </div>
            <div className="flex  gap-4 items-center">
              <button
                type="submit"
                className="w-fit bg-secondary text-white text-[0.7rem] px-4 py-1.5"
              >
                Submit
              </button>
              <div className="">
                <span className="flex gap-1 items-center text-secondary">
                  <input
                    type="checkbox"
                    name="termcondition"
                    id="termcondition"
                    className=""
                  />
                  I agree that my data is{" "}
                  <span className="hover:text-textprimary">
                    collected and stored
                  </span>
                  .
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <GoogleMapLocation />
      </div>
      <div className="relative bg-contact-img bg-clip-content bg-center bg-no-repeat h-60 mt-10  ">
        <div className="absolute mobile:top-[25%] md:top-[30%] lg:top-[30%]  mobile:left-1 md:left-10 lg:left-10 mobile:text-lg sm:text-xl md:text-xl lg:text-3xl  px-5 mobile:w-[90%] md:w-[35%] lg:w-[35%]">
          <div>
            <span>
              We provide catering services for{" "}
              <TypingEffect
                strings={["your events.", "your parties.", "special days."]}
                speed={200}
                delay={2000}
                cursorChar=""
                loop={true}
              />
            </span>
          </div>

          <button
            type=""
            className="w-fit flex gap-2 items-center bg-secondary text-white text-[0.7rem] px-3 my-5 "
          >
            <Icons.Phone className="text-white" /> Call Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

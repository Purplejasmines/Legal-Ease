import React from "react";
import Logo from "../Assets/Images/logo.png";
import Dropdown from "../Component/Dropown";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#041831] py-4">
        <div className="flex items-center justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-[224px] h-[50px] rounded-full ml-[50px] mr-[124px]"
          />
          <ul className="flex items-center justify-center gap-[26px]">
            <li>
              <a
                href="#about-us"
                className="text-lg w-16 h-6 font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] hover:text-gray-300 "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-lg w-16 h-6 font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] hover:text-gray-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="text-lg w-16 h-6 font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] hover:text-gray-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-lg w-16 h-6 font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] hover:text-gray-300"
              >
                Resources
              </a>
            </li>
            <Dropdown />
          </ul>
        </div>

        <div className="flex items-center mr-[50px] gap-3">
          <button className="font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] border  border-[#C8BE87] px-[29px] py-[8px]">
            LOGIN
          </button>
          <button className="bg-[#C8BE87] font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] py-[8px] px-[20px] border-1 border-[041831] rounded">
            SIGN UP
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

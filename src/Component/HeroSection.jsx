import React from "react";
import Justice from "../Assets/Images/justice.png";
import Gravel from "../Assets/Images/gravel.png";
import Robe from "../Assets/Images/robe.png";
import Light from "../Assets/Images/light.png";
import Book from "../Assets/Images/book.png";
import Clerk from "../Assets/Images/clerk.png";


const Hero = () => {
  return (
    <>
      <div className="hero h-screen flex items-center justify-between  ">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ml-[64px]">
          <h2 className="font-bold font-Roboto text-[56px] w-[576px] h-[134px] mb-[47px] leading-[67.2px] text-[#C8BE87]">
            Bridging the Gap in Legal Aid
          </h2>
          <p className="w-[576px] h-[108px] font-normal font-Roboto text-[18px] leading-[27px] text-[#031123] ">
            LegalEase is a cloud-based platform that provides accessible and
            affordable legal support to underserved Nigerians, especially in
            remote areas. With the help of AI-powered chatbots and pro-bono
            lawyers, we aim to bridge the gap between legal aid and those living
            in poverty.
          </p>
          <div className="flex justify-start items-start mt-[40px] gap-[16px] mr-[64px]">
            <button className="bg-[#041831] font-Roboto font-normal text-[16px] leading-[24px] text-[#FFFFFF] py-[12px] px-[24px] ">
              SIGN UP
            </button>
            <button className=" text-[#031123] font-Roboto font-normal text-[16px] leading-[24px] py-[12px] px-[24px] border ">
              Learn
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[16px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-[275px] mr-[44px]">
          <img
            src={Justice}
            alt="Image-1"
            className="w-[239px] h-full ml-[270px]  "
          />
          <img
            src={Gravel}
            alt="Image-2"
            className="w-[239px] h-[341px] mt-[43px] ml-[145px] "
          />
          <img
            src={Robe}
            alt="Image-3"
            className="w-[239px] h-[294px]  ml-[270px] "
          />
          <img
            src={Light}
            alt="Image-4"
            className="w-[239px] h-[341px]  ml-[145px] "
          />
          <img
            src={Book}
            alt="Image-5"
            className="w-[239px] h-[198px]  ml-[270px] "
          />
          <img
            src={Clerk}
            alt="Image-6"
            className="w-[239px] h-[179px]  ml-[145px] "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

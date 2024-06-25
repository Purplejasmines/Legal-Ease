import React, { useState } from "react";

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="dropdown-toggle flex justify-center items-center"
        onClick={handleToggleMenu}
      >
        <span className="text-lg w-16 h-6 font-Roboto font-normal text-[16px] leading-6 text-[#FFFFFF] hover:text-gray-300">
          More
        </span>
        <svg
          className="w-4 h-4 text-[#fff]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute mt-[150px] ml-[80px] bg-[#C8BE87] py-2 px-3 text-center  rounded shadow">
          <ul>
            <li>
              <a
                href="#Profile"
                className="text-[#fff] font-Roboto font-normal text-[12px] leading-6"
              >
                Profile
              </a>
            </li>{" "}
            <hr />
            <li>
              <a
                href="#Blog"
                className="text-[#fff] font-Roboto font-normal text-[12px] leading-6 "
              >
                Blog
              </a>
            </li>{" "}
            <hr />
            <li>
              <a
                href="#Subscription"
                className="text-[#fff] font-Roboto font-normal text-[12px] leading-6"
              >
                Subscription & Plan
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React from "react";
import { plusSign, dropdown as droplet, subtract } from "../../assets";

const Accordion = ({ data, dropdown, switchIcon, setDropdown, typeDiff }) => {
  const toggleFaq = (index) => {
    if (dropdown === index) {
      setDropdown(null);
    } else {
      setDropdown(index);
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-4">
      {switchIcon === "chevron" && (
        <>
          {data.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 mb-4 w-120 align-middle"
            >
              <button
                className="w-full text-left py-2 px-4 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{faq.question}</span>
                  {dropdown === index ? (
                    <img
                      src={droplet}
                      style={{
                        transform: `rotate(${dropdown === index ? 180 : 0}deg)`,
                        transition: "transform 0.3s ease-in-out",
                      }}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <img
                      src={droplet}
                      style={{
                        rotate: 0,
                      }}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </button>
              {dropdown === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {switchIcon === "others" && (
        <>
          {data.map((faq, index) => (
            <div key={index} className="border p-2 border-gray-400 mb-4 w-100">
              <button
                className="w-full text-left py-2 px-4 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{faq.question}</span>
                  {dropdown === index ? (
                    <img
                      src={subtract}
                      style={{
                        transform: `rotate(${dropdown === index ? 180 : 0}deg)`,
                        transition: "transform 0.3s ease-in-out",
                      }}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <img
                      src={plusSign}
                      style={{
                        transform: `rotate(${dropdown === index ? 180 : 0}deg)`,
                        transition: "transform 0.3s ease-in-out",
                      }}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </button>
              {dropdown === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Accordion;

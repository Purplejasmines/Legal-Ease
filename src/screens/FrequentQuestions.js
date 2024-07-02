import React, { useState } from "react";
import { Accordion } from "./component";
import { consultation, faqData, otherFreqQuestions } from "./component/data";

const FrequentQuestions = () => {
  const [dropdown, setDropdown] = useState(null);
  const [otherQuestions, setOtherQuestions] = useState(null);

  return (
    <div className="">
      <div className="p-16">
        <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>
        <p>Find quick answers to common questions about our legal services.</p>
      </div>
      <div className="flex flex-col align-middle items-center justify-center p-16 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">FAQs</h1>
          <p className="text-center text-xl">
            Find answers to commonly asked questions about our services,
            subscription plans, user accounts, and legal assistance.
          </p>
        </div>
      </div>
      <div className="mb-20">
        <Accordion
          data={faqData}
          switchIcon="chevron"
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
      </div>
      <div className="mb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Still have question?
        </h1>
        <p className="text-center text-xl mb-4">
          Contact our support team for further assistance.
        </p>
        <button className="border border-customYellow pt-4 pb-4 pr-8 pl-8 text-center mb-20">
          Contact
        </button>
      </div>
      <div className="mb-20 flex flex-row w-100">
        <div className="mb-20 w-100 flex flex-col p-16 min-w-fit">
          <h1 className="text-4xl font-bold mb-8">AI-Powered</h1>
          <p className="text-xl mb-8">
            Contact our support team for further assistance.
          </p>
          <button className="border border-customYellow w-40 pt-4 pb-4 pr-8 pl-8 text-center mb-20">
            Contact
          </button>
        </div>
        <div className="w-full p-8">
          <Accordion
            data={otherFreqQuestions}
            switchIcon="others"
            dropdown={otherQuestions}
            setDropdown={setOtherQuestions}
          />
        </div>
      </div>
      <div className="flex flex-col align-middle items-center justify-center p-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">FAQs</h1>
          <p className="text-center text-xl">
            Find answers to common questions about our consultation request
            process, including expected response times and the types of legal
            issues we cover.
          </p>
        </div>
      </div>

      <div className="flex flex-col align-middle items-center justify-center p-16">
        <div className="max-w-3xl">
          {consultation.map((item) => (
            <div>
              <h1 className="text-lg font-bold mb-2 text-left">
                {item.question}
              </h1>
              <p className="text-left text-xl mb-10">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Still have question?
        </h1>
        <p className="text-center text-xl mb-4">
          Contact our support team for further assistance.
        </p>
        <button className="border border-customYellow pt-4 pb-4 pr-8 pl-8 text-center mb-20">
          Contact
        </button>
      </div>
    </div>
  );
};

export default FrequentQuestions;

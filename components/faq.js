import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is this  free to use?",
    answer: "Yes, this  is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "Can I contribute to the development of Indic Subtitler?",
    answer:
      "Absolutely! We welcome contributions from the community. Whether it's code improvements, bug reports, or feature suggestions, your involvement is highly valued. Check out our GitHub repository for guidelines on how to contribute and join our community discussions. Together, we can make Indic Subtitler even better!",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "While we don't offer direct technical support, our open-source community is here to help! Feel free to explore our forums, documentation, and collaborative channels where contributors and users share insights and assist with technical queries. Together, we build a supportive environment for our open-source product.",
  },
];

export default Faq;
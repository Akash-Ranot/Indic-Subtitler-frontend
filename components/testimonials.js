import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="container mx-auto px-4 py-10 text-center">
      <h2 className="text-4xl font-bold mb-6">How it Works</h2>
      <div className="flex flex-wrap -mx-2 justify-center">
        <div className="w-full sm:w-1/3 px-2 mb-4">
          <div className="bg-blue-700 text-white p-5 rounded shadow text-center">
            <div className="text-6xl mb-3">⬆️</div>
            <h3 className="font-bold">Upload Video</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/3 px-2 mb-4">
          <div className="bg-blue-700 text-white p-5 rounded shadow text-center">
            <div className="text-6xl mb-3">⚙️</div>
            <h3 className="font-bold">Generate Subtitles</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/3 px-2 mb-4">
          <div className="bg-blue-700 text-white p-5 rounded shadow text-center">
            <div className="text-6xl mb-3">⬇️</div>
            <h3 className="font-bold">Download .srt/.vtt</h3>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
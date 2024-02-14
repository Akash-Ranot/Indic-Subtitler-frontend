// components/Video.js

import React from "react";

const Video = () => {
  // Language names in respective scripts
  const languageNames = [
    "অসমীয়া",
    "বাংলা",
    "English ",
    "ગુજરાતી",
    "हिन्दी",
    "ಕನ್ನಡ",
    "മലയാളം",
    "मराठी",
    "اُردُو",
    "ਪੰਜਾਬੀ",
    "தமிழ்",
    "తెలుగు",
    "اُردُو",  // Last element
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center"></h2>
        <div className="flex flex-wrap -mx-2">
          {languageNames.map((language, index) => (
            <div key={index} className={`w-full sm:w-1/3 px-2 mb-4 ${index === languageNames.length - 1 ? 'sm:mx-auto' : ''}`}>
              <div className="bg-blue-500 text-white p-5 rounded shadow text-center">
                <h3 className="font-bold">{language}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;


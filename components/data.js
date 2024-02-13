import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Multilingual Accessibility",
      desc: "Break language barriers by transcribing videos and audios in various Indic languages",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Effortless Transcription",
      desc: " Save time and energy with our user-friendly platform that simplifies the transcription process, making it accessible to both beginners and seasoned users.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Precision Translation",
      desc: "Elevate your content with accurate and contextually rich translations powered by state-of-the-art Machine Learning models, ensuring a nuanced and authentic viewing experience.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

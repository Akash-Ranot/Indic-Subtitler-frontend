import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Indic-Subtitler</title>
        <meta
          name="description"
          content="An open source subtitling platform for transcribing videos/audios in Indic languages and translating subtitles as well using ML models"
        />
        <link rel="icon" href="..\public\icons8-i-96.png" />
      </Head>

      <Navbar />
      <Hero />
      <Testimonials />
      <SectionTitle
        pretitle="Indic-Subtitler"
        title=" Why should you use ">
       An open source subtitling platform for transcribing videos/audios in Indic languages and translating subtitles as well using ML models.
      </SectionTitle>
      <Benefits data={benefitOne} />
      
      <SectionTitle
        pretitle=""
        title="languages  Supported">
       
      </SectionTitle>
      <Video />
     
     
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        
      </SectionTitle>
      <Faq />
      
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
import Announcements from "../components/home/Announcements";
import Slider from "../components/home/Slider";
import SectionTabs from "../components/home/SectionTabs";
import Programmes from "../components/home/Programmes";
import AboutSection from "../components/home/AboutSection";
import Gallery from "../components/home/Gallery";
import Stats from "../components/home/stats";

function Home() {
  return (
    <>
      <Announcements />
      <Slider />
      <SectionTabs />
      <Programmes />
      <AboutSection />
      <Gallery />
      <Stats />
    </>
  );
}

export default Home;


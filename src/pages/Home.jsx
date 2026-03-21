import Announcements from "../components/home/Announcements";
import Slider from "../components/home/Slider";
import QuickActions from "../components/home/QuickActions";
import SectionTabs from "../components/home/SectionTabs";
import Programmes from "../components/home/Programmes";
import AboutSection from "../components/home/AboutSection";
import Gallery from "../components/home/Gallery";
import Stats from "../components/home/stats";
import BackToTop from "../components/layout/BackToTop";

function Home() {
  return (
    <>
      <Announcements />
      <Slider />
      <QuickActions />
      <SectionTabs />
      <Programmes />
      <AboutSection />
      <Gallery />
      <Stats />
      <BackToTop />
    </>
  );
}

export default Home;

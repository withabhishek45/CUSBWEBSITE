import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AboutSection from "./components/home/AboutSection";
import Admission from "./pages/Admission";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Updates from "./pages/Updates";
import Newsletter from "./pages/Newsletter";
import RecentEvents from "./pages/RecentEvents";
import UpcomingEvents from "./pages/UpcomingEvents";
import Tenders from "./pages/Tenders";
import Recruitment from "./pages/Recruitment";
import Undergraduate from "./pages/Undergraduate";
import Postgraduate from "./pages/Postgraduate";
import Research from "./pages/Research";
import Administration from "./pages/Administration";
import Students from "./pages/Students";
import FacultyAndStaff from "./pages/FacultyAndStaff";
import Visitors from "./pages/Visitors";
import Notices  from "./data/notices";
import Downloads from "./pages/Downloads";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/recent-events" element={<RecentEvents />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/undergraduate" element={<Undergraduate />} />
        <Route path="/postgraduate" element={<Postgraduate />} />
        <Route path="/research" element={<Research />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/students" element={<Students />} />
        <Route path="/faculty-staff" element={<FacultyAndStaff />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/download" element={<Downloads />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

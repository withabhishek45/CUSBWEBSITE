import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AboutSection from "./components/home/AboutSection";
import Admission from "./pages/Admission";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import President from "./pages/President";
import Chancellor from "./pages/Chancellor";
import ViceChancellor from "./pages/ViceChancellor";
import Notices from "./pages/Notices";
import Search from "./pages/Search";

import Agriculture from "./pages/departments/Agriculture";
import Biotechnology from "./pages/departments/Biotechnology";
import Chemistry from "./pages/departments/Chemistry";
import Commerce from "./pages/departments/Commerce";
import ComputerScience from "./pages/departments/ComputerScience";
import Economics from "./pages/departments/Economics";
import English from "./pages/departments/English";
import Hindi from "./pages/departments/Hindi";
import History from "./pages/departments/History";
import Law from "./pages/departments/Law";
import Mathematics from "./pages/departments/Mathematics";
import Physics from "./pages/departments/Physics";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/agriculture" element={<Agriculture />} />
            <Route path="/departments/biotechnology" element={<Biotechnology />} />
            <Route path="/departments/chemistry" element={<Chemistry />} />
            <Route path="/departments/commerce" element={<Commerce />} />
            <Route path="/departments/computer-science" element={<ComputerScience />} />
            <Route path="/departments/economics" element={<Economics />} />
            <Route path="/departments/english" element={<English />} />
            <Route path="/departments/hindi" element={<Hindi />} />
            <Route path="/departments/history" element={<History />} />
            <Route path="/departments/law" element={<Law />} />
            <Route path="/departments/mathematics" element={<Mathematics />} />
            <Route path="/departments/physics" element={<Physics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students" element={<Students />} />
            <Route path="/president" element={<President />} />
            <Route path="/chancellor" element={<Chancellor />} />
            <Route path="/vice-chancellor" element={<ViceChancellor />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

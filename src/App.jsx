import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AboutSection from "./components/home/AboutSection";
import Admission from "./pages/Admission";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/departments/DepartmentDetail";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import President from "./pages/President";
import Chancellor from "./pages/Chancellor";
import ViceChancellor from "./pages/ViceChancellor";
import Notices from "./pages/Notices";
import Search from "./pages/Search";

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
            <Route path="/departments/:id" element={<DepartmentDetail />} />
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

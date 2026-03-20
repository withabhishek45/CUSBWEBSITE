import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSearch, FiChevronDown } from "react-icons/fi";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState(t('language.en'));
  const [search, setSearch] = useState("");

  // ✅ Search function
  const handleSearch = () => {
    if (!search.trim()) return;
    window.location.href = `/search?q=${search}`;
  };

  return (
    <div className="sticky top-0 z-50 w-full">

      {/* 🔴 TOP BAR */}
      <div className="flex items-center justify-between px-4 py-2 text-white bg-red-900">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Mobile menu button */}
          <button
            className="text-xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Home */}
          <NavLink
            to="/"
            className="flex items-center gap-1 font-semibold text-yellow-300"
          >
            <FaHome /> {t('nav.home')}
          </NavLink>

          {/* Desktop menu */}
          <div className="items-center hidden gap-5 text-sm md:flex">
            <NavLink to="/about" className="hover:text-yellow-300">{t('nav.about')}</NavLink>
            <NavLink to="/administration" className="hover:text-yellow-300">{t('nav.administration')}</NavLink>
            <NavLink to="/students" className="hover:text-yellow-300">Students</NavLink>
            <NavLink to="/faculty-staff" className="hover:text-yellow-300">Faculty</NavLink>
            <NavLink to="/visitors" className="hover:text-yellow-300">Visitors</NavLink>
            <NavLink to="/notices" className="hover:text-yellow-300">Notices</NavLink>

            <a href="https://cusb.samarth.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              {t('nav.studentLogin')}
            </a>

            <a href="https://cusb.samarth.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              {t('nav.employeeLogin')}
            </a>
           <NavLink 
  to="/admissions" 
  className="relative px-3 py-1 font-semibold text-white bg-red-500 rounded 
             hover:bg-orange-700 
             animate-[pulse_1.5s_ease-in-out_infinite]"
>
  Admission 2026

  <span className="absolute px-1 text-xs text-white bg-red-800 rounded-full -top-2 -right-2 animate-bounce">
    NEW
  </span>
</NavLink>
          </div>
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="items-center hidden gap-4 md:flex">

          {/* 🔍 Search Bar */}
          <div className="flex items-center overflow-hidden bg-white rounded">
            <input
              type="text"
              placeholder={t('nav.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-32 px-2 py-1 text-black outline-none md:w-40"
            />
            <button
              onClick={handleSearch}
              className="p-2 text-black hover:bg-gray-100"
            >
              <FiSearch />
            </button>
          </div>

          {/* Social Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowSocial(true)}
            onMouseLeave={() => setShowSocial(false)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-300">
              Social <FiChevronDown />
            </button>

            {showSocial && (
              <div className="absolute right-0 z-50 p-4 text-black bg-white rounded shadow-lg w-60">
                <a href="https://www.facebook.com/cusbofficial/" target="_blank" rel="noopener noreferrer" className="flex gap-2 py-1 hover:text-blue-600"><FaFacebook /> Facebook</a>
                <a href="https://x.com/cusbofficial?lang=en" target="_blank" rel="noopener noreferrer" className="flex gap-2 py-1 hover:text-blue-400"><FaTwitter /> X</a>
                <a href="https://www.instagram.com/cusbofficialpage/" target="_blank" rel="noopener noreferrer" className="flex gap-2 py-1 hover:text-pink-600"><FaInstagram /> Instagram</a>
                <a href="https://www.linkedin.com/school/cusb/posts/" target="_blank" rel="noopener noreferrer" className="flex gap-2 py-1 hover:text-blue-700"><FaLinkedin /> LinkedIn</a>
                <a href="https://www.youtube.com/@CUSBofficialchannel" target="_blank" rel="noopener noreferrer" className="flex gap-2 py-1 hover:text-red-600"><FaYoutube /> YouTube</a>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowLanguage(true)}
            onMouseLeave={() => setShowLanguage(false)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-300">
              {language} <FiChevronDown />
            </button>

            {showLanguage && (
              <div className="absolute right-0 z-50 p-2 text-black bg-white rounded shadow-lg">
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                    localStorage.setItem('lang', 'en');
                    setLanguage(t('language.en'));
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-blue-500 hover:text-white"
                >
                  {t('language.en')}
                </button>
                <button
                  onClick={() => {
                    i18n.changeLanguage("hi");
                    localStorage.setItem('lang', 'hi');
                    setLanguage(t('language.hi'));
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-orange-500 hover:text-white"
                >
                  {t('language.hi')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔴 MOBILE MENU */}
      {menuOpen && (
        <div className="flex flex-col px-4 py-4 space-y-3 text-sm text-white bg-red-800 md:hidden">

          <NavLink to="/about">About</NavLink>
          <NavLink to="/administration">Administration</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/faculty-staff">Faculty</NavLink>
          <NavLink to="/visitors">Visitors</NavLink>
          <NavLink to="/notices">Notices</NavLink>

          <a href="https://cusb.samarth.edu.in" target="_blank" rel="noopener noreferrer">
            Student Login
          </a>

          <a href="https://cusb.samarth.ac.in" target="_blank" rel="noopener noreferrer">
            Employee Login
          </a>

          {/* Mobile Search */}
          <div className="flex items-center mt-2 overflow-hidden bg-white rounded">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 py-1 text-black outline-none"
            />
            <button onClick={handleSearch} className="p-2 text-black">
              <FiSearch />
            </button>
          </div>
        </div>
      )}

      {/* ⚪ MAIN NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow">

        <NavLink to="/">
          <img src="/src/assets/name-logo.png" className="ml-auto h-14 md:h-16" />
        </NavLink>

        <div className="hidden gap-4 md:flex">
          <img src="/src/assets/vikshit_bharat_f.jpg" className="h-19" />
          <img src="/src/assets/naac2.png" className="mr-16 h-18" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
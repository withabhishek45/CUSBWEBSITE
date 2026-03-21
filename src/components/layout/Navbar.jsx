import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaHome, FaBars, FaTimes, FaSearch, FaUserCircle, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMenuOpen(false);
    setShowLogin(false);
  }, [location]);

  const handleSearch = () => {
    if (!search.trim()) return;
    window.location.href = `/search?q=${search}`;
  };

  const quickLinks = [
    { label: "About", path: "/about" },
    { label: "Departments", path: "/departments" },
    { label: "Admissions", path: "/admissions" },
    { label: "Notices", path: "/notices" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ];

  const loginOptions = [
    { label: "SAMARTH Student Login", url: "https://cusb.samarth.edu.in", color: "bg-blue-600" },
    { label: "SAMARTH Employee Login", url: "https://cusb.samarth.ac.in", color: "bg-green-600" },
    { label: "Admin Login", url: "/admin", color: "bg-red-600" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md">
      {/* 🔴 TOP NAVBAR */}
      <div className="bg-red-800 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="flex items-center justify-between px-4 py-2">
            {/* Left - Home + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="text-xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <NavLink to="/" className="flex items-center gap-2 font-semibold text-yellow-300 hover:text-white">
                <FaHome /> <span className="hidden sm:inline">Home</span>
              </NavLink>
            </div>

            {/* Center - Quick Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 text-sm">
              {quickLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="hover:text-yellow-300 transition whitespace-nowrap">
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right - Search + Login Dropdown + Language */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden md:flex items-center bg-white rounded overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-24 lg:w-32 px-2 py-1 text-sm text-gray-800 outline-none"
                />
                <button onClick={handleSearch} className="p-2 text-gray-800">
                  <FaSearch />
                </button>
              </div>

              {/* Login Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLogin(!showLogin)}
                  onMouseEnter={() => setShowLogin(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-red-900 font-semibold rounded hover:bg-yellow-400 transition"
                >
                  <FaUserCircle />
                  <span className="hidden sm:inline">Login</span>
                  <FaChevronDown className={`transition-transform ${showLogin ? 'rotate-180' : ''}`} />
                </button>

                {showLogin && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl z-50 overflow-hidden"
                    onMouseLeave={() => setShowLogin(false)}
                  >
                    <div className="p-3 bg-red-800 text-white font-semibold">
                      Select Login Type
                    </div>
                    <div className="py-2">
                      {loginOptions.map((option, index) => (
                        <a
                          key={index}
                          href={option.url}
                          target={option.url.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 px-4 py-3 text-white hover:opacity-90 transition ${option.color}`}
                        >
                          <FaUserCircle />
                          <span>{option.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language */}
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  i18n.changeLanguage(e.target.value === "हिंदी" ? "hi" : "en");
                }}
                className="bg-red-700 text-white text-sm px-2 py-2 rounded cursor-pointer"
              >
                <option>EN</option>
                <option>हिंदी</option>
              </select>
            </div>
          </div>

          {/* Admission Banner */}
          <div className="hidden md:block bg-yellow-500 text-red-900 text-center py-1 font-bold text-sm">
            <NavLink to="/admissions">📢 Admissions Open 2026-27 | Click Here to Apply</NavLink>
          </div>
        </div>
      </div>

      {/* 🔴 MOBILE MENU */}
      {menuOpen && (
        <div className="bg-red-900 text-white md:hidden">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-3 py-2 text-gray-800 outline-none"
              />
              <button onClick={handleSearch} className="p-2 text-gray-800">
                <FaSearch />
              </button>
            </div>

            {/* Mobile Links */}
            {quickLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className="block py-2 hover:text-yellow-300 border-b border-red-800">
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Login Options */}
            <div className="border-t border-red-800 pt-3 space-y-2">
              <p className="font-semibold text-yellow-300">Login Options:</p>
              {loginOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.url}
                  target={option.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 py-2 px-3 text-white rounded ${option.color}`}
                >
                  <FaUserCircle />
                  <span>{option.label}</span>
                </a>
              ))}
            </div>

            {/* Admissions */}
            <NavLink to="/admissions" className="block text-center py-3 bg-yellow-500 text-red-900 font-bold rounded mt-2">
              📢 Admissions Open 2026-27
            </NavLink>

            {/* Language */}
            <div className="flex gap-2 pt-2">
              <button onClick={() => { i18n.changeLanguage("en"); setLanguage("EN"); }}
                className={`flex-1 py-2 rounded ${language === "EN" ? "bg-white text-red-900" : "bg-red-800 text-white border border-white/30"}`}>
                English
              </button>
              <button onClick={() => { i18n.changeLanguage("hi"); setLanguage("हिंदी"); }}
                className={`flex-1 py-2 rounded ${language === "हिंदी" ? "bg-white text-red-900" : "bg-red-800 text-white border border-white/30"}`}>
                हिंदी
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ⚪ LOGO BAR */}
      <div className="bg-white border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-1">
          <NavLink to="/">
            <img src="/images/name-logo.png" style={{height: "90px"}} alt="CUSB" />
          </NavLink>
          <div className="hidden md:flex items-center gap-2">
            <img src="/images/vikshit_bharat_f.jpg" style={{height: "70px"}} alt="Viksit Bharat" />
            <img src="/images/naac2.png" style={{height: "75px"}} alt="NAAC" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

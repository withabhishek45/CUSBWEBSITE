import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
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
    { label: "Contact", path: "/contact" },
  ];

  const allLinks = [
    { label: "About", path: "/about" },
    { label: "Departments", path: "/departments" },
    { label: "Admissions", path: "/admissions" },
    { label: "Notices", path: "/notices" },
    { label: "Students", path: "/students" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md">
      <div className="bg-red-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
              <button className="text-xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <NavLink to="/" className="flex items-center gap-2 font-semibold text-yellow-300 hover:text-white">
                <FaHome /> <span className="hidden sm:inline">Home</span>
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-sm">
              {quickLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="hover:text-yellow-300 transition whitespace-nowrap">
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3">
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

              <NavLink 
                to="/students" 
                className="px-4 py-2 bg-yellow-500 text-red-900 font-semibold rounded hover:bg-yellow-400 transition hidden sm:inline"
              >
                Student Portal
              </NavLink>
            </div>
          </div>

          <div className="hidden md:block bg-yellow-500 text-red-900 text-center py-1 font-bold text-sm">
            <NavLink to="/admissions">Admissions Open 2026-27 | Click Here to Apply</NavLink>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-red-900 text-white md:hidden">
          <div className="px-4 py-4 space-y-3">
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

            {allLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className="block py-2 hover:text-yellow-300 border-b border-red-800">
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/admissions" className="block text-center py-3 bg-yellow-500 text-red-900 font-bold rounded mt-2">
              Admissions Open 2026-27
            </NavLink>

            <NavLink to="/students" className="block text-center py-3 bg-green-600 text-white font-bold rounded mt-2">
              Student Portal
            </NavLink>
          </div>
        </div>
      )}

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

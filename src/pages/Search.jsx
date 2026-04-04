import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch, FaFileAlt, FaBook, FaUserGraduate, FaBell, FaUniversity, FaArrowRight, FaGraduationCap, FaHome, FaClipboardList, FaMoneyBill } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const allContent = [
  { type: "Page", title: "Home", path: "/", keywords: ["home", "main", "university", "cusb", "central university south bihar", "gaya"] },
  { type: "Page", title: "About University", path: "/about", keywords: ["about", "university", "history", "information", "central universities act", "campus"] },
  { type: "Page", title: "Admissions 2026-27", path: "/admissions", keywords: ["admission", "admissions", "apply", "register", "courses", "fees", "eligibility", "cutoff", "merit list", "counselling", "ug", "pg", "phd", "mba", "bba", "bca", "bcom", "bsc", "msc", "ma", "mcom", "llb", "llm", "mca", "cuet", "cet", "scholarship"] },
  { type: "Page", title: "Departments", path: "/departments", keywords: ["department", "departments", "faculty", "subjects", "courses", "agriculture", "biotechnology", "chemistry", "commerce", "computer science", "economics", "english", "hindi", "history", "law", "mathematics", "physics"] },
  { type: "Page", title: "Contact Us", path: "/contact", keywords: ["contact", "phone", "email", "address", "location", "help", "gaya", "bihar", "map", "office hours", "registrar"] },
  { type: "Page", title: "Student Portal", path: "/students", keywords: ["student", "students", "results", "result", "hostel", "scholarship", "exam", "examination", "schedule", "fees", "fee payment", "library", "timetable", "calendar", "academic calendar", "mess", "room", "accommodation", "vds boys hostel", "gagri sadan", "maytri sadan"] },
  { type: "Page", title: "Notices & Announcements", path: "/notices", keywords: ["notice", "notices", "announcement", "announcements", "notification", "notice board", "latest", "new", "circular", "notification"] },
  { type: "Page", title: "President of India", path: "/president", keywords: ["president", "india", "visitor", "droupadi murmu", "guest"] },
  { type: "Page", title: "Chancellor", path: "/chancellor", keywords: ["chancellor", "head", "cp thakur", "c p thakur"] },
  { type: "Page", title: "Vice Chancellor", path: "/vice-chancellor", keywords: ["vice chancellor", "vc", "head", "kn singh", "k n singh", "professor"] },
];

const quickCategories = [
  { icon: FaGraduationCap, title: "Admissions", path: "/admissions", color: "from-blue-500 to-blue-600" },
  { icon: FaBook, title: "Departments", path: "/departments", color: "from-green-500 to-green-600" },
  { icon: FaUserGraduate, title: "Students", path: "/students", color: "from-purple-500 to-purple-600" },
  { icon: FaBell, title: "Notices", path: "/notices", color: "from-orange-500 to-orange-600" },
  { icon: FaClipboardList, title: "Results", path: "/students", color: "from-red-500 to-red-600" },
  { icon: FaMoneyBill, title: "Scholarship", path: "/students", color: "from-teal-500 to-teal-600" },
  { icon: FaHome, title: "Hostel", path: "/students", color: "from-pink-500 to-pink-600" },
  { icon: FaUniversity, title: "About", path: "/about", color: "from-indigo-500 to-indigo-600" },
];

const getIcon = (type) => {
  switch (type) {
    case "Page": return FaFileAlt;
    case "Department": return FaBook;
    case "Student": return FaUserGraduate;
    case "Notice": return FaBell;
    default: return FaUniversity;
  }
};

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = (term) => {
    setLoading(true);
    const termLower = term.toLowerCase().trim();
    
    if (!termLower) {
      setResults([]);
      setLoading(false);
      return;
    }

    const matched = allContent.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(termLower);
      const keywordMatch = item.keywords?.some(k => 
        k.includes(termLower) || termLower.includes(k) ||
        k.split(' ').some(word => word.includes(termLower))
      );
      return titleMatch || keywordMatch;
    });

    setResults(matched);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
  };

  const popularSearches = ["Admissions", "Results", "Hostel", "Scholarship", "Notices", "Departments"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">🔍 Search CUSB</h1>
          <p className="text-red-100 text-center mb-8">Find everything you're looking for</p>
          
          <form onSubmit={handleSearch} className="relative">
            <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.02]' : ''}`}>
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full px-6 py-4 pr-14 rounded-2xl text-gray-800 text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400"
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center shadow-lg"
              >
                <FaSearch className="text-xl" />
              </button>
            </div>
          </form>

          {!query && (
            <div className="mt-6 text-center">
              <p className="text-red-200 text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchTerm(term);
                      window.location.href = `/search?q=${term}`;
                    }}
                    className="px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {query && (
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></span>
                  Searching...
                </span>
              ) : (
                <span>{results.length} results found for "<strong>{query}</strong>"</span>
              )}
            </p>
          </div>
        )}

        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result, index) => {
              const Icon = getIcon(result.type);
              return (
                <Link 
                  key={index} 
                  to={result.path}
                  className="block bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{result.type}</p>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Matching: {result.keywords.filter(k => 
                          k.includes(query.toLowerCase()) || query.toLowerCase().includes(k)
                        ).join(", ")}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <FaArrowRight className="text-gray-400 group-hover:text-white transition" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : query && !loading ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-4xl text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No results found</h2>
            <p className="text-gray-500 mb-6">Try different keywords or browse our sections below</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => window.location.href = `/search?q=${term}`}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-sm font-medium transition"
                >
                  Search for "{term}"
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Quick Access
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickCategories.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.path}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all duration-300 text-center">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="text-white text-2xl" />
                      </div>
                      <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition">{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-600 rounded-full"></span>
                Popular Topics
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "B.Tech Admission", "MBA Programme", "Ph.D Registration", "Hostel Allotment",
                  "Fee Structure", "Exam Schedule", "Placement Drive", "Research Projects",
                  "Library Timings", "Sports Events", "Cultural Fest", "NSS Camp",
                  "Scholarship Form", "Merit List", "Counseling Dates", "CUET Score"
                ].map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => window.location.href = `/search?q=${topic}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm transition"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
      <BackToTop />
    </div>
  );
}

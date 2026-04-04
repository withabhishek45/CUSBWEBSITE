import { useState, useEffect } from "react";
import { FaBell, FaCalendar, FaFilePdf, FaSearch, FaNewspaper } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";
import { api } from "../utils/api";

const categories = ["All", "Examination", "Fee", "Hostel", "Workshop", "Placement", "Scholarship", "General", "Event"];

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchNotices() {
      setLoading(true);
      const data = await api.get("/notices");
      setNotices(data || []);
      setLoading(false);
    }
    fetchNotices();
  }, []);

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    const matchesSearch = (notice.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notice.description?.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Notices & Announcements</h1>
          <p className="text-red-100 text-sm sm:text-base">Stay updated with latest notifications from CUSB</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-gray-600 px-2 py-1">
            Showing {filteredNotices.length} notices
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {loading ? (
            [...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          ) : filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="bg-white rounded-xl shadow-sm sm:shadow-md p-4 sm:p-5 hover:shadow-lg transition flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaBell className="text-orange-600 text-lg sm:text-xl" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                      {notice.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{notice.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">{notice.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {notice.date}
                    </span>
                    {notice.link && notice.link !== "#" && (
                      <span className="flex items-center gap-1 text-blue-600 cursor-pointer hover:text-blue-800">
                        <FaFilePdf /> View PDF
                      </span>
                    )}
                  </div>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex-shrink-0">
                  View
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <FaNewspaper className="text-4xl mx-auto mb-3 text-gray-300" />
              <p>No notices found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

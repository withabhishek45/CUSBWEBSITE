import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

const sections = [
  { id: "recent-events", title: "Recent Events", route: "/notices" },
  { id: "upcoming-events", title: "Upcoming Events", route: "/notices" },
  { id: "notices", title: "Notices", route: "/notices" },
];

export default function SectionTabs() {
  const [active, setActive] = useState("recent-events");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [recent, upcoming, notices] = await Promise.all([
        api.get("/events?type=recent"),
        api.get("/events?type=upcoming"),
        api.get("/notices"),
      ]);
      setData({
        recentEvents: recent || [],
        upcomingEvents: upcoming || [],
        notices: notices || []
      });
      setLoading(false);
    }
    fetchData();
  }, []);

  const getItems = () => {
    switch (active) {
      case "recent-events": return data.recentEvents || [];
      case "upcoming-events": return data.upcomingEvents || [];
      case "notices": return data.notices || [];
      default: return [];
    }
  };

  const items = getItems();
  const activeSection = sections.find(s => s.id === active) || sections[0];

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-8 w-1 bg-green-600"></span>
          <h2 className="text-2xl font-bold text-gray-800">Latest Updates</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActive(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                section.id === active
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 hover:bg-blue-50 border border-blue-100"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <p className="text-gray-500">No items found</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {items.slice(0, 4).map((item) => (
                <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image || "https://picsum.photos/seed/default/600/400"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-blue-700 mb-2">{item.subtitle || item.content}</p>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <span>📅</span> {item.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <Link
                to={activeSection.route}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition shadow-lg shadow-blue-200"
              >
                View All {activeSection.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

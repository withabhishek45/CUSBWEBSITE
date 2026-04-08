import { useState, useEffect } from "react";
import { api } from "../utils/api";
import BackToTop from "../components/layout/BackToTop";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await api.get("/news");
        if (data && Array.isArray(data)) {
          setNews(data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredNews = filter === "all" 
    ? news 
    : news.filter(item => item.type === filter);

  const types = ["all", ...new Set(news.map(item => item.type))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">Latest News</h1>
          <p className="text-red-100">Stay updated with CUSB announcements and achievements</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                filter === type
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-600 hover:bg-red-50 border border-red-100"
              }`}
            >
              {type === "all" ? "All News" : type}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-80 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <p className="text-gray-500">No news found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-red-700 text-white text-xs font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {item.content}
                  </p>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    📅 {item.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  );
}

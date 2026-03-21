import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

export default function NewsPreview() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await api.get("/news");
      if (data) setNews(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section className="py-10 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1 bg-red-600"></span>
            <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
          </div>
          <Link to="/news" className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1">
            View All <span>→</span>
          </Link>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-72 bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {news.slice(0, 4).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full mb-2">
                    {item.type}
                  </span>
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{item.content}</p>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <span>📅</span> {item.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch, FaFileAlt, FaBook, FaNewspaper, FaGraduationCap } from "react-icons/fa";
import { MOCK_DEPARTMENTS, MOCK_NOTICES, MOCK_EVENTS } from "../utils/api";
import BackToTop from "../components/layout/BackToTop";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState({ departments: [], notices: [], events: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ departments: [], notices: [], events: [] });
      setLoading(false);
      return;
    }

    const searchQuery = query.toLowerCase();

    const deptResults = MOCK_DEPARTMENTS.filter(d =>
      d.name.toLowerCase().includes(searchQuery) ||
      d.description?.toLowerCase().includes(searchQuery) ||
      d.shortName?.toLowerCase().includes(searchQuery)
    );

    const noticeResults = MOCK_NOTICES.filter(n =>
      n.title.toLowerCase().includes(searchQuery) ||
      n.description?.toLowerCase().includes(searchQuery)
    );

    const eventResults = MOCK_EVENTS.filter(e =>
      e.title.toLowerCase().includes(searchQuery)
    );

    setResults({
      departments: deptResults,
      notices: noticeResults,
      events: eventResults
    });
    setLoading(false);
  }, [query]);

  const totalResults = results.departments.length + results.notices.length + results.events.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Searching...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-2">Search Results</h1>
          <p className="text-red-100">Results for: "{query}"</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-400 text-2xl" />
            <form action="/search" method="get" className="flex-1 flex gap-2">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search departments, notices, events..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                autoFocus
              />
              <button type="submit" className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">
                Search
              </button>
            </form>
          </div>
        </div>

        {!query && (
          <div className="text-center py-12">
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Search CUSB Website</h2>
            <p className="text-gray-500">Enter a keyword to search for departments, notices, events, and more.</p>
          </div>
        )}

        {query && totalResults === 0 && (
          <div className="text-center py-12">
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">No Results Found</h2>
            <p className="text-gray-500">Try different keywords or check your spelling.</p>
          </div>
        )}

        {totalResults > 0 && (
          <div className="mb-6">
            <p className="text-gray-600">Found <strong>{totalResults}</strong> results</p>
          </div>
        )}

        {results.departments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-red-700" /> Departments ({results.departments.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.departments.map((dept) => (
                <Link key={dept.id} to={`/departments/${dept.id}`} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                  <h3 className="font-bold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{dept.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {results.notices.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaNewspaper className="text-red-700" /> Notices ({results.notices.length})
            </h2>
            <div className="space-y-3">
              {results.notices.map((notice) => (
                <Link key={notice.id} to="/notices" className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition block">
                  <h3 className="font-bold text-gray-800 mb-1">{notice.title}</h3>
                  <p className="text-gray-600 text-sm">{notice.description}</p>
                  <span className="text-xs text-gray-500 mt-2 block">{notice.date}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {results.events.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaFileAlt className="text-red-700" /> Events ({results.events.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.events.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{event.title}</h3>
                  <span className="text-xs text-gray-500">{event.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <BackToTop />
    </div>
  );
}

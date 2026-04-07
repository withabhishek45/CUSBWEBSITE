import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import BackToTop from "../components/layout/BackToTop";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.get("/departments");
        if (data && Array.isArray(data)) {
          setDepartments(data);
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredDepts = departments.filter(dept => 
    dept.name?.toLowerCase().includes(search.toLowerCase()) ||
    dept.shortName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">Our Departments</h1>
          <p className="text-red-100">Explore {departments.length} Academic Departments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />
        <p className="text-sm text-gray-600 mt-2">{filteredDepts.length} departments found</p>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-72 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepts.map((dept) => (
              <div key={dept.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={dept.images?.[0] || "https://picsum.photos/seed/dept/800/400"}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {dept.shortName || dept.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dept.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {dept.programs?.slice(0, 3).map((prog, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                        {prog}
                      </span>
                    ))}
                    {dept.programs?.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                        +{dept.programs.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="block w-full text-center px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition font-medium"
                  >
                    View Full Department →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && filteredDepts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No departments found matching "{search}"</p>
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  );
}

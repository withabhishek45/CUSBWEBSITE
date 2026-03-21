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
      const data = await api.get("/departments");
      if (data) setDepartments(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredDepts = departments.filter(dept => 
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Departments</h1>
              <p className="text-gray-600 mt-1">Explore our academic departments</p>
            </div>
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 pb-10">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-48 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepts.map((dept) => (
              <div key={dept.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="text-lg font-bold text-primary-700 mb-2 group-hover:text-primary-800">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dept.programs.map((prog, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && filteredDepts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No departments found matching "{search}"</p>
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../utils/api";
import BackToTop from "../components/layout/BackToTop";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [filteredDepts, setFilteredDepts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type") || "all";

  const filterTypes = [
    { id: "all", label: "All Departments" },
    { id: "ug", label: "Undergraduate (UG)" },
    { id: "pg", label: "Postgraduate (PG)" },
    { id: "phd", label: "Ph.D. & Research" },
  ];

  const titleMap = {
    all: "Our Departments",
    ug: "Undergraduate (UG) Programs",
    pg: "Postgraduate (PG) Programs",
    phd: "Ph.D. & Research Programs",
  };

  const filterDepartments = (depts, type) => {
    if (type === "all") return depts;
    const typeKeywords = {
      ug: ["B.Sc", "B.A", "B.Com", "B.Pharm", "B.P.Ed", "B.Ed", "B.Lib", "UG"],
      pg: ["M.Sc", "M.A", "M.Com", "M.Pharm", "M.P.Ed", "M.Ed", "M.Lib", "MCA", "MBA", "PG"],
      phd: ["Ph.D", "PhD", "Doctoral", "Research"],
    };
    return depts.filter(dept => {
      const programs = dept.programs || [];
      const keywords = typeKeywords[type] || [];
      return programs.some(prog => 
        keywords.some(kw => prog.toLowerCase().includes(kw.toLowerCase()))
      );
    });
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await api.get("/departments");
        console.log("Departments API response:", data);
        if (data && Array.isArray(data)) {
          const sorted = data.sort((a, b) => {
            if (a.id === 'computer-science') return -1;
            if (b.id === 'computer-science') return 1;
            return (a.shortName || a.name).localeCompare(b.shortName || b.name);
          });
          setDepartments(sorted);
          setFilteredDepts(filterDepartments(sorted, typeFilter));
        } else if (data && data.departments) {
          setDepartments(data.departments);
          setFilteredDepts(filterDepartments(data.departments, typeFilter));
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredDepts(filterDepartments(departments, typeFilter));
  }, [typeFilter, departments]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">{titleMap[typeFilter]}</h1>
          <p className="text-red-100">Explore {filteredDepts.length} Academic Departments</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {filterTypes.map((filter) => (
            <Link
              key={filter.id}
              to={filter.id === "all" ? "/departments" : `/departments?type=${filter.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                typeFilter === filter.id
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-600 hover:bg-red-50 border border-red-100"
              }`}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-72 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : filteredDepts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <p className="text-gray-500">No departments found for this program type</p>
            <Link to="/departments" className="text-red-700 hover:underline mt-2 inline-block">
              View All Departments
            </Link>
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
      </main>
      <BackToTop />
    </div>
  );
}

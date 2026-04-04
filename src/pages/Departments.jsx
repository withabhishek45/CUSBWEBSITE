import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import { FaBook, FaFlask, FaCalculator, FaBalanceScale, FaLanguage, FaHistory, FaGraduationCap, FaAtom, FaLaptop, FaChartLine, FaLeaf, FaDna, FaSearch, FaArrowRight } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const iconMap = {
  "agriculture": FaLeaf,
  "biotechnology": FaDna,
  "chemistry": FaFlask,
  "commerce": FaChartLine,
  "computer-science": FaLaptop,
  "economics": FaChartLine,
  "english": FaLanguage,
  "hindi": FaLanguage,
  "history": FaHistory,
  "law": FaBalanceScale,
  "mathematics": FaCalculator,
  "physics": FaAtom,
};

const colorMap = [
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-orange-500 to-red-600",
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600",
  "from-rose-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
  "from-sky-500 to-cyan-600",
  "from-lime-500 to-green-600",
  "from-fuchsia-500 to-purple-600",
];

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const allData = await api.getAll();
      if (allData?.departments) setDepartments(allData.departments);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredDepts = departments.filter(dept => 
    dept.name?.toLowerCase().includes(search.toLowerCase())
  );

  const getIcon = (id) => iconMap[id] || FaBook;

  const getColor = (index) => colorMap[index % colorMap.length];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-4">
              <FaGraduationCap className="text-2xl" />
              <span className="text-sm font-medium">Academic Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Departments</h1>
            <p className="text-red-100 max-w-2xl mx-auto">
              Explore our diverse academic departments offering undergraduate, postgraduate, and doctoral programs
            </p>
          </div>
          
          <div className="max-w-xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-800 shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg -mt-4 mx-4 sm:mx-auto max-w-7xl rounded-xl relative z-10">
        <div className="grid grid-cols-3 gap-4 p-4 text-center">
          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">{departments.length}</p>
            <p className="text-xs sm:text-sm text-gray-600">Departments</p>
          </div>
          <div className="border-x border-gray-200 p-3">
            <p className="text-2xl sm:text-3xl font-bold text-green-600">50+</p>
            <p className="text-xs sm:text-sm text-gray-600">Programs</p>
          </div>
          <div className="p-3">
            <p className="text-2xl sm:text-3xl font-bold text-purple-600">Ph.D</p>
            <p className="text-xs sm:text-sm text-gray-600">Research</p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-56 bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepts.map((dept, index) => {
              const Icon = getIcon(dept.id);
              const colorClass = getColor(index);
              return (
                <div 
                  key={dept.id} 
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className={`h-24 bg-gradient-to-br ${colorClass} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute -bottom-8 left-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-2xl text-gray-700" />
                    </div>
                  </div>
                  
                  <div className="p-5 pt-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {dept.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dept.programs?.map((prog, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/departments/${dept.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Full Details <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {!loading && filteredDepts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No departments found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}

        {!loading && filteredDepts.length > 0 && (
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Research Opportunities</h3>
              <p className="text-blue-100 mb-4">
                Our departments offer Ph.D. programs in collaboration with leading research institutions, providing students with cutting-edge research opportunities.
              </p>
              <Link 
                to="/students" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Explore Research <FaArrowRight />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Industry Partnerships</h3>
              <p className="text-green-100 mb-4">
                Collaborate with top companies for internships, placements, and joint research projects. Our departments maintain strong industry connections.
              </p>
              <Link 
                to="/admissions" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition"
              >
                View Admissions <FaArrowRight />
              </Link>
            </div>
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  );
}

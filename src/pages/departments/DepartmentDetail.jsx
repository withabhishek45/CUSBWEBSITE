import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaLaptop, FaGraduationCap, FaUsers, FaBook, FaAward, FaCalendar, FaDownload, FaEnvelope, FaPhone, FaArrowRight, FaFlask, FaChartLine, FaLanguage, FaHistory, FaBalanceScale, FaCalculator, FaAtom, FaLeaf, FaDna } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";
import { api } from "../../utils/api";

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

const colorMap = {
  "agriculture": "from-emerald-600 to-teal-700",
  "biotechnology": "from-blue-600 to-indigo-700",
  "chemistry": "from-purple-600 to-pink-700",
  "commerce": "from-orange-600 to-red-700",
  "computer-science": "from-cyan-600 to-blue-700",
  "economics": "from-green-600 to-emerald-700",
  "english": "from-rose-600 to-pink-700",
  "hindi": "from-amber-600 to-orange-700",
  "history": "from-violet-600 to-purple-700",
  "law": "from-sky-600 to-cyan-700",
  "mathematics": "from-lime-600 to-green-700",
  "physics": "from-fuchsia-600 to-purple-700",
};

export default function DepartmentDetail() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const allData = await api.getAll();
      if (allData) {
        const dept = allData.departments?.find(d => d.id === id);
        const fac = allData.faculty?.filter(f => f.department === id) || [];
        setDepartment(dept);
        setFaculty(fac);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const Icon = iconMap[id] || FaBook;
  const colorClass = colorMap[id] || "from-blue-600 to-indigo-700";

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading department...</p>
        </div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Department Not Found</h2>
          <Link to="/departments" className="text-blue-600 hover:underline">Back to Departments</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className={`bg-gradient-to-r ${colorClass} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <Icon className="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-200 text-sm mb-1">Department of</p>
              <h1 className="text-4xl font-bold mb-3">{department.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Est. {department.established || 2014}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">HOD: {department.hod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FaCalendar, label: "Time Table", color: "from-blue-500 to-blue-600" },
            { icon: FaDownload, label: "Syllabus", color: "from-purple-500 to-purple-600" },
            { icon: FaUsers, label: "Faculty", color: "from-orange-500 to-orange-600" },
            { icon: FaAward, label: "Achievements", color: "from-green-500 to-green-600" },
          ].map((item, i) => (
            <button key={i} className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-4 text-center hover:shadow-lg transition transform hover:-translate-y-1`}>
              <item.icon className="text-2xl mx-auto mb-2" />
              <p className="font-medium text-sm">{item.label}</p>
            </button>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About Department</h2>
          <p className="text-gray-600 leading-relaxed">{department.description}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-200">{department.vision}</p>
          </section>
          <section className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-green-100">{department.mission}</p>
          </section>
        </div>

        {department.objectives && department.objectives.length > 0 && (
          <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Objectives</h2>
            <ul className="space-y-2">
              {department.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {department.programs.map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-slate-100 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-slate-600" />
                  <h3 className="font-semibold text-gray-800">{prog}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Faculty Members</h2>
          {faculty.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {faculty.map((f) => (
                <div key={f.id} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                  <img 
                    src={f.image} 
                    alt={f.name}
                    className="w-14 h-14 bg-slate-100 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{f.name}</h3>
                    <p className="text-sm text-slate-600">{f.designation}</p>
                    <p className="text-sm text-gray-500">{f.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No faculty information available</p>
          )}
        </section>

        {department.facilities && department.facilities.length > 0 && (
          <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Labs & Facilities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {department.facilities.map((facility, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-slate-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className={`bg-gradient-to-r ${colorMap[id]} rounded-2xl p-6 text-white`}>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><FaEnvelope /><span>{department.email}</span></div>
            <div className="flex items-center gap-3"><FaPhone /><span>{department.phone}</span></div>
          </div>
          <div className="mt-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Apply Now <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

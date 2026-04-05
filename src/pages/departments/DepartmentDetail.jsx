import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  FaArrowLeft, FaGraduationCap, FaUsers, FaBook, FaFlask, FaEnvelope, FaPhone, 
  FaArrowRight, FaFlask as FaLab, FaChartLine, FaLanguage, FaHistory, 
  FaBalanceScale, FaCalculator, FaAtom, FaLeaf, FaDna, FaImages, FaUserGraduate,
  FaFlask as FaScience, FaHandshake, FaCalendar, FaDownload, FaSearch,
  FaAward, FaFilePdf, FaExternalLinkAlt, FaScroll, FaClock, FaChalkboardTeacher
} from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";
import { api } from "../../utils/api";

const iconMap = {
  "agriculture": FaLeaf,
  "biotechnology": FaDna,
  "chemistry": FaFlask,
  "commerce": FaChartLine,
  "computer-science": FaLaptop || FaChalkboardTeacher,
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
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedProgram, setSelectedProgram] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const allData = await api.getAll();
      if (allData) {
        const dept = allData.departments?.find(d => d.id === id);
        const fac = allData.faculty?.filter(f => f.department === id) || [];
        setDepartment(dept);
        setFaculty(fac);
        if (dept?.programs?.[0]) setSelectedProgram(dept.programs[0]);
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

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "programs", label: "Programs & Syllabus" },
    { id: "faculty", label: "Faculty" },
    { id: "facilities", label: "Facilities" },
    { id: "students", label: "Students" },
    { id: "research", label: "Research" },
    { id: "events", label: "Events" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colorClass} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <Icon className="text-6xl" />
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

      {/* Image Gallery Slider */}
      {department.images && department.images.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 -mt-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <DepartmentSlider images={department.images} />
          </div>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Department</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{department.description}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaAward className="text-yellow-400" /> Our Vision
                </h2>
                <p className="text-gray-200 leading-relaxed">{department.vision}</p>
              </section>
              <section className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaAward className="text-yellow-400" /> Our Mission
                </h2>
                <p className="text-green-100 leading-relaxed">{department.mission}</p>
              </section>
            </div>

            {department.objectives && department.objectives.length > 0 && (
              <section className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Objectives</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {department.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-gray-600">{obj}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Programs Offered</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {department.programs.map((prog, i) => (
                  <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="text-2xl text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{prog}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Programs & Syllabus Tab */}
        {activeTab === "programs" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Programs & Syllabus</h2>
              
              {/* Program Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Select Program:</label>
                <div className="flex flex-wrap gap-2">
                  {department.programs.map((prog) => (
                    <button
                      key={prog}
                      onClick={() => setSelectedProgram(prog)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        selectedProgram === prog
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {prog}
                    </button>
                  ))}
                </div>
              </div>

              {/* Syllabus Download */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {selectedProgram} - Syllabus
                    </h3>
                    <p className="text-gray-600">Academic Year 2024-25</p>
                  </div>
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <FaDownload /> Download PDF
                  </a>
                </div>
              </div>

              {/* Syllabus Structure */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((sem) => (
                  <div key={sem} className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-bold text-gray-800 mb-3">Semester {sem}</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2"><FaBook className="text-blue-500" /> Core Course {sem}.1</li>
                      <li className="flex items-center gap-2"><FaBook className="text-blue-500" /> Elective Course {sem}.2</li>
                      <li className="flex items-center gap-2"><FaFlask className="text-green-500" /> Practical / Lab</li>
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Time Table Section */}
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaCalendar className="text-blue-600" /> Class Time Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border p-3 text-left">Day</th>
                      <th className="border p-3 text-left">9:00 - 11:00</th>
                      <th className="border p-3 text-left">11:00 - 13:00</th>
                      <th className="border p-3 text-left">14:00 - 16:00</th>
                      <th className="border p-3 text-left">16:00 - 18:00</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                      <tr key={day} className="hover:bg-gray-50">
                        <td className="border p-3 font-medium bg-gray-100">{day}</td>
                        {[1, 2, 3, 4].map((slot) => (
                          <td key={slot} className="border p-3 text-gray-600">
                            Course {slot}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* Faculty Tab */}
        {activeTab === "faculty" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaUsers className="text-blue-600" /> Faculty Members
              </h2>
              
              {faculty.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {faculty.map((f) => (
                    <div key={f.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                      <div className="flex items-start gap-4">
                        <img 
                          src={f.image || "https://via.placeholder.com/100"}
                          alt={f.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-lg">{f.name}</h3>
                          <p className="text-blue-600 font-medium">{f.designation}</p>
                          <p className="text-gray-500 text-sm mt-1">{f.specialization}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Education:</span> {f.education}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Experience:</span> {f.experience}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Publications:</span> {f.publications}
                        </p>
                        <a href={`mailto:${f.email}`} className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                          <FaEnvelope /> {f.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Faculty information coming soon...</p>
              )}
            </section>
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === "facilities" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaLab className="text-blue-600" /> Labs & Facilities
              </h2>
              
              {department.facilities && department.facilities.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {department.facilities.map((facility, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 flex items-center gap-4 border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="text-xl text-white" />
                      </div>
                      <span className="font-medium text-gray-800">{facility}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Facility information coming soon...</p>
              )}
            </section>

            {department.infrastructure && (
              <section className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Infrastructure</h2>
                <p className="text-gray-600 leading-relaxed">{department.infrastructure}</p>
              </section>
            )}
          </div>
        )}

        {/* Students Tab */}
        {activeTab === "students" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaUserGraduate className="text-blue-600" /> Student Information
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-4xl font-bold mb-2">{department.studentCount || 150}</h3>
                  <p className="text-blue-100">Total Students</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-4xl font-bold mb-2">{department.placementRate || 85}%</h3>
                  <p className="text-green-100">Placement Rate</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                  <h3 className="text-4xl font-bold mb-2">{department.researchPapers || 50}+</h3>
                  <p className="text-purple-100">Research Papers</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Student Activities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2"><FaAward className="text-yellow-500" /> National Level Competitions</li>
                    <li className="flex items-center gap-2"><FaAward className="text-yellow-500" /> Technical Fests</li>
                    <li className="flex items-center gap-2"><FaAward className="text-yellow-500" /> Cultural Events</li>
                    <li className="flex items-center gap-2"><FaAward className="text-yellow-500" /> Sports Activities</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Achievements</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2"><FaTrophy className="text-yellow-500" /> University Rank Holders</li>
                    <li className="flex items-center gap-2"><FaTrophy className="text-yellow-500" /> GATE/NET Qualifiers</li>
                    <li className="flex items-center gap-2"><FaTrophy className="text-yellow-500" /> Innovation Awards</li>
                    <li className="flex items-center gap-2"><FaTrophy className="text-yellow-500" /> Sports Medals</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === "research" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaScience className="text-blue-600" /> Research & Collaboration
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaSearch className="text-blue-600" /> Research Areas
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fundamental Research</li>
                    <li>• Applied Research</li>
                    <li>• Interdisciplinary Studies</li>
                    <li>• Industry Collaborations</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaHandshake className="text-green-600" /> Collaborations
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• IIT Patna</li>
                    <li>• Research Institutions</li>
                    <li>• Industry Partners</li>
                    <li>• International Universities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">Funded Projects</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Government Funded Projects</span>
                    <span className="font-bold text-blue-600">{department.fundedProjects || 15}+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Research Grants</span>
                    <span className="font-bold text-green-600">₹{department.researchGrants || 50}+ Lakhs</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaCalendar className="text-blue-600" /> Department Events
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaClock className="text-green-600" /> Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Workshop on Research Methodology", date: "15 April 2026" },
                      { title: "Annual Department Fest", date: "20 April 2026" },
                      { title: "Industry Visit", date: "25 April 2026" },
                    ].map((event, i) => (
                      <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                        <h4 className="font-semibold text-gray-800">{event.title}</h4>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                          <FaCalendar /> {event.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaAward className="text-purple-600" /> Past Achievements
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "National Conference", date: "5 March 2026" },
                      { title: "Student Award Ceremony", date: "27 February 2026" },
                      { title: "Research Paper Publication", date: "20 February 2026" },
                    ].map((event, i) => (
                      <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                        <h4 className="font-semibold text-gray-800">{event.title}</h4>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                          <FaCalendar /> {event.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2"><FaEnvelope /> {department.email}</span>
                <span className="flex items-center gap-2"><FaPhone /> {department.phone}</span>
              </div>
            </div>
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Apply Now <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

// Department Image Slider Component
function DepartmentSlider({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <img
        src={images[current]}
        alt={`Gallery ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

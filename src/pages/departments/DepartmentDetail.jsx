import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../utils/api";
import BackToTop from "../../components/layout/BackToTop";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs & Syllabus" },
  { id: "faculty", label: "Faculty" },
  { id: "facilities", label: "Facilities" },
];

export default function DepartmentDetail() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await api.get(`/departments/${id}`);
        console.log("Department API response:", data);
        if (data && data.id) {
          setDepartment(data);
        }
      } catch (error) {
        console.error('Error fetching department:', error);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-700"></div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Not Found</h2>
        <p className="text-gray-600 mb-4">ID: {id}</p>
        <Link to="/departments" className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800">
          ← Back to Departments
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={department.images?.[0] || "https://picsum.photos/seed/dept/1200/400"}
          alt={department.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-8 w-full">
            <Link to="/departments" className="text-white/80 hover:text-white text-sm mb-2 inline-block">
              ← Back to Departments
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{department.name}</h1>
            <p className="text-white/80 mt-1">Established: {department.established}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                  activeTab === tab.id
                    ? "border-red-700 text-red-700"
                    : "border-transparent text-gray-600 hover:text-red-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">About the Department</h2>
              <p className="text-gray-600 leading-relaxed">{department.description}</p>
            </section>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-red-700">{department.studentCount || 0}+</div>
                <div className="text-gray-600 text-sm">Students</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-red-700">{department.placementRate || 0}%</div>
                <div className="text-gray-600 text-sm">Placement</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-red-700">{department.researchPapers || 0}</div>
                <div className="text-gray-600 text-sm">Research Papers</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-red-700">{department.fundedProjects || 0}</div>
                <div className="text-gray-600 text-sm">Funded Projects</div>
              </div>
            </div>

            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-700 mb-2">Vision</h3>
                  <p className="text-gray-600">{department.vision}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-2">Mission</h3>
                  <p className="text-gray-600">{department.mission}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href={`mailto:${department.email}`} className="text-red-700 hover:underline">{department.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <span className="text-gray-800">{department.phone}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "programs" && (
          <div className="space-y-6">
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h2>
              <div className="flex flex-wrap gap-2">
                {department.programs?.map((prog, i) => (
                  <span key={i} className="px-4 py-2 bg-red-100 text-red-800 rounded-full font-medium">
                    {prog}
                  </span>
                ))}
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Syllabus</h2>
              <div className="space-y-4">
                {department.programs?.map((prog, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">{prog}</span>
                    <a 
                      href={`https://www.cusb.ac.in/images/dept/computer_science/Syllabus/Msc_cs_syllabus.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition flex items-center gap-2"
                    >
                      📥 Download Syllabus
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "faculty" && (
          <div className="space-y-6">
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Faculty Members</h2>
              {department.faculty && department.faculty.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {department.faculty.map((member, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                      <img
                        src={member.image || "https://picsum.photos/seed/faculty/200/200"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
                      />
                      <h3 className="font-bold text-gray-800">{member.name}</h3>
                      <p className="text-red-700 text-sm font-medium">{member.designation}</p>
                      <p className="text-gray-600 text-xs mt-1">{member.specialization}</p>
                      <div className="mt-4 space-y-1 text-sm text-gray-600">
                        <p>📧 {member.email}</p>
                        <p>📞 {member.phone}</p>
                        <p>📚 {member.publications} Publications</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center">Faculty details coming soon</p>
              )}
            </section>
          </div>
        )}

        {activeTab === "facilities" && (
          <div className="space-y-6">
            <section className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Laboratories & Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {department.facilities?.map((facility, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                    <span className="text-2xl">🔬</span>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  );
}

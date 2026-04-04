import { Link } from "react-router-dom";
import { FaArrowLeft, FaFlask, FaGraduationCap, FaUsers, FaBook, FaAward, FaCalendar, FaDownload, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";

export default function Chemistry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaFlask className="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-blue-200 text-sm mb-1">Department of</p>
              <h1 className="text-4xl font-bold mb-3">Chemistry</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Est. 2014</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intake: 60</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">HOD: Dr. Suresh Patel</span>
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
            <a key={i} href="#" className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-4 text-center hover:shadow-lg transition transform hover:-translate-y-1`}>
              <item.icon className="text-2xl mx-auto mb-2" />
              <p className="font-medium text-sm">{item.label}</p>
            </a>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About Department</h2>
          <p className="text-gray-600 leading-relaxed">
            The Department of Chemistry provides comprehensive education in organic, inorganic, physical, and analytical chemistry. Our curriculum emphasizes both theoretical concepts and laboratory skills, preparing students for careers in research, industry, and academia.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-blue-100">To excel in chemical sciences education and research, contributing to scientific knowledge and societal benefit.</p>
          </section>
          <section className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-green-100">To nurture chemically literate professionals through innovative teaching, research, and industry collaboration.</p>
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "B.Sc. (Hons) Chemistry", duration: "3 Years" },
              { name: "M.Sc. Chemistry", duration: "2 Years" },
              { name: "Ph.D. Chemistry", duration: "3-5 Years" },
            ].map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-blue-600" />
                  <h3 className="font-semibold text-gray-800">{prog.name}</h3>
                </div>
                <p className="text-sm text-gray-500">Duration: {prog.duration}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Class Time Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Day</th>
                  <th className="border p-3 text-left">9:00 - 11:00</th>
                  <th className="border p-3 text-left">11:00 - 1:00</th>
                  <th className="border p-3 text-left">2:00 - 4:00</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: "Monday", m1: "Organic Chemistry", m2: "Physical Chemistry", eve: "Lab" },
                  { day: "Tuesday", m1: "Inorganic Chemistry", m2: "Analytical", eve: "Practical" },
                  { day: "Wednesday", m1: "Physical Chemistry", m2: "Organic Chemistry", eve: "Lab Work" },
                  { day: "Thursday", m1: "Organic Chemistry", m2: "Inorganic Chemistry", eve: "Seminar" },
                  { day: "Friday", m1: "Analytical Chemistry", m2: "Physical Chemistry", eve: "Project" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border p-3 font-medium">{row.day}</td>
                    <td className="border p-3 text-gray-600">{row.m1}</td>
                    <td className="border p-3 text-gray-600">{row.m2}</td>
                    <td className="border p-3 text-gray-600">{row.eve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Faculty Members</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Dr. Suresh Patel", designation: "Professor & Head", spec: "Organic Chemistry" },
              { name: "Dr. Kavita Desai", designation: "Associate Professor", spec: "Inorganic Chemistry" },
              { name: "Dr. Arun Joshi", designation: "Assistant Professor", spec: "Physical Chemistry" },
              { name: "Dr. Nisha Kumari", designation: "Assistant Professor", spec: "Analytical Chemistry" },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{f.name}</h3>
                  <p className="text-sm text-blue-600">{f.designation}</p>
                  <p className="text-sm text-gray-500">{f.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Labs & Facilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Organic Chemistry Lab", "Inorganic Chemistry Lab", "Physical Chemistry Lab", "Instrumentation Room", "Spectroscopy Lab", "Research Lab"].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaFlask className="text-blue-600" />
                </div>
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><FaEnvelope /><span>chemistry@cusb.ac.in</span></div>
            <div className="flex items-center gap-3"><FaPhone /><span>+91-631-2229503</span></div>
          </div>
          <div className="mt-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Apply Now <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

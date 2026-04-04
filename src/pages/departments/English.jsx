import { Link } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaGraduationCap, FaUsers, FaBook, FaAward, FaCalendar, FaDownload, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";

export default function English() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaBookOpen className="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-indigo-200 text-sm mb-1">Department of</p>
              <h1 className="text-4xl font-bold mb-3">English</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Est. 2014</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intake: 60</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">HOD: Dr. Priya Menon</span>
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
            The Department of English focuses on literature, linguistics, communication skills, and creative writing. Our programs enhance language proficiency and critical thinking with state-of-the-art language labs.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "B.A. (Hons) English", duration: "3 Years" },
              { name: "M.A. English", duration: "2 Years" },
              { name: "Ph.D. English", duration: "3-5 Years" },
            ].map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-indigo-50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-indigo-600" />
                  <h3 className="font-semibold text-gray-800">{prog.name}</h3>
                </div>
                <p className="text-sm text-gray-500">Duration: {prog.duration}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Faculty Members</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Dr. Priya Menon", designation: "Professor & Head", spec: "Literature" },
              { name: "Dr. James Cooper", designation: "Associate Professor", spec: "Linguistics" },
              { name: "Dr. Sushmita Dey", designation: "Assistant Professor", spec: "Creative Writing" },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{f.name}</h3>
                  <p className="text-sm text-indigo-600">{f.designation}</p>
                  <p className="text-sm text-gray-500">{f.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><FaEnvelope /><span>english@cusb.ac.in</span></div>
            <div className="flex items-center gap-3"><FaPhone /><span>+91-631-2229507</span></div>
          </div>
          <div className="mt-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
              Apply Now <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

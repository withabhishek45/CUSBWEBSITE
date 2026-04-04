import { Link } from "react-router-dom";
import { FaArrowLeft, FaLaptop, FaGraduationCap, FaUsers, FaBook, FaAward, FaCalendar, FaDownload, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";

export default function ComputerScience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaLaptop className="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm mb-1">Department of</p>
              <h1 className="text-4xl font-bold mb-3">Computer Science</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Est. 2014</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intake: 120</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">HOD: Dr. Naveen Gupta</span>
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
            The Department of Computer Science offers comprehensive programs covering programming, algorithms, AI, data science, software engineering, and cybersecurity. Our curriculum meets industry standards with state-of-the-art laboratories and collaborations with tech giants.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-200">To produce technically competent and ethically responsible computer professionals.</p>
          </section>
          <section className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-green-100">To provide world-class education in computing through innovative teaching and research.</p>
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "B.Sc. (Hons) Computer Science", duration: "3 Years" },
              { name: "BCA", duration: "3 Years" },
              { name: "M.Sc. Computer Science", duration: "2 Years" },
              { name: "MCA", duration: "3 Years" },
              { name: "Ph.D. Computer Science", duration: "3-5 Years" },
            ].map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-slate-100 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-slate-600" />
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
                  { day: "Monday", m1: "Data Structures", m2: "Algorithms", eve: "Lab" },
                  { day: "Tuesday", m1: "DBMS", m2: "TOC", eve: "Programming Lab" },
                  { day: "Wednesday", m1: "OS", m2: "Networks", eve: "Project Lab" },
                  { day: "Thursday", m1: "AI/ML", m2: "Web Dev", eve: "Seminar" },
                  { day: "Friday", m1: "Software Eng", m2: "Cryptography", eve: "Coding Practice" },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Dr. Naveen Gupta", designation: "Professor & Head", spec: "Machine Learning" },
              { name: "Dr. Deepika Rawat", designation: "Associate Professor", spec: "Data Science" },
              { name: "Dr. Saurabh Mishra", designation: "Assistant Professor", spec: "Algorithms" },
              { name: "Dr. Ankit Kumar", designation: "Assistant Professor", spec: "Cybersecurity" },
              { name: "Dr. Richa Singh", designation: "Assistant Professor", spec: "Web Technologies" },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-slate-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{f.name}</h3>
                  <p className="text-sm text-slate-600">{f.designation}</p>
                  <p className="text-sm text-gray-500">{f.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Labs & Facilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Computer Labs (200+ systems)", "High-Speed Internet", "AI/ML Lab", "Cybersecurity Lab", "Project Lab", "Server Room"].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <FaLaptop className="text-slate-600" />
                </div>
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><FaEnvelope /><span>cs@cusb.ac.in</span></div>
            <div className="flex items-center gap-3"><FaPhone /><span>+91-631-2229505</span></div>
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

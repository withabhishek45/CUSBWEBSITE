import { Link } from "react-router-dom";
import { FaArrowLeft, FaDna, FaGraduationCap, FaUsers, FaBook, FaFlask, FaAward, FaCalendar, FaDownload, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";

export default function Biotechnology() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaDna className="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-purple-200 text-sm mb-1">Department of</p>
              <h1 className="text-4xl font-bold mb-3">Biotechnology</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Est. 2016</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intake: 40</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">HOD: Dr. Anjali Sharma</span>
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
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
            About Department
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Department of Biotechnology offers comprehensive programs in molecular biology, genetics, industrial biotechnology, and bioinformatics. Students gain expertise in cutting-edge biotechnological research with state-of-the-art laboratory facilities and collaborations with research institutions.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-purple-100">To be a leading department in biotechnology education and research, fostering innovation and entrepreneurship.</p>
          </section>
          <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-blue-100">To provide interdisciplinary training in biotechnology and produce graduates equipped for careers in research, industry, and healthcare.</p>
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
            Programs Offered
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "B.Sc. (Hons) Biotechnology", duration: "3 Years" },
              { name: "M.Sc. Biotechnology", duration: "2 Years" },
              { name: "M.Sc. Bioinformatics", duration: "2 Years" },
              { name: "Ph.D. Biotechnology", duration: "3-5 Years" },
            ].map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-purple-50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-purple-600" />
                  <h3 className="font-semibold text-gray-800">{prog.name}</h3>
                </div>
                <p className="text-sm text-gray-500">Duration: {prog.duration}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            Class Time Table
          </h2>
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
                  { day: "Monday", m1: "Molecular Biology", m2: "Genetics", eve: "Lab" },
                  { day: "Tuesday", m1: "Biochemistry", m2: "Microbiology", eve: "Practical" },
                  { day: "Wednesday", m1: "Cell Biology", m2: "Bioinformatics", eve: "Lab Work" },
                  { day: "Thursday", m1: "Genetics", m2: "Immunology", eve: "Seminar" },
                  { day: "Friday", m1: "Biochemistry", m2: "Molecular Biology", eve: "Project" },
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
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-600 rounded-full"></span>
            Faculty Members
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Dr. Anjali Sharma", designation: "Professor & Head", specialization: "Molecular Biology", email: "anjali@cusb.ac.in" },
              { name: "Dr. Vikram Singh", designation: "Associate Professor", specialization: "Genetics", email: "vikram@cusb.ac.in" },
              { name: "Dr. Meera Patel", designation: "Assistant Professor", specialization: "Microbiology", email: "meera@cusb.ac.in" },
              { name: "Dr. Rohit Gupta", designation: "Assistant Professor", specialization: "Bioinformatics", email: "rohit@cusb.ac.in" },
            ].map((faculty, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-purple-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{faculty.name}</h3>
                  <p className="text-sm text-purple-600">{faculty.designation}</p>
                  <p className="text-sm text-gray-500 mt-1">Specialization: {faculty.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-teal-600 rounded-full"></span>
            Labs & Facilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Molecular Biology Lab", "Cell Culture Lab", "Bioinformatics Center", "Fermentation Lab", "Research Lab", "Sequencing Facility"].map((facility, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaFlask className="text-purple-600" />
                </div>
                <span className="text-gray-700 text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Contact Department</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><FaEnvelope className="text-xl" /><span>biotechnology@cusb.ac.in</span></div>
            <div className="flex items-center gap-3"><FaPhone className="text-xl" /><span>+91-631-2229502</span></div>
          </div>
          <div className="mt-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition">
              Apply Now <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

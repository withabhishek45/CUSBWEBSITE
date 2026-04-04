import { Link } from "react-router-dom";
import { FaArrowLeft, FaLeaf, FaGraduationCap, FaUsers, FaBook, FaFlask, FaAward, FaCalendar, FaDownload, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";

export default function Agriculture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/departments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <FaArrowLeft /> Back to Departments
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <FaLeaf className="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-emerald-200 text-sm mb-1">Department of</p>
              <h1 className="text-4xl font-bold mb-3">Agriculture</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Est. 2015</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intake: 60</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">HOD: Dr. Rajesh Kumar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FaCalendar, label: "Time Table", color: "from-blue-500 to-blue-600" },
            { icon: FaDownload, label: "Syllabus", color: "from-purple-500 to-purple-600" },
            { icon: FaBook, label: "Faculty", color: "from-orange-500 to-orange-600" },
            { icon: FaAward, label: "Achievements", color: "from-green-500 to-green-600" },
          ].map((item, i) => (
            <a key={i} href="#" className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-4 text-center hover:shadow-lg transition transform hover:-translate-y-1`}>
              <item.icon className="text-2xl mx-auto mb-2" />
              <p className="font-medium text-sm">{item.label}</p>
            </a>
          ))}
        </div>

        {/* About */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
            About Department
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Department of Agriculture was established in 2015 with a vision to produce skilled agricultural professionals. The department focuses on modern agricultural practices, agronomy, horticulture, soil science, plant pathology, and sustainable farming techniques. Our programs combine theoretical knowledge with practical field experience, preparing students for careers in agriculture, research, and agribusiness.
          </p>
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-emerald-100">
              To become a center of excellence in agricultural education and research, contributing to sustainable agriculture and rural development.
            </p>
          </section>
          <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-blue-100">
              To produce skilled agricultural professionals through quality education, research, and extension activities that address farmers' challenges and promote food security.
            </p>
          </section>
        </div>

        {/* Programs */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
            Programs Offered
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "B.Sc. (Hons) Agriculture", duration: "4 Years", type: "Undergraduate" },
              { name: "M.Sc. Agronomy", duration: "2 Years", type: "Postgraduate" },
              { name: "M.Sc. Horticulture", duration: "2 Years", type: "Postgraduate" },
              { name: "Ph.D. Agriculture", duration: "3-5 Years", type: "Doctoral" },
            ].map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-emerald-50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-emerald-600" />
                  <h3 className="font-semibold text-gray-800">{prog.name}</h3>
                </div>
                <div className="flex gap-3 text-sm text-gray-500">
                  <span>Duration: {prog.duration}</span>
                  <span>•</span>
                  <span>{prog.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Time Table */}
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
                  { day: "Monday", m1: "Agronomy", m2: "Soil Science", eve: "Practical" },
                  { day: "Tuesday", m1: "Horticulture", m2: "Plant Path.", eve: "Lab Work" },
                  { day: "Wednesday", m1: "Agronomy", m2: "Entomology", eve: "Field Visit" },
                  { day: "Thursday", m1: "Soil Science", m2: "Agri Econ", eve: "Practical" },
                  { day: "Friday", m1: "Horticulture", m2: "Genetics", eve: "Seminar" },
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

        {/* Faculty */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-600 rounded-full"></span>
            Faculty Members
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Dr. Rajesh Kumar", designation: "Professor & Head", specialization: "Agronomy, Soil Science", email: "rajesh@cusb.ac.in" },
              { name: "Dr. Priya Singh", designation: "Associate Professor", specialization: "Plant Pathology", email: "priya@cusb.ac.in" },
              { name: "Dr. Amit Verma", designation: "Assistant Professor", specialization: "Horticulture", email: "amit@cusb.ac.in" },
              { name: "Dr. Sneha Yadav", designation: "Assistant Professor", specialization: "Genetics & Plant Breeding", email: "sneha@cusb.ac.in" },
            ].map((faculty, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-emerald-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{faculty.name}</h3>
                  <p className="text-sm text-emerald-600">{faculty.designation}</p>
                  <p className="text-sm text-gray-500 mt-1">Specialization: {faculty.specialization}</p>
                  <p className="text-sm text-gray-500">{faculty.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Syllabus */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
            Syllabus
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["B.Sc Agriculture 1st Year", "B.Sc Agriculture 2nd Year", "B.Sc Agriculture 3rd Year", "B.Sc Agriculture 4th Year"].map((syl, i) => (
              <a key={i} href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
                <div className="flex items-center gap-3">
                  <FaDownload className="text-emerald-600" />
                  <span className="text-gray-700 text-sm">{syl}</span>
                </div>
                <FaArrowRight className="text-gray-400" />
              </a>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-teal-600 rounded-full"></span>
            Labs & Facilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Smart Greenhouse", "Agronomy Lab", "Soil Testing Lab", "Plant Pathology Lab", "Farm Museum", "Research Farm (10 acres)"].map((facility, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FaFlask className="text-emerald-600" />
                </div>
                <span className="text-gray-700 text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
            Research Areas
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Sustainable Agriculture", "Organic Farming", "Crop Improvement", "Soil Health Management", "Pest Management", "Horticultural Crops", "Agricultural Economics", "Farm Machinery"].map((area, i) => (
              <span key={i} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm">{area}</span>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
            Achievements & Highlights
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "ICAR Affiliation", desc: "Programs approved by Indian Council of Agricultural Research" },
              { title: "Scholarship Programs", desc: "Merit-based scholarships for deserving students" },
              { title: "Industry Collaborations", desc: "Tie-ups with leading agro-companies for training" },
              { title: "Research Publications", desc: "50+ publications in national/international journals" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
                <FaAward className="text-yellow-600 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Contact Department</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <span>agriculture@cusb.ac.in</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <span>+91-631-2229501</span>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition">
              Apply Now <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

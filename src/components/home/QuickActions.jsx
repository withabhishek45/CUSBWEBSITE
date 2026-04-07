import { Link } from "react-router-dom";
import { FaGraduationCap, FaBook, FaBullhorn, FaUserGraduate, FaPhoneAlt, FaUniversity, FaCalendar, FaFileAlt, FaHome, FaBookReader } from "react-icons/fa";

const quickActions = [
  { icon: FaGraduationCap, title: "Admissions", desc: "Apply for 2026-27", path: "/admissions", color: "from-blue-500 to-blue-700", bg: "bg-blue-50", text: "text-blue-600" },
  { icon: FaBook, title: "Programs", desc: "UG, PG, PhD Courses", path: "/departments", color: "from-green-500 to-green-700", bg: "bg-green-50", text: "text-green-600" },
  { icon: FaBullhorn, title: "Notices", desc: "Latest announcements", path: "/notices", color: "from-orange-500 to-orange-700", bg: "bg-orange-50", text: "text-orange-600" },
  { icon: FaUserGraduate, title: "Students", desc: "Student portal", path: "/students", color: "from-purple-500 to-purple-700", bg: "bg-purple-50", text: "text-purple-600" },
  { icon: FaPhoneAlt, title: "Contact", desc: "Get in touch", path: "/contact", color: "from-teal-500 to-teal-700", bg: "bg-teal-50", text: "text-teal-600" },
  { icon: FaUniversity, title: "Campus", desc: "Explore campus", path: "/about", color: "from-pink-500 to-pink-700", bg: "bg-pink-50", text: "text-pink-600" },
  { icon: FaCalendar, title: "Events", desc: "Upcoming events", path: "/notices", color: "from-indigo-500 to-indigo-700", bg: "bg-indigo-50", text: "text-indigo-600" },
  { icon: FaHome, title: "Hostel", desc: "Hostel facilities", path: "/students", color: "from-cyan-500 to-cyan-700", bg: "bg-cyan-50", text: "text-cyan-600" },
  { icon: FaFileAlt, title: "Downloads", desc: "Forms & documents", path: "/downloads", color: "from-yellow-500 to-yellow-700", bg: "bg-yellow-50", text: "text-yellow-600" },
  { icon: FaBookReader, title: "Central Library", desc: "Library & resources", path: "/central-library", color: "from-amber-500 to-amber-700", bg: "bg-amber-50", text: "text-amber-600" },
];

export default function QuickActions() {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Quick Links</h2>
          <p className="text-gray-500">Quick access to important sections</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.path + index}
              to={action.path}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100">
                <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-gray-900">
                  {action.title}
                </h3>
                <p className={`text-xs ${action.text}`}>
                  {action.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

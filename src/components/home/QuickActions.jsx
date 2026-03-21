import { Link } from "react-router-dom";
import { FaGraduationCap, FaBook, FaBullhorn, FaUserGraduate, FaPhoneAlt, FaUniversity } from "react-icons/fa";

const quickActions = [
  { icon: FaGraduationCap, title: "Admissions", desc: "Apply for 2026-27", path: "/admissions", color: "from-blue-500 to-blue-700", bg: "bg-blue-50", text: "text-blue-600" },
  { icon: FaBook, title: "Programs", desc: "UG, PG, PhD Courses", path: "/departments", color: "from-green-500 to-green-700", bg: "bg-green-50", text: "text-green-600" },
  { icon: FaBullhorn, title: "Notices", desc: "Latest announcements", path: "/notices", color: "from-orange-500 to-orange-700", bg: "bg-orange-50", text: "text-orange-600" },
  { icon: FaUserGraduate, title: "Students", desc: "Student portal", path: "/students", color: "from-purple-500 to-purple-700", bg: "bg-purple-50", text: "text-purple-600" },
  { icon: FaPhoneAlt, title: "Contact", desc: "Get in touch", path: "/contact", color: "from-teal-500 to-teal-700", bg: "bg-teal-50", text: "text-teal-600" },
  { icon: FaUniversity, title: "Campus", desc: "Explore facilities", path: "/visitors", color: "from-pink-500 to-pink-700", bg: "bg-pink-50", text: "text-pink-600" },
];

export default function QuickActions() {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">I Want To...</h2>
          <p className="text-gray-500">Quick access to important sections</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={action.path}
              to={action.path}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100 overflow-hidden">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${action.color}`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="text-3xl text-white" />
                </div>
                
                {/* Text */}
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1 group-hover:text-gray-900 transition-colors">
                  {action.title}
                </h3>
                <p className={`text-xs sm:text-sm ${action.text}`}>
                  {action.desc}
                </p>
                
                {/* Hover arrow */}
                <div className="mt-3 flex justify-center">
                  <span className="text-gray-300 group-hover:text-gray-400 transform group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

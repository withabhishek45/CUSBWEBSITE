import { FaUniversity, FaBook, FaUsers, FaLaptop, FaBuilding, FaTree, FaHospital, FaBus, FaWifi, FaPlayground, FaAward } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const stats = [
  { icon: FaUniversity, number: "300", label: "Acres Campus" },
  { icon: FaBook, number: "26", label: "Departments" },
  { icon: FaUsers, number: "4100+", label: "Students" },
  { icon: FaAward, number: "50+", label: "Courses" },
];

const campusFeatures = [
  { icon: FaBuilding, title: "Academic Blocks", desc: "Modern classrooms with smart boards" },
  { icon: FaLaptop, title: "Computer Labs", desc: "500+ systems with latest software" },
  { icon: FaWifi, title: "Campus WiFi", desc: "High-speed internet across campus" },
  { icon: FaHospital, title: "Health Center", desc: "24/7 medical facility" },
  { icon: FaBus, title: "Transport", desc: "Bus service for students & staff" },
  { icon: FaPlayground, title: "Sports Complex", desc: "Multi-sport facilities" },
];

const buildings = [
  { name: "Administrative Block", desc: "VC Office, Registrar, Finance" },
  { name: "Academic Block A", desc: "Science Departments" },
  { name: "Academic Block B", desc: "Arts & Commerce Departments" },
  { name: "Library Building", desc: "Central Library with 50,000+ books" },
  { name: "Science Complex", desc: "Labs for Physics, Chemistry, Biology" },
  { name: "Computer Center", desc: "Programming labs, Server room" },
  { name: "Auditorium", desc: "1000+ seating capacity" },
  { name: "Guest House", desc: "Visitor accommodation" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=600",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
  "https://images.unsplash.com/photo-1627556704290-2c1e77b3891e?w=600",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About CUSB Campus</h1>
          <p className="text-red-100">Central University of South Bihar, Gaya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <stat.icon className="text-4xl text-red-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About the University</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>Central University of South Bihar (CUSB)</strong> was established under the Central Universities Act, 2009. The university is located on a sprawling <strong>300 acres</strong> campus near Gaya, Bihar.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The campus provides world-class infrastructure for academic, research, and extracurricular activities. It features modern classrooms, well-equipped laboratories, a central library, hostels, sports facilities, and a health center.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The university offers undergraduate, postgraduate, and doctoral programs across various disciplines including Sciences, Arts, Commerce, Law, and Technology. CUSB is committed to excellence in education and research.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Campus Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {campusFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
              <feature.icon className="text-3xl text-red-700 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Buildings & Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {buildings.map((building, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800 mb-1">{building.name}</h3>
              <p className="text-sm text-gray-500">{building.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Campus Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`Campus ${index + 1}`} className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition" />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Location</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                Central University of South Bihar<br />
                NH-120, Gaya-Panchanpur Road<br />
                Gaya - 824236, Bihar, India
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How to Reach</h3>
              <p className="text-gray-600">
                <strong>By Air:</strong> Nearest airport - Gaya Airport (10 km)<br />
                <strong>By Rail:</strong> Gaya Junction (5 km from campus)<br />
                <strong>By Road:</strong> NH-120, well connected by bus
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

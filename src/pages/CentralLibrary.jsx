import { FaBook, FaLaptop, FaDatabase, FaWifi, FaClock, FaMapMarker, FaUserGraduate, FaSearch, FaPrint, FaBookOpen } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const libraryStats = [
  { icon: FaBook, number: "50,000+", label: "Books" },
  { icon: FaDatabase, number: "10,000+", label: "E-Journals" },
  { icon: FaLaptop, number: "100+", label: "Computer Terminals" },
  { icon: FaUserGraduate, number: "24/7", label: "Digital Access" },
];

const sections = [
  {
    title: "Digital Resources",
    icon: FaDatabase,
    items: [
      "INFLIBNET / Shodhgangotri",
      "N-LIST / N-LIST J-Gate",
      "E-Shodh Sindhu",
      "Web of Science",
      "SCOPUS",
      "JSTOR",
      "DELNET",
      "KR Shiksha Portal",
    ]
  },
  {
    title: "Reading Sections",
    icon: FaBookOpen,
    items: [
      "General Reading Hall (Ground Floor)",
      "Reference Section (First Floor)",
      "Periodical Section",
      "Thesis/Dissertation Section",
      "Competitive Exam Section",
      "News Paper Reading Area",
      "Audio-Visual Section",
    ]
  },
  {
    title: "Facilities",
    icon: FaWifi,
    items: [
      "24/7 Wi-Fi Access",
      "Computer Lab with 100+ terminals",
      "Online Catalog (OPAC)",
      "Digital Library Section",
      "Reprographic Services",
      "Print & Scan Facilities",
      "Group Discussion Room",
      "Individual Study Carrels",
    ]
  },
  {
    title: "Timings",
    icon: FaClock,
    items: [
      "Monday to Saturday: 8:00 AM - 10:00 PM",
      "Sunday: 10:00 AM - 5:00 PM",
      "Examination Days: 8:00 AM - Midnight",
      "Digital Library: 24/7 Access",
      "Issue/Return: 9:00 AM - 5:00 PM",
    ]
  },
];

const collection = [
  "Books (Print & Electronic)",
  "Journals (Print & Online)",
  "Theses & Dissertations",
  "Newspapers & Magazines",
  "CDs/DVDs",
  "Project Reports",
  "Conference Proceedings",
  "Bound Volumes of Journals",
];

const services = [
  { name: "Book Lending", desc: "Issue & return of books" },
  { name: "Reference Service", desc: "Research assistance" },
  { name: "Inter Library Loan", desc: "Resource sharing" },
  { name: "E-Resource Access", desc: "Online database access" },
  { name: "Document Delivery", desc: "Article copies" },
  { name: "Plagiarism Check", desc: "Turnitin access" },
];

export default function CentralLibrary() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">Central Library</h1>
          <p className="text-red-100">Knowledge Resource Center - Central University of South Bihar</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {libraryStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <stat.icon className="text-4xl text-red-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaSearch className="text-red-700" /> Search Library Catalog
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by title, author, ISBN..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">
                Search
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Access OPAC: <a href="#" className="text-blue-600 hover:underline">Online Public Access Catalog</a>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaPrint className="text-red-700" /> Services
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-800">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Library Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {collection.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b">
                <section.icon className="text-2xl text-red-700" />
                <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-700 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaMapMarker className="text-red-700" /> Location & Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                Central Library<br />
                Central University of South Bihar<br />
                NH-120, Gaya-Panchanpur Road<br />
                Gaya - 824236, Bihar
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">
                Phone: +91-631-2229531<br />
                Email: library@cusb.ac.in<br />
                Librarian: +91-631-2229532
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

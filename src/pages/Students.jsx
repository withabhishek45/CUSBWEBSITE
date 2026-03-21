import { useState } from "react";
import { FaBook, FaHome, FaGraduationCap, FaFileAlt, FaCalendar, FaMoneyBill, FaUsers, FaClipboardList, FaBus, FaMedal, FaLaptop, FaUserMd, FaPhone, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const results = [
  { id: 1, title: "Semester End Exam Results 2025", date: "15 Dec 2025", semester: "Even Sem 2024-25", new: true },
  { id: 2, title: "Mid Semester Results 2025", date: "20 Oct 2025", semester: "Odd Sem 2025-26", new: false },
  { id: 3, title: "Back Paper Results 2025", date: "05 Nov 2025", semester: "All Semesters", new: false },
  { id: 4, title: "CBCS Result 2024-25", date: "30 Jun 2025", semester: "Annual", new: false },
];

const hostelInfo = [
  { name: "VDS Boys Hostel", type: "Boys", rooms: 200, filled: 180, facilities: ["WiFi", "Mess", "Gym", "24/7 Security", "Study Room"] },
  { name: "Gagri Sadan", type: "Girls", rooms: 150, filled: 130, facilities: ["WiFi", "Mess", "Reading Room", "Security", "CCTV"] },
  { name: "Maytri Sadan", type: "Girls", rooms: 120, filled: 110, facilities: ["WiFi", "Mess", "Common Room", "Security", "24/7"] },
];

const scholarships = [
  { name: "National Scholarship Portal", amount: "₹12,000/yr", eligibility: "UG/PG Students", deadline: "31 Dec 2026" },
  { name: "Central Sector Scheme", amount: "₹20,000/yr", eligibility: "Family Income < 2.5L", deadline: "31 Mar 2026" },
  { name: "Merit-cum-Means", amount: "₹50,000/yr", eligibility: "Top 5% Students", deadline: "15 Oct 2025" },
  { name: "Minority Welfare", amount: "₹25,000/yr", eligibility: "Minority Students", deadline: "30 Nov 2025" },
];

const examinations = [
  { title: "Semester End Exam Nov-Dec 2025", date: "15 Nov - 15 Dec 2025", status: "Upcoming" },
  { title: "Mid Sem Exam Oct 2025", date: "01-15 Oct 2025", status: "Completed" },
  { title: "Practical Exams 2025", date: "20 Oct - 30 Oct 2025", status: "Ongoing" },
];

const studentServices = [
  { icon: FaFileAlt, title: "Results", desc: "View your results", color: "from-red-500 to-red-600", bg: "bg-red-50", path: "/results" },
  { icon: FaHome, title: "Hostel", desc: "Accommodation info", color: "from-blue-500 to-blue-600", bg: "bg-blue-50", path: "/hostel" },
  { icon: FaGraduationCap, title: "Scholarships", desc: "Financial aid", color: "from-green-500 to-green-600", bg: "bg-green-50", path: "/scholarships" },
  { icon: FaClipboardList, title: "Examinations", desc: "Exam schedule", color: "from-purple-500 to-purple-600", bg: "bg-purple-50", path: "/examinations" },
  { icon: FaCalendar, title: "Academic Calendar", desc: "Important dates", color: "from-orange-500 to-orange-600", bg: "bg-orange-50", path: "/calendar" },
  { icon: FaMoneyBill, title: "Fee Payment", desc: "Pay fees online", color: "from-teal-500 to-teal-600", bg: "bg-teal-50", path: "/fees" },
  { icon: FaLaptop, title: "IT Services", desc: "WiFi, Labs", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", path: "/it-services" },
  { icon: FaBus, title: "Transport", desc: "Bus routes & timing", color: "from-pink-500 to-pink-600", bg: "bg-pink-50", path: "/transport" },
];

export default function Students() {
  const [activeTab, setActiveTab] = useState("results");

  const tabs = [
    { id: "results", label: "Results", icon: FaFileAlt },
    { id: "hostel", label: "Hostel", icon: FaHome },
    { id: "scholarships", label: "Scholarships", icon: FaMedal },
    { id: "examinations", label: "Examinations", icon: FaClipboardList },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Student Portal</h1>
          <p className="text-red-100 text-sm sm:text-base">Everything you need as a CUSB student</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="flex border-b overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600 bg-blue-50"
                        : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="text-base sm:text-lg" />
                    <span className="hidden xs:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {activeTab === "results" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Examination Results</h3>
                    <div className="space-y-3">
                      {results.map((result) => (
                        <div key={result.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FaFileAlt className="text-red-600 text-lg sm:text-xl" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 text-sm sm:text-base">{result.title}</p>
                              <p className="text-xs sm:text-sm text-gray-500">{result.semester} • {result.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-auto">
                            {result.new && (
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">New</span>
                            )}
                            <button className="px-3 py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1">
                              <FaDownload /> <span className="hidden sm:inline">Download</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "hostel" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Hostel Facilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {hostelInfo.map((hostel, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-5 hover:bg-gray-100 transition">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-gray-800 text-sm sm:text-base">{hostel.name}</h4>
                            <span className={`px-2 py-1 text-xs rounded-full ${hostel.type === "Boys" ? "bg-blue-100 text-blue-700" : "bg-pink-100 text-pink-700"}`}>
                              {hostel.type}
                            </span>
                          </div>
                          <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Total Rooms</span>
                              <span className="font-medium">{hostel.rooms}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Occupied</span>
                              <span className="font-medium">{hostel.filled}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(hostel.filled / hostel.rooms) * 100}%` }}></div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {hostel.facilities.map((f, j) => (
                              <span key={j} className="px-2 py-1 text-xs bg-white text-gray-600 rounded border">{f}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 sm:p-5 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3 sm:mb-2">Hostel Fee Structure (All Hostels)</h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div className="text-center p-2 sm:p-0">
                          <p className="font-bold text-blue-600">₹9,000</p>
                          <p className="text-gray-600 text-xs">Per Sem</p>
                        </div>
                        <div className="text-center p-2 sm:p-0">
                          <p className="font-bold text-blue-600">₹3,000</p>
                          <p className="text-gray-600 text-xs">Mess/Month</p>
                        </div>
                        <div className="text-center p-2 sm:p-0">
                          <p className="font-bold text-blue-600">₹5,000</p>
                          <p className="text-gray-600 text-xs">Security</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "scholarships" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Available Scholarships</h3>
                    <div className="space-y-3">
                      {scholarships.map((sch, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-gray-800 mb-1">{sch.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{sch.eligibility}</p>
                              <div className="flex gap-4 text-xs text-gray-500">
                                <span>Deadline: {sch.deadline}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-green-600">{sch.amount}</p>
                              <button className="mt-2 px-3 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "examinations" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Examination Schedule</h3>
                    <div className="space-y-3">
                      {examinations.map((exam, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-gray-800 mb-1">{exam.title}</h4>
                              <p className="text-sm text-gray-600">📅 {exam.date}</p>
                            </div>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              exam.status === "Upcoming" ? "bg-blue-100 text-blue-700" :
                              exam.status === "Ongoing" ? "bg-green-100 text-green-700" :
                              "bg-gray-200 text-gray-600"
                            }`}>
                              {exam.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-purple-50 rounded-xl p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Exam Guidelines</h4>
                        <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                          <li>• Carry University ID Card</li>
                          <li>• Reach 30 mins before</li>
                          <li>• Banned items strictly prohibited</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Result Statistics</h4>
                        <div className="text-xs sm:text-sm text-gray-600">
                          <p>Pass Rate: <span className="font-bold text-green-600">87%</span></p>
                          <p>Appeared: <span className="font-bold">2,450</span></p>
                          <p>Passed: <span className="font-bold">2,132</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Quick Services</h3>
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-3">
                {studentServices.slice(0, 6).map((service, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center hover:bg-gray-100 transition cursor-pointer">
                    <service.icon className="text-xl sm:text-2xl text-blue-600 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs font-medium text-gray-800">{service.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-4 sm:p-6 text-white">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Student Login</h3>
              <p className="text-blue-100 mb-3 sm:mb-4 text-xs sm:text-sm">Access your academic portal, results, and fee payment.</p>
              <button className="w-full py-2.5 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition text-sm sm:text-base">
                Login to Portal
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Important Contacts</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaUserMd className="text-red-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Health Center</p>
                    <p className="text-xs text-gray-500">+91-631-2229535</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaHome className="text-blue-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Hostel Office</p>
                    <p className="text-xs text-gray-500">+91-631-2229540</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-green-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Student Helpdesk</p>
                    <p className="text-xs text-gray-500">+91-631-2229500</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <span className="text-xs sm:text-sm text-gray-700">Academic Calendar</span>
                  <FaExternalLinkAlt className="text-gray-400 text-xs sm:text-sm" />
                </a>
                <a href="#" className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <span className="text-xs sm:text-sm text-gray-700">Exam Schedule</span>
                  <FaExternalLinkAlt className="text-gray-400 text-xs sm:text-sm" />
                </a>
                <a href="#" className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <span className="text-xs sm:text-sm text-gray-700">Syllabus Download</span>
                  <FaExternalLinkAlt className="text-gray-400 text-xs sm:text-sm" />
                </a>
                <a href="#" className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <span className="text-xs sm:text-sm text-gray-700">Library Catalog</span>
                  <FaExternalLinkAlt className="text-gray-400 text-xs sm:text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

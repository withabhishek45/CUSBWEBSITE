import { useState } from "react";
import { FaFilePdf, FaCalendarAlt, FaCheckCircle, FaArrowRight, FaGraduationCap, FaUsers, FaBook, FaClock } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const admissionNotices = [
  { id: 1, title: "UG Admission 2026-27 - Notification", date: "15 Mar 2026", new: true },
  { id: 2, title: "PG Admission 2026-27 - Notification", date: "10 Mar 2026", new: true },
  { id: 3, title: "Ph.D Admission 2026-27 - Notification", date: "08 Mar 2026", new: false },
  { id: 4, title: "Spot Round Admission 2025-26", date: "01 Dec 2025", new: false },
  { id: 5, title: "MBA Admission 2026-27 - Open", date: "20 Feb 2026", new: true },
];

const meritLists = [
  { id: 1, title: "UG Merit List 2025-26 (Round 1)", date: "20 Jul 2025" },
  { id: 2, title: "UG Merit List 2025-26 (Round 2)", date: "05 Aug 2025" },
  { id: 3, title: "PG Merit List 2025-26 (Round 1)", date: "25 Jul 2025" },
  { id: 4, title: "PG Merit List 2025-26 (Round 2)", date: "10 Aug 2025" },
  { id: 5, title: "Ph.D Merit List 2025-26", date: "15 Sep 2025" },
  { id: 6, title: "MBA Merit List 2025-26", date: "30 Jun 2025" },
];

const cutoffData = [
  { round: "Round 1 (UG 2025-26)", course: "B.A. (Hons)", cutoff: "85%", category: "General" },
  { round: "Round 1 (UG 2025-26)", course: "B.Sc. (Hons) Physics", cutoff: "82%", category: "General" },
  { round: "Round 1 (UG 2025-26)", course: "B.Com (Hons)", cutoff: "88%", category: "General" },
  { round: "Round 2 (UG 2025-26)", course: "B.A. (Hons)", cutoff: "82%", category: "General" },
  { round: "Round 1 (PG 2025-26)", course: "M.A. English", cutoff: "78%", category: "General" },
  { round: "Round 1 (PG 2025-26)", course: "M.Sc. Chemistry", cutoff: "75%", category: "General" },
];

const programs = [
  { level: "Undergraduate", courses: ["B.A. (Hons)", "B.Sc. (Hons)", "B.Com (Hons)", "B.B.A", "B.C.A", "B.Lib.I.Sc"], seats: "1200+" },
  { level: "Postgraduate", courses: ["M.A.", "M.Sc.", "M.Com", "M.B.A", "M.C.A", "M.Lib.I.Sc"], seats: "600+" },
  { level: "Ph.D.", courses: ["All Departments", "Science", "Arts", "Commerce", "Law"], seats: "100+" },
];

const importantDates = [
  { event: "Application Start", date: "01 May 2026" },
  { event: "Application Deadline", date: "30 June 2026" },
  { event: "Merit List Release", date: "15 July 2026" },
  { event: "Counseling Round 1", date: "20-25 July 2026" },
  { event: "Counseling Round 2", date: "05-10 Aug 2026" },
  { event: "Classes Begin", date: "01 Sept 2026" },
];

export default function Admission() {
  const [activeTab, setActiveTab] = useState("notices");

  const tabs = [
    { id: "notices", label: "Notices", icon: FaFilePdf },
    { id: "merit", label: "Merit Lists", icon: FaUsers },
    { id: "cutoff", label: "Cutoff", icon: FaCheckCircle },
    { id: "dates", label: "Important Dates", icon: FaCalendarAlt },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admission 2026-27</h1>
          <p className="text-red-100">Central University of South Bihar, Gaya</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="flex border-b overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600 bg-blue-50"
                        : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="text-lg" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === "notices" && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Admission Notices & Notifications</h3>
                    {admissionNotices.map((notice) => (
                      <div key={notice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <FaFilePdf className="text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{notice.title}</p>
                            <p className="text-sm text-gray-500">{notice.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {notice.new && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">New</span>
                          )}
                          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "merit" && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Merit Lists</h3>
                    {meritLists.map((list) => (
                      <div key={list.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaUsers className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{list.title}</p>
                            <p className="text-sm text-gray-500">{list.date}</p>
                          </div>
                        </div>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "cutoff" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Previous Year Cutoff</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Round</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Course</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Cutoff %</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {cutoffData.map((item, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-600">{item.round}</td>
                              <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.course}</td>
                              <td className="px-4 py-3 text-sm text-blue-600 font-bold">{item.cutoff}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{item.category}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "dates" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Important Dates 2026-27</h3>
                    <div className="space-y-3">
                      {importantDates.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">{item.event}</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Programs Offered</h3>
              <div className="space-y-4">
                {programs.map((prog, i) => (
                  <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <FaGraduationCap className="text-blue-600" />
                      <h4 className="font-semibold text-gray-800">{prog.level}</h4>
                      <span className="ml-auto px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">{prog.seats}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {prog.courses.slice(0, 4).map((course, j) => (
                        <span key={j} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">{course}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Apply Online</h3>
              <p className="text-blue-100 mb-4 text-sm">Applications are now open for 2026-27 session. Apply before the deadline.</p>
              <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
                Apply Now <FaArrowRight />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>UG: 10+2 from recognized board</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>PG: Bachelor's degree in relevant field</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ph.D: Master's degree with NET/GATE</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Valid score in CUET/CET</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm flex items-center gap-2"><FaBook /> Courses</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm flex items-center gap-2"><FaUsers /> Seats</span>
                  <span className="font-semibold">2000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm flex items-center gap-2"><FaClock /> Duration</span>
                  <span className="font-semibold">2-5 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

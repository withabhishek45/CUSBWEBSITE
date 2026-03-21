import { useState } from "react";
import { FaBell, FaCalendar, FaFilePdf, FaSearch, FaNewspaper } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const dummyNotices = [
  { id: 1, title: "UG Admission 2026-27 - Registration Open", description: "Applications are now open for undergraduate programs for the academic session 2026-27. Last date to apply is 30th June 2026.", date: "22 Mar 2026", category: "Admission", new: true, pdf: true },
  { id: 2, title: "PG Admission 2026-27 - Notification Released", description: "Postgraduate admission notification has been released. Candidates can apply through the official portal.", date: "20 Mar 2026", category: "Admission", new: true, pdf: true },
  { id: 3, title: "Ph.D. Admission 2026 - Notice", description: "Applications invited for Ph.D. programs in various departments. Eligibility: Master's degree with NET/GATE.", date: "18 Mar 2026", category: "Research", new: false, pdf: true },
  { id: 4, title: "Semester End Examination Schedule - Nov-Dec 2025", description: "Examination timetable for semester end exams has been published. Check your department portal for details.", date: "15 Mar 2026", category: "Examination", new: false, pdf: true },
  { id: 5, title: "Result Declaration - Even Semester 2024-25", description: "Results for all undergraduate and postgraduate programs for even semester 2024-25 have been declared.", date: "12 Mar 2026", category: "Academic", new: false, pdf: false },
  { id: 6, title: "Fee Payment Deadline Extended", description: "Last date for fee payment has been extended to 31st March 2026. Late fee will be applicable after this date.", date: "10 Mar 2026", category: "Finance", new: false, pdf: true },
  { id: 7, title: "Campus Placement Drive - TCS & Infosys", description: "TCS and Infosys campus placement drive scheduled for March 2026. Eligible students must register on placement portal.", date: "08 Mar 2026", category: "Placements", new: false, pdf: false },
  { id: 8, title: "Hostel Allotment List 2026-27", description: "Hostel allotment list for the academic year 2026-27 has been published. Check your student portal.", date: "05 Mar 2026", category: "Hostel", new: false, pdf: true },
  { id: 9, title: "Scholarship Form Last Date", description: "Last date to submit scholarship applications for the academic year 2025-26 is 31st March 2026.", date: "01 Mar 2026", category: "Scholarship", new: false, pdf: true },
  { id: 10, title: "Library Holiday Notice", description: "Library will remain closed on 17th March 2026 (Holi) and 18th March 2026 (Dollybihu Holiday).", date: "28 Feb 2026", category: "General", new: false, pdf: false },
  { id: 11, title: "National Seminar on Environmental Science", description: "Two-day national seminar on 'Climate Change and Sustainable Development' from 25-26 April 2026.", date: "25 Feb 2026", category: "Events", new: false, pdf: true },
  { id: 12, title: "Annual Sports Meet 2026", description: "Annual sports meet will be held from 15-20 April 2026. Students can register for various sports events.", date: "20 Feb 2026", category: "Sports", new: false, pdf: false },
  { id: 13, title: "NSS Camp Registration Open", description: "NSS special camp registration is open. Last date to apply is 15th April 2026.", date: "18 Feb 2026", category: "NSS", new: false, pdf: false },
  { id: 14, title: "Workshop on Soft Skills Development", description: "Three-day workshop on communication and soft skills from 10-12 April 2026. Register now!", date: "15 Feb 2026", category: "Workshop", new: false, pdf: true },
  { id: 15, title: "University Holiday Calendar 2026", description: "List of holidays for the year 2026 has been published. Check the academic calendar.", date: "10 Feb 2026", category: "General", new: false, pdf: true },
];

const categories = ["All", "Admission", "Academic", "Examination", "Finance", "Placements", "Hostel", "Scholarship", "Events", "Sports", "NSS", "Workshop", "General"];

export default function Notices() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotices = dummyNotices.filter(notice => {
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Notices & Announcements</h1>
          <p className="text-red-100 text-sm sm:text-base">Stay updated with latest notifications from CUSB</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-gray-600 px-2 py-1">
            Showing {filteredNotices.length} notices
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="bg-white rounded-xl shadow-sm sm:shadow-md p-4 sm:p-5 hover:shadow-lg transition flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaBell className="text-orange-600 text-lg sm:text-xl" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                      {notice.category}
                    </span>
                    {notice.new && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{notice.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">{notice.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {notice.date}
                    </span>
                    {notice.pdf && (
                      <span className="flex items-center gap-1 text-blue-600 cursor-pointer hover:text-blue-800">
                        <FaFilePdf /> View PDF
                      </span>
                    )}
                  </div>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex-shrink-0">
                  View
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <FaNewspaper className="text-4xl mx-auto mb-3 text-gray-300" />
              <p>No notices found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

import { useState, useEffect } from "react";
import { FaBell, FaCalendar, FaFilePdf, FaSearch, FaNewspaper, FaSpinner } from "react-icons/fa";
import { api } from "../utils/api";
import BackToTop from "../components/layout/BackToTop";

const categories = ["All", "Academic", "Examination", "Event", "General", "Admission", "Scholarship", "Hostel", "Placement", "Workshop"];

const academicNotices = [
  { title: "Academic Calendar AY 2025-26 for B.Sc.(Hons.) Agriculture programme", date: "2025", category: "Academic", description: "Academic Calendar for students admitted in B.Sc.(Hons.) Agriculture programme" },
  { title: "Academic Calendar AY 2025-26 for Diploma in Pharmacy", date: "2025", category: "Academic", description: "Academic Calendar for students of Diploma in Pharmacy" },
  { title: "Academic Calendar AY 2025-26 for PhD Students", date: "2025", category: "Academic", description: "Academic Calendar for PhD Students admitted in AY 2025-26" },
  { title: "Academic Calendar 2025-26 (January-June) for UG & PG programmes", date: "2025", category: "Academic", description: "Academic Calendar for Undergraduate and Postgraduate programmes" },
  { title: "Academic Calendar 2025-26 (July-December) for AY 2025-26", date: "2025", category: "Academic", description: "Academic Calendar for students of Undergraduate and B.Lib.I.Sc.–M. Lib.I.Sc. programmes" },
];

const examinationNotices = [
  { title: "Notice for Submission of Backlog Forms", date: "02-April-26", category: "Examination", description: "Backlog form for appearing in backlog course" },
  { title: "Notification regarding issuance of Character Certificate", date: "26-March-26", category: "Examination", description: "Notification No. CUSB/Acad./9-17/2025/AE-633" },
  { title: "Clarification for submission of Monthly Student Attendance Records", date: "19-March-26", category: "Examination", description: "Extension of last date for submission pending monthly attendance record" },
  { title: "Submission of Monthly Student Attendance Records", date: "12-March-26", category: "Examination", description: "Format available from Email" },
  { title: "Holi Advisory for CUSB students", date: "2026", category: "General", description: "Advisory notice for students" },
  { title: "Revised list of students for Supplementary/Backlog Examination", date: "13-Feb-26", category: "Examination", description: "Revised list of students applied for Supplementary/Backlog Examination" },
  { title: "Time-Table of Supplementary Examination", date: "12-Feb-26", category: "Examination", description: "Time-Table of 5 year Integrated UG-PG programme / Backlog Examination" },
  { title: "List of students for Supplementary/Backlog Examination of UG Programmes", date: "11-Feb-26", category: "Examination", description: "List of students applied for Supplementary/Backlog Examination" },
  { title: "Mandatory Course Registration on SAMARTH Portal", date: "05-Feb-26", category: "Examination", description: "All students must register on SAMARTH Portal" },
  { title: "Semester registration for Undergraduate and Postgraduate students", date: "04-Feb-26", category: "Examination", description: "Registration of students promoted to next semester" },
  { title: "Registration of newly enrolled Ph.D. Scholars on SAMARTH portal", date: "30-Jan-26", category: "Examination", description: "Generation of ABC ID for new Ph.D. scholars" },
  { title: "List of provisionally eligible students for Gold Medals", date: "29-Jan-26", category: "Examination", description: "List for Gold Medals of Year-2023 and Year-2024" },
  { title: "Issuance of Enrolment Number to Ph.D. students", date: "20-Jan-26", category: "Examination", description: "Enrolment Number for students admitted in Ph.D. programmes" },
  { title: "Physical Document Verification of Ph.D. Scholars", date: "21-Jan-26", category: "Examination", description: "Document verification for AY 2025-26" },
  { title: "Allotment of supervisor to Ph.D. Scholars", date: "21-Jan-26", category: "Examination", description: "Allotment of supervisor and co-supervisor" },
  { title: "Submission of six-monthly progress reports", date: "21-Jan-26", category: "Examination", description: "Progress reports for July-December 2025" },
  { title: "Issuance of Bonafide Certificate and Fee Structure", date: "15-Jan-26", category: "Examination", description: "Notice regarding issuance of certificates" },
  { title: "Extension of last date for registration to repeat courses", date: "15-Jan-26", category: "Examination", description: "Extension for Undergraduate and Postgraduate programmes" },
  { title: "Semester registration for Undergraduate (4th/6th/8th/10th) and PG (2nd/4th)", date: "10-Jan-26", category: "Examination", description: "Semester registration for January-June 2026" },
  { title: "Semester registration for Ph.D. Scholars", date: "10-Jan-26", category: "Examination", description: "Registration for AY 2020-21, 2022-23, 2023-24 and 2024-25" },
  { title: "Registration for repeat courses", date: "09-Jan-26", category: "Examination", description: "Form for Repeat Courses" },
  { title: "Semester registration for PG programmes (2nd Semester under paid seat)", date: "09-Jan-26", category: "Examination", description: "For the period of January-June 2026" },
  { title: "Supplementary Examination for Postgraduate Programmes", date: "30-July-25", category: "Examination", description: "Supplementary Examination for PG programmes" },
  { title: "Supplementary Examination for B.Sc. Agriculture & Integrated UG-PG", date: "30-July-25", category: "Examination", description: "Examination to be held in August-2025" },
  { title: "PM-Vidyalaxmi Schemes for Students", date: "23-Apr-25", category: "Scholarship", description: "New schemes for student welfare" },
  { title: "Degree data of passed out students in year-2024", date: "02-Jan-26", category: "Academic", description: "List of passed out students" },
];

const allNotices = [...academicNotices, ...examinationNotices].map((n, i) => ({ ...n, id: i + 1 }));

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchNotices() {
      try {
        const data = await api.get("/notices");
        if (data && Array.isArray(data) && data.length > 0) {
          setNotices(data);
        } else {
          setNotices(allNotices);
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
        setNotices(allNotices);
      }
      setLoading(false);
    }
    fetchNotices();
  }, []);

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    const matchesSearch = (notice.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          notice.description?.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-red-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading notices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Notices & Announcements</h1>
          <p className="text-red-100 text-sm sm:text-base">Academics & Examination Notices</p>
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
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
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
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      notice.category === 'Examination' ? 'bg-blue-100 text-blue-700' :
                      notice.category === 'Academic' ? 'bg-green-100 text-green-700' :
                      notice.category === 'Scholarship' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {notice.category || 'General'}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FaCalendar /> {notice.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{notice.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{notice.description}</p>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-1 flex-shrink-0">
                  <FaFilePdf /> View
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

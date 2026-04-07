import { useState } from "react";
import { FaFilePdf, FaDownload, FaUserGraduate, FaBriefcase, FaSearch } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const studentDownloads = [
  {
    category: "Identity Card Related",
    items: [
      { name: "Identity Card Application Form for Students", pdf: "#" },
      { name: "Notification: Regarding issuance of New / Duplicate Identity Card", pdf: "#" },
    ]
  },
  {
    category: "Academic Form & Application",
    items: [
      { name: "Application form for cancellation of admission", pdf: "#" },
      { name: "No Dues Certificate", pdf: "#" },
      { name: "Refund of Hostel Deposit", pdf: "#" },
      { name: "Form for Refund of Security Deposit on Completion of Programme", pdf: "#" },
      { name: "Student Information Form", pdf: "#" },
      { name: "Application form for Bonafide Certificate / Fee Structure Certificate", pdf: "#" },
      { name: "Application for refund of amount credited under BSCCS / Education Loan", pdf: "#" },
      { name: "Application form for University Certificate", pdf: "#" },
      { name: "Application form for Degree Certificate in absentia", pdf: "#" },
      { name: "Application form for issuing various certificates", pdf: "#" },
    ]
  },
  {
    category: "Examination Related",
    items: [
      { name: "Application form for backlog courses examination", pdf: "#" },
      { name: "Application form for improvement of grades", pdf: "#" },
    ]
  },
  {
    category: "Project and Thesis",
    items: [
      { name: "MSc Project Thesis Format", pdf: "#" },
      { name: "Minor Project Thesis Format", pdf: "#" },
    ]
  },
];

const employeeDownloads = [
  {
    category: "Leave Related",
    items: [
      { name: "Circular of Leave", pdf: "#" },
      { name: "Leave Application (English)", pdf: "#" },
      { name: "New Duty Leave Application", pdf: "#" },
      { name: "Leave sanction order", pdf: "#" },
      { name: "Joining Report", pdf: "#" },
      { name: "Compensatory off duty slip", pdf: "#" },
    ]
  },
  {
    category: "LTC Related",
    items: [
      { name: "LTC Application Form", pdf: "#" },
      { name: "LTC Bill Settlement Form", pdf: "#" },
    ]
  },
  {
    category: "Account Section Related",
    items: [
      { name: "Claim form for Reimbursement of T.A./D.A.", pdf: "#" },
      { name: "Annual Property Report", pdf: "#" },
      { name: "Annual Property Return", pdf: "#" },
    ]
  },
  {
    category: "Identity Card Related",
    items: [
      { name: "Identity Card Application Form for Faculty / Officers / Staff", pdf: "#" },
      { name: "Notification: Regarding issuance of New / Duplicate Identity Card", pdf: "#" },
    ]
  },
  {
    category: "Project Related Proforma",
    items: [
      { name: "Undertaking by Principal Investigator", pdf: "#" },
      { name: "Project Proposal Annexure-I", pdf: "#" },
      { name: "TDC Financial Assistance Proforma", pdf: "#" },
      { name: "TDC Approval Form", pdf: "#" },
    ]
  },
  {
    category: "Career Advancement Scheme (CAS)",
    items: [
      { name: "Notice: Extension for submission of CAS promotion application", pdf: "#" },
      { name: "Notice: Submission of application under CAS", pdf: "#" },
      { name: "Annexure-I (Form of option)", pdf: "#" },
      { name: "Annexure-II (Part A)", pdf: "#" },
      { name: "Annexure-II (Part B)", pdf: "#" },
      { name: "Annexure-III (Summary Report)", pdf: "#" },
      { name: "Annexure-IV (Part A)", pdf: "#" },
      { name: "Annexure-IV (Part B)", pdf: "#" },
      { name: "Annexure-V (Summary Report)", pdf: "#" },
      { name: "UGC-Career Advancement Scheme (CAS)", pdf: "#" },
      { name: "PBAS proforma for promotion (Annexure-A)", pdf: "#" },
      { name: "PBAS proforma for promotion (Annexure-B)", pdf: "#" },
    ]
  },
  {
    category: "Reservation Register / Roster",
    items: [
      { name: "Reservation Register (Teaching) - Professor", pdf: "#" },
      { name: "Reservation Register (Teaching) - Associate Professor", pdf: "#" },
      { name: "Reservation Register (Teaching) - Assistant Professor", pdf: "#" },
      { name: "Reservation Register (Non Teaching)", pdf: "#" },
      { name: "Reservation Register (Non Teaching)-2024", pdf: "#" },
      { name: "Reservation Register (Non Teaching)-2025", pdf: "#" },
    ]
  },
  {
    category: "Purchase and Other",
    items: [
      { name: "General Financial Rules 2017", pdf: "#" },
      { name: "Supplier Registration Form", pdf: "#" },
      { name: "Inspection-cum-Installation Report", pdf: "#" },
      { name: "Salary Bill Format for Research Project Staff", pdf: "#" },
    ]
  },
  {
    category: "Medical Facility Related",
    items: [
      { name: "Medical Reimbursement Claim through SAMARTH Portal", pdf: "#" },
      { name: "List of Empanelled Hospital", pdf: "#" },
      { name: "CUSB Contributory Health Scheme Rules", pdf: "#" },
      { name: "Medical reimbursement guidelines with formats", pdf: "#" },
      { name: "Referral Slip (Medical)", pdf: "#" },
      { name: "Application form for Health Diary", pdf: "#" },
    ]
  },
  {
    category: "Booking & Nomination",
    items: [
      { name: "Booking of Swami Vivekanand Lecture Hall", pdf: "#" },
      { name: "SOP of booking of Swami Vivekanand Lecture Hall", pdf: "#" },
      { name: "Format of booking of Swami Vivekanand Lecture Hall", pdf: "#" },
      { name: "Nomination Form for Death-Cum-Retirement Benefits", pdf: "#" },
      { name: "Children Education Allowance (CEA)", pdf: "#" },
    ]
  },
  {
    category: "Transport Related",
    items: [
      { name: "GH and RH 2026", pdf: "#" },
      { name: "GH and RH 2025", pdf: "#" },
      { name: "Notification for Vehicle Stickers", pdf: "#" },
      { name: "Requisition Format of Vehicle", pdf: "#" },
    ]
  },
];

export default function Downloads() {
  const [activeTab, setActiveTab] = useState("student");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filterItems = (items) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const currentDownloads = activeTab === "student" ? studentDownloads : employeeDownloads;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">Downloads & Forms</h1>
          <p className="text-red-100">Download forms, applications and documents</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="md:w-64">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setActiveTab("student")}
                className={`w-full px-4 py-4 text-left flex items-center gap-3 transition ${
                  activeTab === "student" 
                    ? "bg-blue-700 text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <FaUserGraduate />
                <span className="font-medium">Student Related</span>
              </button>
              <button
                onClick={() => setActiveTab("employee")}
                className={`w-full px-4 py-4 text-left flex items-center gap-3 transition ${
                  activeTab === "employee" 
                    ? "bg-blue-700 text-white" 
                    : "hover:bg-gray-100"
                }`}
              >
                <FaBriefcase />
                <span className="font-medium">Employee Related</span>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search forms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              {currentDownloads.map((section) => {
                const filteredItems = filterItems(section.items);
                if (filteredItems.length === 0) return null;
                
                const isExpanded = expandedCategories[section.category] !== false;
                
                return (
                  <div key={section.category} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleCategory(section.category)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-800">{section.category}</span>
                      <span className="text-gray-500">
                        {isExpanded ? "−" : "+"} ({filteredItems.length})
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="divide-y divide-gray-100">
                        {filteredItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.pdf}
                            className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition"
                          >
                            <span className="text-gray-700">{item.name}</span>
                            <FaFilePdf className="text-red-500 text-xl" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

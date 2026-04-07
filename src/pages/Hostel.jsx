import { useState } from "react";
import { FaHome, FaUsers, FaShieldAlt, FaUtensils, FaWifi, FaDumbbell, FaMedkit, FaBook, FaBasketballBall, FaFootballBall, FaRunning } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const boysHostelWardens = [
  { name: "Dr. Vipin Kumar Singh", designation: "Chief Warden", department: "Dept. of English", email: "vipinsingh@cusb.ac.in", phone: "9407343432" },
  { name: "Dr. Manjit Singh", designation: "Warden", department: "Dept. of Geology", email: "manjitsingh@cusb.ac.in", phone: "-" },
  { name: "Dr. Lakhwinder Singh", designation: "Warden", department: "Dept. of Physics", email: "lakhwinder@cusb.ac.in", phone: "8427471769" },
  { name: "Dr. Kishor Kumar", designation: "Warden", department: "Dept. of Teacher Education", email: "kishor@cusb.ac.in", phone: "9991652181" },
  { name: "Dr. Priya Ranjan", designation: "Warden", department: "Dept. of Sociology", email: "Pranjan@cusb.ac.in", phone: "97177xxxxx" },
  { name: "Mr. Santosh Kumar", designation: "Hostel Attendant", department: "Hostel (Boys')", email: "santoshkr@cub.ac.in", phone: "9308108055" },
];

const girlsHostelWardensMaitreyi = [
  { name: "Dr. Tara Kashav", designation: "Chief Warden (Non-Resident)", department: "-", email: "tarakashav@cub.ac.in", phone: "0631-2229551" },
  { name: "Ms. Chandna Suba", designation: "Warden", department: "-", email: "chandana@cusb.ac.in", phone: "0631-2229551" },
  { name: "Dr. Priti Rai", designation: "Warden", department: "-", email: "pritirai@cusb.ac.in", phone: "0631-2229551" },
  { name: "Mrs. Ekta Kumari", designation: "Hostel Attendant", department: "-", email: "ekta@cub.ac.in", phone: "0631-2229551" },
];

const girlsHostelWardensGargi = [
  { name: "Ms. Renu", designation: "Chief Warden (Resident)", department: "-", email: "cwgargisadan@cusb.ac.in", phone: "0631-2229551" },
  { name: "Dr. Neha Shukla", designation: "Warden", department: "-", email: "nehashukla@cusb.ac.in", phone: "0631-2229552" },
  { name: "Dr. Pratistha Sonker", designation: "Warden", department: "-", email: "pratishtha@cusb.ac.in", phone: "0631-2229552" },
  { name: "Mrs. Lakshmi Gupta", designation: "Hostel Attendant", department: "-", email: "lakshmigupta@cub.ac.in", phone: "0631-2229552" },
];

const hostelFacilities = [
  { icon: FaHome, name: "Furnished Rooms", desc: "Sharing basis with bed, wardrobe, study table" },
  { icon: FaUtensils, name: "Mess Facilities", desc: "Organized mess with quality services" },
  { icon: FaWifi, name: "Wi-Fi Connectivity", desc: "24×7 internet access" },
  { icon: FaDumbbell, name: "Gymnasium", desc: "Fitness center for residents" },
  { icon: FaMedkit, name: "Medical Room", desc: "24×7 medical assistance" },
  { icon: FaBook, name: "Reading Room", desc: "Dedicated study spaces" },
  { icon: FaShieldAlt, name: "High Security", desc: "CCTV coverage & safety" },
  { icon: FaRunning, name: "Sports", desc: "Badminton, TT, Gym facilities" },
];

const sportsFacilities = [
  "Indoor Games facilities",
  "Table Tennis Room",
  "Badminton Court",
  "Adjacent play ground",
  "Basketball Court (Synthetic & Floor)",
  "Volleyball Court (Synthetic & Soil)",
  "Hockey ground",
  "Football ground",
  "Hand ball ground",
  "Athletic track",
];

const services = [
  "Laundry & Ironing Services",
  "24×7 Medical Assistance & Ambulance Service",
  "High Security Arrangements",
  "CCTV Coverage and Safety supervision",
  "24×7 Electricity and Water supply",
 "Caretakers and housekeeping services",
  "Salon facilities",
  "ATM (within 100 metre range)",
  "Convenience shop & Canteen",
];

const hostelForms = [
  { name: "No Dues Form for Hostel", type: "form" },
  { name: "Application Form: Room Allotment Slip", type: "form" },
  { name: "Anti Ragging Affidavit by Student", type: "form" },
  { name: "Anti Ragging Affidavit by Parent/Guardian", type: "form" },
  { name: "Undertaking Form - Girls Hostel", type: "form" },
  { name: "Undertaking Form - Boys Hostel", type: "form" },
  { name: "Hostel Allotment Rules for Research Scholar", type: "form" },
  { name: "Consent Letter from Parent/Guardian", type: "form" },
  { name: "Dossier Form for the Hostel", type: "form" },
];

export default function Hostel() {
  const [activeTab, setActiveTab] = useState("boys");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">Hostel Facilities</h1>
          <p className="text-red-100">Central University of South Bihar</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <p className="text-gray-600 leading-relaxed">
            Two well-furnished and aesthetically designed separate hostels for girls and boys have been constructed within campus of the University with a view to provide best possible facilities to the students. For leisure and recreation, both indoor and outdoor sports facilities are made available in the hostels.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Allotments of accommodation in Hostels are made according with the norms, procedure and administration stipulated in the <strong>"Rules and Regulations Governing Hostel Administration and Residency"</strong> approved by the Statutory Bodies of the University.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Boys' Hostel Details →
            </a>
            <a href="#" className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
              Girls' Hostel Details →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("boys")}
              className={`flex-1 px-6 py-4 text-center font-medium transition ${
                activeTab === "boys"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Boys' Hostel (VDS Block A & B)
            </button>
            <button
              onClick={() => setActiveTab("girls")}
              className={`flex-1 px-6 py-4 text-center font-medium transition ${
                activeTab === "girls"
                  ? "bg-pink-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Girls' Hostel (Maitreyi & Gargi Sadan)
            </button>
          </div>

          <div className="p-6">
            {activeTab === "boys" && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Introduction</h3>
                  <p className="text-gray-600">
                    The boys' hostel with its quality infrastructure and rich resources is well equipped to accommodate more than <strong>550 students</strong> with facilities like home away from home. It has two blocks with a separate mess building and ample open space. All the students are provided with a cot & bed, study table, a chair and a wardrobe for comfortable stay and studies.
                  </p>
                  <p className="text-gray-600 mt-3">
                    The hostel has a well-organized administration comprising <strong>Dean Students' Welfare (DSW)</strong>, Chief Warden, Wardens, Office Attendant and other Staffs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Wardens & Staff</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Designation</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Department</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {boysHostelWardens.map((warden, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">{warden.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.designation}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.department}</td>
                            <td className="px-4 py-3 text-sm text-blue-600">{warden.email}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Boys' Hostel Office:</strong> cwboyshostel@cusb.ac.in | +91 - 9308108055
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "girls" && (
              <div className="space-y-6">
                <div className="bg-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Introduction</h3>
                  <p className="text-gray-600">
                    The girls' hostel is well equipped to accommodate more than <strong>300 students</strong> with facilities like home away from home. It has two blocks (Maitreyi Sadan & Gargi Sadan) with a separate mess building and ample open space.
                  </p>
                  <p className="text-gray-600 mt-3">
                    The hostel has a well-organized administration comprising <strong>Dean Students' Welfare (DSW)</strong>, Chief Warden, Wardens, Office Attendant, Security lady guards and other Staffs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Maitreyi Sadan Wardens</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Designation</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {girlsHostelWardensMaitreyi.map((warden, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">{warden.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.designation}</td>
                            <td className="px-4 py-3 text-sm text-blue-600">{warden.email}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-4">Gargi Sadan Wardens</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Designation</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {girlsHostelWardensGargi.map((warden, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">{warden.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.designation}</td>
                            <td className="px-4 py-3 text-sm text-blue-600">{warden.email}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{warden.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-pink-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Maitreyi Sadan Office:</strong> ekta@cub.ac.in | cwgirlshostel@cusb.ac.in | 0631-2229551<br />
                      <strong>Gargi Sadan Office:</strong> lakshmigupta@cub.ac.in | 0631-2229552
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Hostel Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {hostelFacilities.map((facility, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
              <facility.icon className="text-3xl text-red-700 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 text-sm">{facility.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{facility.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Infrastructure & Amenities</h3>
            <ul className="space-y-2">
              {["Fully furnished rooms (sharing basis)", "Mess Facilities", "Common washrooms", "RO-purified Drinking Water", "Reading Room", "Visitors' Room", "Medical Room", "Gymnasium cum Fitness Centre", "Geysers", "Fire Protection System", "Safe assembly points"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Sports Infrastructure</h3>
          <div className="flex flex-wrap gap-2">
            {sportsFacilities.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Important Forms</h3>
          <div className="space-y-2">
            {hostelForms.map((form, i) => (
              <a key={i} href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <span className="text-gray-700">{form.name}</span>
                <span className="text-red-500 text-sm">Download ↗</span>
              </a>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> For more forms and notifications, please visit the <a href="/downloads" className="text-blue-600 hover:underline">Downloads page</a>.
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

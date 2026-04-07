import { useState } from "react";
import { FaUniversity, FaBook, FaUsers, FaLaptop, FaBuilding, FaHospital, FaBus, FaWifi, FaAward, FaPlay, FaDownload } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

const stats = [
  { icon: FaUniversity, number: "300", label: "Acres Campus" },
  { icon: FaBook, number: "26", label: "Departments" },
  { icon: FaUsers, number: "4100+", label: "Students" },
  { icon: FaAward, number: "50+", label: "Courses" },
];

const schools = [
  "School of Mathematics, Statistics & Computer Science",
  "School of Physical and Chemical Sciences",
  "School of Earth, Biological and Environmental Science",
  "School of Social Sciences & Policy",
  "School of Human Science",
  "School of Languages & Literature",
  "School of Media, Arts & Aesthetics",
  "School of Management",
  "School of Education",
  "School of Law & Governance",
  "School of Vocational Studies",
  "School of Technology",
  "School of Health Sciences",
  "School of Agriculture and Development",
];

const milestones = [
  { year: "2009", event: "University founded under Central Universities Act, 2009" },
  { year: "2010", event: "Bhoomi Pujan of Campus Land on 27th February" },
  { year: "2013", event: "First Convocation - Hon'ble Vice President of India as Chief Guest" },
  { year: "2014", event: "Name changed to Central University of South Bihar (CUSB)" },
  { year: "2014", event: "CUBET Entrance Test conducted successfully" },
  { year: "2015", event: "Foundation Laying of Buildings by Union HRD Minister" },
  { year: "2016", event: "Grade 'A' NAAC Accreditation" },
  { year: "2016", event: "Ranked 94th in NIRF Ranking - Top in Bihar" },
  { year: "2017", event: "University started functioning from Permanent Campus" },
  { year: "2018", event: "Academic Activities began at Permanent Campus" },
  { year: "2019", event: "Ranked 22nd in India Today Ranking" },
  { year: "2020", event: "Ranked 1st in Bihar among Government Universities" },
];

const achievements = [
  "AICTE Accreditation for M.Tech Programme",
  "NCTE Recognition for B.Ed Programmes",
  "BCI Recognition for Law Programmes",
  "Grade 'A' by NAAC",
  "NIRF Top 100 Universities",
  "India Today Top 25 Government Universities",
  "1st in Bihar among Government Universities",
];

export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About CUSB</h1>
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

        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="flex border-b overflow-x-auto">
            {[
              { id: "about", label: "About" },
              { id: "history", label: "History" },
              { id: "schools", label: "Schools" },
              { id: "vision", label: "Vision & Mission" },
              { id: "kulgeet", label: "University Kulgeet" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                  activeSection === tab.id
                    ? "border-red-700 text-red-700 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-red-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeSection === "about" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About CUSB</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Central University of South Bihar, Gaya, India, is one among 54 such universities of Federal Government, which come under the purview of the Department of Higher Education under the Ministry of Education of Government of India. It was established under the <strong>Central Universities Act, 2009</strong> (Section 25 of 2009) as Central University of Bihar (CUB) and the name since changed by the Central Universities (Amendment) Act, 2014 to Central University of South Bihar (CUSB).
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With the motto, i.e. '<strong>Collective Reasoning</strong>' the University has been conducting its academic and administrative activities from permanent campus on a <strong>300 acre</strong> plot of land at Panchanpur, situated about 15 kms away from Gaya town.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The University welcomes all with a grand Entrance Plaza and further provides visual delight with a half-globe shaped Stupa and a magnificent multi-storied Administrative Block building. Besides, the massive Schools buildings namely School of Earth, Biological & Environmental Sciences named as <strong>Aryabhatta Bhawan</strong>, School of Social Sciences & Policy named as <strong>Chanakya Bhawan</strong>, School of Education building named as <strong>Malaviya Bhawan</strong>, Vivekanand Lecture Complex, Sangharam Guest House, Boys Hostel named as <strong>Gargi Sadan</strong> and Girls Hostel named as <strong>Maitreyi Sadan</strong>.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Campus Address</h3>
                  <p className="text-gray-600">
                    SH-7, Gaya Panchanpur Road, Village – Karhara, Post. Fatehpur, Gaya – 824236 (Bihar)
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Key Achievements</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {achievements.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "history" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">History & Development</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The Central University of Bihar (CUB), is one amongst the 16 new Central Universities established by the Government of India under the Central Universities Act, 2009 (Section 25 of 2009). The first Vice-Chancellor <strong>Prof. Janak Pandey</strong> joined on 2nd March, 2009 and started functioning from a single room at Hindi Bhawan in Patna.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The University began its academic activities with the <strong>MA Programme in Development Studies</strong> in 2009. Till date, the university has been able to offer four (4) Integrated undergraduate (UG) programmes, 25 postgraduate (PG) programmes and 22 Ph.D. programmes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Milestones</h3>
                  <div className="space-y-4">
                    {milestones.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-20 flex-shrink-0">
                          <span className="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-bold">{item.year}</span>
                        </div>
                        <p className="text-gray-600">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Programmes Overview</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-700">4</div>
                      <div className="text-gray-600 text-sm">Integrated UG</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-700">25</div>
                      <div className="text-gray-600 text-sm">PG Programmes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-700">22</div>
                      <div className="text-gray-600 text-sm">Ph.D. Programmes</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "schools" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Schools of Studies</h2>
                  <p className="text-gray-600 mb-4">
                    Smt. Pratibha Devi Singh Patil, the former President of India in her capacity as the Visitor, accorded assent to the amendment to Statute 15 of the University and approved <strong>14 schools</strong> entered in the Statutes. Out of which <strong>11 Schools</strong> of studies are presently active:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {schools.map((school, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                      <span className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{school}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Academic Journey</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="font-bold text-red-700 w-24">2009-10:</span>
                      <span className="text-gray-600">MA in Development Studies started at BIT, Patna</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-red-700 w-24">2010-11:</span>
                      <span className="text-gray-600">5 PG programmes added (Biotechnology, CS, Env Sci, Math, Stats)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-red-700 w-24">2012-13:</span>
                      <span className="text-gray-600">7 more PG programmes including Life Science, Economics, English</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-red-700 w-24">2018-19:</span>
                      <span className="text-gray-600">5 new PG programmes (Chemistry, Physics, Social Work, M.Com, History)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "vision" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision</h2>
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed italic">
                      "To develop enlightened citizenship of a knowledge society for peace and prosperity of individuals, nation and the world, through promotion of innovation, creative endeavors, and scholarly inquiry and to be global destination for higher education and research."
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed">
                      To serve as a beacon of change, through multi-disciplinary learning, for creation of knowledge community, by building a strong character and nurturing a value-based transparent work ethics, promoting creative and critical thinking for holistic development and self-sustenance for the people of India. The university seeks to achieve this objective by cultivating an environment of excellence in teaching, research and innovation in pure and applied areas.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">University Motto</h3>
                  <p className="text-2xl font-bold text-green-700">"Collective Reasoning"</p>
                </div>
              </div>
            )}

            {activeSection === "kulgeet" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">University Kulgeet</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The University Kulgeet was composed by <strong>Dr. Hari Prasad Dubey</strong> in 2013. At the First Convocation of CUSB on 26 September 2013, it was sung in its fine musical form by singers-team led by Dr. Richa Vatsa (CUSB).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Genesis of University Kulgeet</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The credos of Kulgeet (University Anthem) of Central University of South Bihar (CUSB) are nature, environment, compassion and cultural consciousness of the historical land of Bihar. The poet has penned it down keeping in mind the world famous rich cultural heritage of the glorious land of Bihar.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    While writing the poet has taken inspirations from the Holy City of Gaya, the land of salvation, which is also referred as the <strong>Tapobhoomi of Mahatma Buddha, Pitritirtha and Vishnu Nagar</strong>.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">कुलगीत : प्रेरणा-प्रसंग</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    जीवन को ऊँचा उठाना और सुंदर बनाना मानव जीवन का लक्ष्य है। विश्वविद्यालय कुलगीत का मूल मंत्र है। प्रकृति, पर्यावरण, करुणा रक्षाकवच है। विश्वगुरु बनने का सपना शिक्षा का अध्याय है।
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>कुलगीत रचयिता: डॉ. हरिप्रसाद दुबे</strong>
                  </p>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">
                    <FaPlay /> Play Kulgeet
                  </a>
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Campus Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Aryabhatta Bhawan",
              "Chanakya Bhawan",
              "Administrative Block",
              "Central Library"
            ].map((item, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-40 flex items-center justify-center">
                <span className="text-gray-500 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

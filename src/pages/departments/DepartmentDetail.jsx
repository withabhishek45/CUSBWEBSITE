import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaBook, FaFlask, FaCalculator, FaLanguage, FaGraduationCap, FaAtom, FaLaptop, FaChartLine, FaLeaf, FaDna, FaUsers, FaAward, FaBookOpen, FaPen, FaGlobe, FaCode, FaBalanceScale, FaUniversity } from "react-icons/fa";
import BackToTop from "../../components/layout/BackToTop";

const iconMap = {
  "Agriculture": { icon: FaLeaf, color: "from-emerald-500 to-teal-600" },
  "Biotechnology": { icon: FaDna, color: "from-purple-500 to-pink-600" },
  "Chemistry": { icon: FaFlask, color: "from-blue-500 to-cyan-600" },
  "Commerce & Business Studies": { icon: FaChartLine, color: "from-amber-500 to-orange-600" },
  "Computer Science": { icon: FaLaptop, color: "from-slate-600 to-gray-700" },
  "Economics": { icon: FaChartLine, color: "from-green-500 to-emerald-600" },
  "English": { icon: FaBookOpen, color: "from-indigo-500 to-violet-600" },
  "Hindi": { icon: FaPen, color: "from-orange-500 to-red-600" },
  "History": { icon: FaHistory, color: "from-yellow-600 to-amber-600" },
  "Law & Governance": { icon: FaBalanceScale, color: "from-slate-700 to-gray-800" },
  "Mathematics": { icon: FaCalculator, color: "from-rose-500 to-pink-600" },
  "Physics": { icon: FaAtom, color: "from-blue-600 to-indigo-700" },
};

const departmentData = {
  "1": {
    name: "Agriculture",
    shortName: "Agriculture",
    icon: FaLeaf,
    color: "from-emerald-500 to-teal-600",
    head: "Dr. Rajesh Kumar",
    established: "2015",
    intake: "60",
    description: "The Department of Agriculture focuses on modern agricultural practices, agronomy, horticulture, and sustainable farming techniques. Our programs combine theoretical knowledge with practical field experience.",
    vision: "To become a center of excellence in agricultural education and research, contributing to sustainable agriculture and rural development.",
    mission: "To produce skilled agricultural professionals through quality education, research, and extension activities that address farmers' challenges and promote food security.",
    programs: [
      { name: "B.Sc. (Hons) Agriculture", duration: "4 Years", mode: "Full Time" },
      { name: "M.Sc. Agronomy", duration: "2 Years", mode: "Full Time" },
      { name: "M.Sc. Horticulture", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Agriculture", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Rajesh Kumar (Professor & Head)", "Dr. Priya Singh (Associate Professor)", "Dr. Amit Verma (Assistant Professor)", "Dr. Sneha Yadav (Assistant Professor)"],
    facilities: ["Smart Greenhouse", "Agronomy Lab", "Soil Testing Lab", "Plant Pathology Lab", "Farm Museum", "Research Farm (10 acres)"],
    highlights: ["ICAR Affiliation", "Scholarship for Meritorious Students", "Industry Visits", "Hands-on Training"],
  },
  "2": {
    name: "Biotechnology",
    shortName: "Biotechnology",
    icon: FaDna,
    color: "from-purple-500 to-pink-600",
    head: "Dr. Anjali Sharma",
    established: "2016",
    intake: "40",
    description: "The Department of Biotechnology offers comprehensive programs in molecular biology, genetics, industrial biotechnology, and bioinformatics. Students gain expertise in cutting-edge biotechnological research.",
    vision: "To be a leading department in biotechnology education and research, fostering innovation and entrepreneurship.",
    mission: "To provide interdisciplinary training in biotechnology and produce graduates equipped for careers in research, industry, and healthcare.",
    programs: [
      { name: "B.Sc. (Hons) Biotechnology", duration: "3 Years", mode: "Full Time" },
      { name: "M.Sc. Biotechnology", duration: "2 Years", mode: "Full Time" },
      { name: "M.Sc. Bioinformatics", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Biotechnology", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Anjali Sharma (Professor & Head)", "Dr. Vikram Singh (Associate Professor)", "Dr. Meera Patel (Assistant Professor)", "Dr. Rohit Gupta (Assistant Professor)"],
    facilities: ["Molecular Biology Lab", "Cell Culture Lab", "Bioinformatics Center", "Fermentation Lab", "Research Lab"],
    highlights: ["DBT Sponsored Programs", "Industry Collaborations", "Research Publications", "International Conferences"],
  },
  "3": {
    name: "Chemistry",
    shortName: "Chemistry",
    icon: FaFlask,
    color: "from-blue-500 to-cyan-600",
    head: "Dr. Suresh Patel",
    established: "2014",
    intake: "60",
    description: "The Department of Chemistry provides comprehensive education in organic, inorganic, physical, and analytical chemistry. Our curriculum emphasizes both theoretical concepts and laboratory skills.",
    vision: "To excel in chemical sciences education and research, contributing to scientific knowledge and societal benefit.",
    mission: "To nurture chemically literate professionals through innovative teaching, research, and industry collaboration.",
    programs: [
      { name: "B.Sc. (Hons) Chemistry", duration: "3 Years", mode: "Full Time" },
      { name: "M.Sc. Chemistry", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Chemistry", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Suresh Patel (Professor & Head)", "Dr. Kavita Desai (Associate Professor)", "Dr. Arun Joshi (Assistant Professor)", "Dr. Nisha Kumari (Assistant Professor)"],
    facilities: ["Organic Chemistry Lab", "Inorganic Chemistry Lab", "Physical Chemistry Lab", "Instrumentation Room", "Spectroscopy Lab"],
    highlights: ["UGC Funded Projects", "Research Publications", "Workshops & Seminars", "Industry Linkages"],
  },
  "4": {
    name: "Commerce & Business Studies",
    shortName: "Commerce",
    icon: FaChartLine,
    color: "from-amber-500 to-orange-600",
    head: "Dr. Ashok Kumar",
    established: "2014",
    intake: "80",
    description: "The Department of Commerce & Business Studies offers programs in accounting, finance, taxation, business management, and economics. We prepare students for careers in business, banking, and entrepreneurship.",
    vision: "To be a premier business school known for academic excellence and industry relevance.",
    mission: "To develop business professionals with strong ethical values and entrepreneurial skills.",
    programs: [
      { name: "B.Com. (Hons)", duration: "3 Years", mode: "Full Time" },
      { name: "M.Com.", duration: "2 Years", mode: "Full Time" },
      { name: "MBA", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Commerce", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Ashok Kumar (Professor & Head)", "Dr. Sunita Verma (Associate Professor)", "Dr. Rakesh Singh (Assistant Professor)", "Dr. Pooja Sharma (Assistant Professor)"],
    facilities: ["Computer Lab", "Library", "Auditorium", "Seminar Room", "Case Study Room"],
    highlights: ["CBCS Pattern", "Industry Visits", "Guest Lectures", "Placement Support"],
  },
  "5": {
    name: "Computer Science",
    shortName: "Computer Science",
    icon: FaCode,
    color: "from-slate-600 to-gray-700",
    head: "Dr. Naveen Gupta",
    established: "2014",
    intake: "120",
    description: "The Department of Computer Science offers comprehensive programs covering programming, algorithms, AI, data science, software engineering, and cybersecurity. Our curriculum meets industry standards.",
    vision: "To produce technically competent and ethically responsible computer professionals.",
    mission: "To provide world-class education in computing through innovative teaching and research.",
    programs: [
      { name: "B.Sc. (Hons) Computer Science", duration: "3 Years", mode: "Full Time" },
      { name: "BCA", duration: "3 Years", mode: "Full Time" },
      { name: "M.Sc. Computer Science", duration: "2 Years", mode: "Full Time" },
      { name: "MCA", duration: "3 Years", mode: "Full Time" },
      { name: "Ph.D. Computer Science", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Naveen Gupta (Professor & Head)", "Dr. Deepika Rawat (Associate Professor)", "Dr. Saurabh Mishra (Assistant Professor)", "Dr. Ankit Kumar (Assistant Professor)", "Dr. Richa Singh (Assistant Professor)"],
    facilities: ["Computer Labs (200+ systems)", "High-Speed Internet", "AI/ML Lab", "Cybersecurity Lab", "Project Lab", "Server Room"],
    highlights: ["NBA Accredited", "Google/Microsoft Partnerships", "100% Placement", "Startup Incubation"],
  },
  "6": {
    name: "Economics",
    shortName: "Economics",
    icon: FaChartLine,
    color: "from-green-500 to-emerald-600",
    head: "Dr. Madhav Rao",
    established: "2015",
    intake: "50",
    description: "The Department of Economics offers programs in microeconomics, macroeconomics, econometrics, development economics, and public policy. Our focus is on analytical skills and policy research.",
    vision: "To be a center of excellence in economics education and policy research.",
    mission: "To develop economists equipped with analytical skills for academia, government, and industry.",
    programs: [
      { name: "B.A. (Hons) Economics", duration: "3 Years", mode: "Full Time" },
      { name: "M.A. Economics", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Economics", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Madhav Rao (Professor & Head)", "Dr. Lakshmi Devi (Associate Professor)", "Dr. Chandrashekhar (Assistant Professor)"],
    facilities: ["Economics Lab", "Statistical Software", "Research Library", "Seminar Hall"],
    highlights: ["RBI Collaborations", "Policy Research", "NITI Aayog Projects", "International Conferences"],
  },
  "7": {
    name: "English",
    shortName: "English",
    icon: FaBookOpen,
    color: "from-indigo-500 to-violet-600",
    head: "Dr. Priya Menon",
    established: "2014",
    intake: "60",
    description: "The Department of English focuses on literature, linguistics, communication skills, and creative writing. Our programs enhance language proficiency and critical thinking.",
    vision: "To be a premier center for English language and literature studies.",
    mission: "To develop articulate and creative professionals with excellent communication skills.",
    programs: [
      { name: "B.A. (Hons) English", duration: "3 Years", mode: "Full Time" },
      { name: "M.A. English", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. English", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Priya Menon (Professor & Head)", "Dr. James Cooper (Associate Professor)", "Dr. Sushmita Dey (Assistant Professor)"],
    facilities: ["Language Lab", "Audio-Visual Room", "Literature Lab", "Creative Writing Studio"],
    highlights: ["Foreign Language Teaching", "Media Training", "Literary Fest", "Publication Support"],
  },
  "8": {
    name: "Hindi",
    shortName: "Hindi",
    icon: FaPen,
    color: "from-orange-500 to-red-600",
    head: "Dr. Ramashankar",
    established: "2014",
    intake: "50",
    description: "The Department of Hindi offers programs in Hindi literature, linguistics, media writing, and translation. We promote Hindi language and literary heritage.",
    vision: "To preserve and promote Hindi language and literature.",
    mission: "To produce scholars skilled in Hindi language, literature, and communication.",
    programs: [
      { name: "B.A. (Hons) Hindi", duration: "3 Years", mode: "Full Time" },
      { name: "M.A. Hindi", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Hindi", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Ramashankar (Professor & Head)", "Dr. Usha Singh (Associate Professor)", "Dr. Dharmendra (Assistant Professor)"],
    facilities: ["Media Lab", "Translation Studio", "Seminar Hall", "Research Library"],
    highlights: ["Translation Projects", "Literary Awards", "Media Collaborations", "Publication Support"],
  },
  "9": {
    name: "History",
    shortName: "History",
    icon: FaHistory,
    color: "from-yellow-600 to-amber-600",
    head: "Dr. Kanhaiya Lal",
    established: "2015",
    intake: "40",
    description: "The Department of History offers comprehensive study of ancient, medieval, and modern history. Our programs focus on historical research, archaeology, and cultural heritage.",
    vision: "To foster understanding of historical heritage and promote research.",
    mission: "To produce historians equipped with analytical and research skills.",
    programs: [
      { name: "B.A. (Hons) History", duration: "3 Years", mode: "Full Time" },
      { name: "M.A. History", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. History", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Kanhaiya Lal (Professor & Head)", "Dr. Sunita Devi (Associate Professor)", "Dr. Raghunath (Assistant Professor)"],
    facilities: ["History Museum", "Archaeology Lab", "Archival Room", "Research Library"],
    highlights: ["Excavation Projects", "Heritage Walks", "Museum Collaborations", "Publication Support"],
  },
  "10": {
    name: "Law & Governance",
    shortName: "Law",
    icon: FaScale,
    color: "from-slate-700 to-gray-800",
    head: "Dr. Justice Verma",
    established: "2016",
    intake: "60",
    description: "The Department of Law offers integrated and postgraduate programs in law. Our focus is on legal education, research, and producing competent legal professionals.",
    vision: "To be a center of excellence in legal education and research.",
    mission: "To produce legally literate professionals committed to justice and rule of law.",
    programs: [
      { name: "B.A. LL.B. (Hons)", duration: "5 Years", mode: "Full Time" },
      { name: "LL.M.", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Law", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Justice Verma (Professor & Head)", "Dr. Advocate Singh (Associate Professor)", "Dr. Legal Expert (Assistant Professor)"],
    facilities: ["Moot Court", "Legal Aid Clinic", "Library", "Seminar Hall"],
    highlights: ["CLAT Coaching", "Legal Aid Camps", "Court Visits", "Internship Support"],
  },
  "11": {
    name: "Mathematics",
    shortName: "Mathematics",
    icon: FaCalculator,
    color: "from-rose-500 to-pink-600",
    head: "Dr. Sushil Kumar",
    established: "2014",
    intake: "50",
    description: "The Department of Mathematics offers programs in pure and applied mathematics. Our curriculum develops analytical thinking and problem-solving skills essential for research and industry.",
    vision: "To excel in mathematics education and applied research.",
    mission: "To nurture mathematical thinkers for academia, research, and industry.",
    programs: [
      { name: "B.Sc. (Hons) Mathematics", duration: "3 Years", mode: "Full Time" },
      { name: "M.Sc. Mathematics", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Mathematics", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Sushil Kumar (Professor & Head)", "Dr. Geeta Devi (Associate Professor)", "Dr. Mahesh Prasad (Assistant Professor)"],
    facilities: ["Mathematics Lab", "Computing Facility", "Research Library", "Seminar Hall"],
    highlights: ["NET/GATE Coaching", "Research Publications", "International Collaborations", "Mathematical Olympiad"],
  },
  "12": {
    name: "Physics",
    shortName: "Physics",
    icon: FaAtom,
    color: "from-blue-600 to-indigo-700",
    head: "Dr. Chandrashekhar",
    established: "2014",
    intake: "60",
    description: "The Department of Physics offers comprehensive programs in classical, modern, and applied physics. Our focus is on experimental and theoretical physics research.",
    vision: "To be a center of excellence in physics education and research.",
    mission: "To produce physicists equipped for careers in research, industry, and academia.",
    programs: [
      { name: "B.Sc. (Hons) Physics", duration: "3 Years", mode: "Full Time" },
      { name: "M.Sc. Physics", duration: "2 Years", mode: "Full Time" },
      { name: "Ph.D. Physics", duration: "3-5 Years", mode: "Full Time" },
    ],
    faculty: ["Dr. Chandrashekhar (Professor & Head)", "Dr. Indu Bala (Associate Professor)", "Dr. Ajay Kumar (Assistant Professor)", "Dr. Neelam (Assistant Professor)"],
    facilities: ["Physics Lab", "Electronics Lab", "Computing Lab", "Astronomy Lab", "Research Lab"],
    highlights: ["UGC Funded Projects", "IUCAA Collaborations", "Research Publications", "Workshop Series"],
  },
};

export default function DepartmentDetail() {
  const { id } = useParams();
  const department = departmentData[id];

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Department Not Found</h2>
          <Link to="/departments" className="text-blue-600 hover:underline">Back to Departments</Link>
        </div>
      </div>
    );
  }

  const Icon = department.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${department.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
          <Link 
            to="/departments" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
          >
            <FaArrowLeft /> Back to Departments
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <Icon className="text-4xl sm:text-5xl text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm mb-1">Department of</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{department.name}</h1>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 bg-white/20 rounded-full">Est. {department.established}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full">Intake: {department.intake}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full">HOD: {department.head}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* About */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            About Department
          </h2>
          <p className="text-gray-600 leading-relaxed">{department.description}</p>
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-blue-100">{department.vision}</p>
          </section>
          <section className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-green-100">{department.mission}</p>
          </section>
        </div>

        {/* Programs */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
            Programs Offered
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {department.programs.map((prog, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-blue-600" />
                  <h3 className="font-semibold text-gray-800">{prog.name}</h3>
                </div>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>Duration: {prog.duration}</span>
                  <span>Mode: {prog.mode}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-600 rounded-full"></span>
            Faculty Members
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {department.faculty.map((member, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUsers className="text-blue-600" />
                </div>
                <span className="text-gray-700">{member}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-teal-600 rounded-full"></span>
            Infrastructure & Facilities
          </h2>
          <div className="flex flex-wrap gap-2">
            {department.facilities.map((facility, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm hover:bg-blue-100 hover:text-blue-700 transition">
                {facility}
              </span>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
            Key Highlights
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {department.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <FaAward className="text-yellow-600" />
                <span className="text-gray-700 text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Interested in this Department?</h2>
          <p className="text-red-100 mb-4">Apply for admissions and start your journey with us!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition">
              Apply Now
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

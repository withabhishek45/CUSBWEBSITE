import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const importantLinks = [
  { label: "UGC", url: "https://www.ugc.gov.in" },
  { label: "AICTE", url: "https://www.aicte-india.org" },
  { label: "NCTE", url: "https://www.ncte.india.in" },
  { label: "RTI", url: "#" },
  { label: "Terms & Conditions", url: "#" },
  { label: "Privacy Policy", url: "#" },
];

const quickLinks = [
  { label: "Students", path: "/students" },
  { label: "Notices", path: "/notices" },
  { label: "Examinations", path: "/students#exams" },
  { label: "Scholarships", path: "/students#scholarships" },
  { label: "Contact", path: "/contact" },
];

const departments = [
  { name: "Bioinformatics", path: "/departments/bioinformatics" },
  { name: "Geology", path: "/departments/geology" },
  { name: "Geography", path: "/departments/geography" },
  { name: "Life Sciences", path: "/departments/life-sciences" },
  { name: "Biotechnology", path: "/departments/biotechnology" },
  { name: "Environmental Sciences", path: "/departments/environmental-sciences" },
  { name: "History & Archaeology", path: "/departments/history-archaeology" },
  { name: "Economics", path: "/departments/economics" },
  { name: "Political Studies", path: "/departments/political-studies" },
  { name: "Sociology", path: "/departments/sociology" },
  { name: "Library & Information Science", path: "/departments/library-science" },
  { name: "Chemistry", path: "/departments/chemistry" },
  { name: "Physics", path: "/departments/physics" },
  { name: "Mathematics", path: "/departments/mathematics" },
  { name: "Statistics", path: "/departments/statistics" },
  { name: "Computer Science", path: "/departments/computer-science" },
  { name: "Teacher Education", path: "/departments/teacher-education" },
  { name: "Physical Education", path: "/departments/physical-education" },
  { name: "English", path: "/departments/english" },
  { name: "Indian Languages", path: "/departments/indian-languages" },
  { name: "Mass Communication", path: "/departments/mass-communication" },
  { name: "Commerce", path: "/departments/commerce" },
  { name: "Psychology", path: "/departments/psychology" },
  { name: "Law", path: "/departments/law" },
  { name: "Pharmacy", path: "/departments/pharmacy" },
  { name: "Agriculture", path: "/departments/agriculture" },
];

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="bg-red-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-yellow-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Central University of South Bihar</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2"><FaMapMarker /> NH-120, Gaya Panchanpur Road, Gaya - 824236 (Bihar)</p>
              <p className="flex items-center gap-2"><FaPhone /> +91-631-2229530</p>
              <p className="flex items-center gap-2"><FaEnvelope /> registrar@cusb.ac.in</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Schools</h3>
            <div className="grid grid-cols-2 gap-1 text-sm text-gray-300">
              {departments.slice(0, 13).map((dept) => (
                <Link key={dept.path} to={dept.path} className="hover:text-yellow-300">
                  {dept.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Departments</h3>
            <div className="grid grid-cols-2 gap-1 text-sm text-gray-300">
              {departments.slice(13).map((dept) => (
                <Link key={dept.path} to={dept.path} className="hover:text-yellow-300">
                  {dept.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Important Links</h3>
            <div className="space-y-1 text-sm text-gray-300">
              {importantLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6846877892494!2d84.88686167497507!3d24.872126977921678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d2ba5426f7dbf%3A0x3c4a04dfea5ac7fb!2sCentral%20University%20of%20South%20Bihar%20(Gaya)!5e1!3m2!1sen!2sin!4v1773949721037!5m2!1sen!2sin"
              className="w-full h-40 rounded"
              style={{ border: 0 }}
              loading="lazy"
              title="CUSB Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4 text-xl">
              <a href="https://www.facebook.com/cusbofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
              <a href="https://x.com/cusbofficial" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaTwitter /></a>
              <a href="https://www.youtube.com/@CUSBofficialchannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-400"><FaYoutube /></a>
              <a href="https://www.instagram.com/cusbofficialpage/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
              <a href="https://www.linkedin.com/school/cusb/posts/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
            </div>
            <p className="text-sm text-gray-400 text-center">© 2026 Central University of South Bihar. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

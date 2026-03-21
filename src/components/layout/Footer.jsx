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

const departments = [
  "Agriculture", "Biotechnology", "Chemistry", "Commerce & Business Studies",
  "Computer Science", "Economics", "English", "Hindi", "History",
  "Law & Governance", "Mathematics", "Physics", "Political Studies & IR",
  "Psychology", "Sociology", "Statistics", "Teacher Education",
];

const importantLinks = [
  { label: "UGC", url: "https://www.ugc.gov.in" },
  { label: "AICTE", url: "https://www.aicte-india.org" },
  { label: "NCTE", url: "https://www.ncte.india.in" },
  { label: "RTI", url: "#" },
  { label: "Terms & Conditions", url: "#" },
  { label: "Privacy Policy", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      {/* Quick Links Bar */}
      <div className="bg-red-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            <Link to="/students" className="hover:text-yellow-300">Students</Link>
            <Link to="/faculty-staff" className="hover:text-yellow-300">Faculty & Staff</Link>
            <Link to="/research" className="hover:text-yellow-300">Research</Link>
            <Link to="/download" className="hover:text-yellow-300">Downloads</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Central University of South Bihar</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2"><FaMapMarker /> NH-120, Gaya Panchanpur Road, Gaya - 824236 (Bihar)</p>
              <p className="flex items-center gap-2"><FaPhone /> +91-631-2229530</p>
              <p className="flex items-center gap-2"><FaEnvelope /> registrar@cusb.ac.in</p>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-bold mb-4">Departments</h3>
            <div className="grid grid-cols-2 gap-1 text-sm text-gray-300">
              {departments.slice(0, 10).map((dept) => (
                  <Link key={dept} to="/departments" className="hover:text-yellow-300">{dept}</Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {importantLinks.map((link) => (
                <li key={link.label}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
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

      {/* Social & Copyright */}
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

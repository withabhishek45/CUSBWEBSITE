import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const departments = [
    "Agriculture",
    "Bioinformatics",
    "Biotechnology",
    "Chemistry",
    "Commerce & Business Studies",
    "Computer Science",
    "Economic Studies",
    "English",
    "Geography",
    "Geology",
    "Hindi",
    "History",
    "Law & Governance",
    "Life Science",
    "Mass Communication",
    "Mathematics",
    "Pharmacy",
    "Physical Education",
    "Physics",
    "Political Studies & IR",
    "Psychological Science",
    "Sociological Studies",
    "Statistics",
    "Teacher Education",
  ];

  return (
    <div className="mt-4 text-white bg-[#5b0f0f]">

      {/* 🔴 TOP LINKS */}
      <div className="flex flex-wrap justify-center gap-6 px-6 py-4 text-sm border-b border-gray-400">
        <p className="cursor-pointer hover:text-yellow-300">{t('footer.students')}</p>
        <p className="cursor-pointer hover:text-yellow-300">{t('footer.facultyStaff')}</p>
        <p className="cursor-pointer hover:text-yellow-300">{t('footer.alumni')}</p>
        <p className="cursor-pointer hover:text-yellow-300">{t('footer.industry')}</p>
        <p className="cursor-pointer hover:text-yellow-300">{t('footer.directory')}</p>
        <p className="cursor-pointer hover:text-yellow-300">{t('footer.contact')}</p>
      </div>

      {/* 🔴 DEPARTMENTS */}
      <div className="px-6 py-6 border-b border-gray-400">
<h2 className="mb-4 text-lg font-bold">{t('footer.departments')}</h2>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-200 md:grid-cols-3 lg:grid-cols-5">
          {departments.sort().map((dep, i) => (
            <p key={i} className="cursor-pointer hover:text-yellow-300">
              {dep}
            </p>
          ))}
        </div>
      </div>

      {/* 🔴 MAIN SECTION */}
      <div className="grid gap-8 p-8 md:grid-cols-3">

        {/* Left - Contact */}
        <div>
<h2 className="mb-3 text-lg font-bold">
            {t('footer.university')}
          </h2>

          <p><strong>Reception:</strong> +91-631-2229530</p>
          <p><strong>Information:</strong> +91-631-2229507</p>

          <p className="mt-3">
            <strong>Address:</strong> NH-120, Gaya Panchanpur Road
          </p>
          <p>Gaya - 824236 (Bihar) India</p>

          <p className="mt-3">
            <strong>Email:</strong> registrar@cub.ac.in
          </p>
        </div>

        {/* Middle - Map */}
        <div>
<h2 className="mb-3 text-lg font-bold">{t('footer.locateUs')}</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6846877892494!2d84.88686167497507!3d24.872126977921678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d2ba5426f7dbf%3A0x3c4a04dfea5ac7fb!2sCentral%20University%20of%20South%20Bihar%20(Gaya)!5e1!3m2!1sen!2sin!4v1773949721037!5m2!1sen!2sin"
            className="w-full h-48 rounded"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* Right - Links */}
        <div>
          <h2 className="mb-3 text-lg font-bold">Important Links</h2>

          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-yellow-300">UGC</li>
            <li className="cursor-pointer hover:text-yellow-300">AICTE</li>
            <li className="cursor-pointer hover:text-yellow-300">NCTE</li>
            <li className="cursor-pointer hover:text-yellow-300">Pharmacy Council</li>
            <li className="cursor-pointer hover:text-yellow-300">Scholarship Portal</li>
          </ul>
        </div>
      </div>

      {/* 🔴 SOCIAL */}
      <div className="py-4 text-center border-t border-gray-400">
        <p className="mb-2 font-semibold">FOLLOW US</p>

        <div className="flex justify-center gap-4 text-xl">
          <a href="https://www.facebook.com/cusbofficial/" target="_blank" rel="noopener noreferrer"><FaFacebook className="cursor-pointer hover:text-blue-500" /></a>
          <a href="https://x.com/cusbofficial?lang=en" target="_blank" rel="noopener noreferrer"><FaTwitter className="cursor-pointer hover:text-blue-400" /></a>
          <a href="https://www.youtube.com/@CUSBofficialchannel" target="_blank" rel="noopener noreferrer"><FaYoutube className="cursor-pointer hover:text-red-500" /></a>
          <a href="https://www.instagram.com/cusbofficialpage/" target="_blank" rel="noopener noreferrer"><FaInstagram className="cursor-pointer hover:text-pink-500" /></a>
          <a href="https://www.linkedin.com/school/cusb/posts/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="cursor-pointer hover:text-blue-700" /></a>
        </div>
      </div>

      {/* 🔴 BOTTOM */}
      <div className="py-3 text-sm text-center bg-red-800">
        © 2026 Central University of South Bihar
      </div>
    </div>
  );
}

export default Footer;
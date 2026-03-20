import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.administration': 'Administration',
      'nav.students': 'Students',
      'nav.faculty': 'Faculty',
      'nav.visitors': 'Visitors',
      'nav.notices': 'Notices',
      'nav.studentLogin': 'Student Login',
      'nav.employeeLogin': 'Employee Login',
      'nav.search': 'Search...',
      'nav.social': 'Social',
      
      // Language
      'language.en': 'English',
      'language.hi': 'हिंदी',
      
      // Footer
      'footer.students': 'Students',
      'footer.facultyStaff': 'Faculty & Staff',
      'footer.alumni': 'Alumni',
      'footer.industry': 'Industry',
      'footer.directory': 'Directory',
      'footer.contact': 'Contact',
      'footer.departments': 'Departments',
      'footer.university': 'Central University of South Bihar',
      'footer.reception': 'Reception',
      'footer.information': 'Information',
      'footer.address': 'Address',
      'footer.email': 'Email',
      'footer.locateUs': 'Locate Us',
      'footer.importantLinks': 'Important Links',
      'footer.followUs': 'FOLLOW US',
      'footer.copyright': '© 2026 Central University of South Bihar',
      
      // About
      'about.title': 'About University',
      'about.desc1': 'Central University of South Bihar, Gaya, India is one among 54 such universities of Federal Government. It was established under the Central Universities Act, 2009 and later renamed as CUSB.',
      'about.desc2': 'It is an institution of higher learning in Bihar. With the motto \"Collective Reasoning\", the university conducts academic and administrative activities from its campus.',
      'about.desc3': 'The campus is spread across 300 acres of land and is located near Gaya city.',
      'about.president': 'President of India',
      'about.chancellor': 'Chancellor',
      'about.viceChancellor': 'Vice-Chancellor',
      'about.readMore': 'READ MORE',
      
      // Students page
      'students.prospective': 'Prospective Students',
      'students.current': 'Current Students',
      
      // Notices
      'notices.academicCalendar': 'Academic Calendar',
      'notices.academicNotices': 'Academic Notices & Notifications',
      
      // Announcements
      'announcements.title': '📌 Announcements',
      
      // Visitors (from search)
      'visitors.virtualTour': 'Virtual Campus Tour',
      'visitors.getDirections': 'Get Directions',
      'visitors.academicBlocks': 'Academic Blocks A-E',
      'visitors.centralLibrary': 'Central Library',
      'visitors.sportsComplex': 'Sports & Recreation Complex',
      'visitors.visitingHours': 'Visiting Hours',
      'visitors.freeParking': 'Free Parking',
      'visitors.accessible': 'Fully Accessible',
      
      // Programmes
      'programmes.academicNotices': 'Academic Notices / Exam Notices',
      'programmes.admission': 'Admission (2026-27)',
      
      // Administration
      'administration.contactAdmin': 'Contact Administration',
      
      // Departments array (dynamic, handle separately or list keys)
      // Add more as we edit files
    }
  },
  hi: {
    translation: {
      // Navigation
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.administration': 'प्रशासन',
      'nav.students': 'छात्र',
      'nav.faculty': 'फैकल्टी',
      'nav.visitors': 'आगंतुक',
      'nav.notices': 'सूचनाएं',
      'nav.studentLogin': 'छात्र लॉगिन',
      'nav.employeeLogin': 'कर्मचारी लॉगिन',
      'nav.search': 'खोजें...',
      'nav.social': 'सोशल',
      
      // Language
      'language.en': 'English',
      'language.hi': 'हिंदी',
      
      // Footer
      'footer.students': 'छात्र',
      'footer.facultyStaff': 'फैकल्टी और स्टाफ',
      'footer.alumni': 'पूर्व छात्र',
      'footer.industry': 'उद्योग',
      'footer.directory': 'डायरेक्टरी',
      'footer.contact': 'संपर्क',
      'footer.departments': 'विभाग',
      'footer.university': 'सेंट्रल यूनिवर्सिटी ऑफ साउथ बिहार',
      'footer.reception': 'स्वागत कक्ष',
      'footer.information': 'जानकारी',
      'footer.address': 'पता',
      'footer.email': 'ईमेल',
      'footer.locateUs': 'हमें ढूंढें',
      'footer.importantLinks': 'महत्वपूर्ण लिंक',
      'footer.followUs': 'हमें फॉलो करें',
      'footer.copyright': '© 2026 सेंट्रल यूनिवर्सिटी ऑफ साउथ बिहार',
      
      // About
      'about.title': 'विश्वविद्यालय के बारे में',
      'about.desc1': 'सेंट्रल यूनिवर्सिटी ऑफ साउथ बिहार, गया, भारत संघीय सरकार के 54 ऐसे विश्वविद्यालयों में से एक है। यह केंद्रीय विश्वविद्यालय अधिनियम, 2009 के तहत स्थापित किया गया था और बाद में CUSB नाम दिया गया।',
      'about.desc2': 'यह बिहार में उच्च शिक्षा का संस्थान है। \"सामूहिक तर्क\" के मotto के साथ, विश्वविद्यालय अपने कैंपस से शैक्षणिक और प्रशासनिक गतिविधियों का संचालन करता है।',
      'about.desc3': 'कैंपस 300 एकड़ भूमि में फैला हुआ है और गया शहर के पास स्थित है।',
      'about.president': 'भारत के राष्ट्रपति',
      'about.chancellor': 'कुलाधिपति',
      'about.viceChancellor': 'कुलपति',
      'about.readMore': 'और पढ़ें',
      
      // Students page
      'students.prospective': 'संभावित छात्र',
      'students.current': 'वर्तमान छात्र',
      
      // Notices
      'notices.academicCalendar': 'शैक्षणिक कैलेंडर',
      'notices.academicNotices': 'शैक्षणिक सूचनाएं और अधिसूचनाएं',
      
      // Announcements
      'announcements.title': '📌 घोषणाएँ',
      
      // Visitors
      'visitors.virtualTour': 'आभासी कैंपस टूर',
      'visitors.getDirections': 'दिशा-निर्देश प्राप्त करें',
      'visitors.academicBlocks': 'शैक्षणिक ब्लॉक्स A-E',
      'visitors.centralLibrary': 'केंद्रीय पुस्तकालय',
      'visitors.sportsComplex': 'खेल और मनोरंजन कॉम्प्लेक्स',
      'visitors.visitingHours': 'भेंट का समय',
      'visitors.freeParking': 'मुफ्त पार्किंग',
      'visitors.accessible': 'पूर्ण रूप से सुलभ',
      
      // Programmes
      'programmes.academicNotices': 'शैक्षणिक सूचनाएं / परीक्षा सूचनाएं',
      'programmes.admission': 'प्रवेश (2026-27)',
      
      // Administration
      'administration.contactAdmin': 'प्रशासन से संपर्क करें',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


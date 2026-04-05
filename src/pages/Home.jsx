import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaGraduationCap, FaUserGraduate, FaFlask, FaBook, FaAward, FaCalendar, 
  FaArrowRight, FaChevronLeft, FaChevronRight, FaBullhorn, FaNewspaper,
  FaUsers, FaLaptop, FaSearch, FaExternalLinkAlt, FaClock, FaMapMarker,
  FaPhone, FaEnvelope, FaArrowUp
} from "react-icons/fa";
import { api } from "../utils/api";
import BackToTop from "../components/layout/BackToTop";

export default function Home() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const allData = await api.getAll();
      if (allData) {
        setNews(allData.news || []);
        setEvents(allData.events?.filter(e => e.type === "upcoming") || []);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Quick Links Bar */}
      <QuickLinks />

      {/* Latest News & Updates */}
      <NewsSection news={news} loading={loading} />

      {/* Statistics */}
      <StatsSection />

      {/* Departments */}
      <DepartmentsSection />

      {/* Upcoming Events */}
      <EventsSection events={events} loading={loading} />

      {/* Research Highlights */}
      <ResearchSection />

      {/* Gallery */}
      <GallerySection />

      {/* Contact CTA */}
      <ContactCTA />

      <BackToTop />
    </div>
  );
}

// Hero Slider Component
function HeroSlider() {
  const slides = [
    { id: 1, src: "/images/fd27.jpeg", title: "Welcome to Central University of South Bihar", subtitle: "Excellence in Education, Innovation in Research" },
    { id: 2, src: "/images/interconf.jpg", title: "A Legacy of Research Excellence", subtitle: "Shaping the Future Through Knowledge" },
    { id: 3, src: "/images/2.jpg", title: "World Class Education", subtitle: "Join Thousands of Students Pursuing Excellence" },
    { id: 4, src: "/images/interconv.jpg", title: "Innovation & Excellence", subtitle: "Building Tomorrow Through Education Today" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </Link>
              <Link to="/about" className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 backdrop-blur transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button onClick={() => setCurrent(prev => prev === 0 ? slides.length - 1 : prev - 1)} 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
        <FaChevronLeft className="text-gray-800" />
      </button>
      <button onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
        <FaChevronRight className="text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${i === current ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}

// Quick Links Component
function QuickLinks() {
  const links = [
    { icon: FaGraduationCap, label: "Admissions", color: "bg-blue-600", path: "/admissions" },
    { icon: FaUserGraduate, label: "Students", color: "bg-green-600", path: "/students" },
    { icon: FaBook, label: "Departments", color: "bg-purple-600", path: "/departments" },
    { icon: FaFlask, label: "Research", color: "bg-orange-600", path: "/students" },
    { icon: FaAward, label: "Notices", color: "bg-red-600", path: "/notices" },
    { icon: FaUsers, label: "Faculty", color: "bg-teal-600", path: "/departments" },
  ];

  return (
    <div className="bg-white shadow-lg -mt-4 mx-4 md:mx-8 rounded-xl relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-100">
        {links.map((link, i) => (
          <Link key={i} to={link.path} className="flex flex-col items-center p-4 hover:bg-gray-50 transition">
            <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center mb-2`}>
              <link.icon className="text-xl text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// News Section
function NewsSection({ news, loading }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FaNewspaper className="text-2xl text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Latest News & Announcements</h2>
        </div>
        <Link to="/notices" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
          View All <FaArrowRight className="text-sm" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-xl animate-pulse" />
          ))
        ) : news.slice(0, 3).map((item, i) => (
          <Link key={item.id} to="/notices" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 overflow-hidden">
                <img src={item.image || "https://picsum.photos/seed/news/600/400"} alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{item.type}</span>
                <h3 className="font-semibold text-gray-800 mt-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                  <FaClock className="text-xs" /> {item.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Statistics Section
function StatsSection() {
  const stats = [
    { value: "4500+", label: "Students", color: "text-blue-600" },
    { value: "220+", label: "Faculty", color: "text-green-600" },
    { value: "12", label: "Departments", color: "text-purple-600" },
    { value: "50+", label: "Programs", color: "text-orange-600" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">CUSB at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Departments Section
function DepartmentsSection() {
  const departments = [
    { name: "Agriculture", icon: FaLeaf, color: "bg-green-500" },
    { name: "Biotechnology", icon: FaFlask, color: "bg-blue-500" },
    { name: "Chemistry", icon: FaFlask, color: "bg-purple-500" },
    { name: "Commerce", icon: FaBook, color: "bg-orange-500" },
    { name: "Computer Science", icon: FaLaptop, color: "bg-cyan-500" },
    { name: "Economics", icon: FaChartLine, color: "bg-green-600" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-2xl text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Our Departments</h2>
        </div>
        <Link to="/departments" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
          View All <FaArrowRight className="text-sm" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {departments.map((dept, i) => (
          <Link key={i} to={`/departments/${dept.name.toLowerCase().replace(/\s+/g, '-')}`} 
            className="group bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition`}>
              <dept.icon className="text-2xl text-white" />
            </div>
            <p className="font-medium text-gray-800">{dept.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Events Section
function EventsSection({ events, loading }) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FaCalendar className="text-2xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
          </div>
          <Link to="/notices" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
            View All <FaArrowRight className="text-sm" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl animate-pulse" />
            ))
          ) : events.slice(0, 4).map((event, i) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-lg p-2 text-center min-w-[60px]">
                  <p className="text-xs">APR</p>
                  <p className="text-lg font-bold">{i + 8}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{event.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Research Section
function ResearchSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-6">
        <FaFlask className="text-2xl text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Research & Innovation</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Research Highlights</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaArrowRight className="mt-1 flex-shrink-0" />
              <span>150+ Publications in SCI Journals (2025)</span>
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight className="mt-1 flex-shrink-0" />
              <span>₹10+ Crores Research Grants</span>
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight className="mt-1 flex-shrink-0" />
              <span>25+ Active Research Projects</span>
            </li>
          </ul>
          <Link to="/students" className="inline-flex items-center gap-2 mt-6 text-white/90 hover:text-white">
            Learn More <FaExternalLinkAlt />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Collaborations</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaArrowRight className="mt-1 flex-shrink-0" />
              <span>MoU with IIT Patna</span>
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight className="mt-1 flex-shrink-0" />
              <span>Industry Partnerships</span>
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight className="mt-1 flex-shrink-0" />
              <span>International Collaborations</span>
            </li>
          </ul>
          <Link to="/students" className="inline-flex items-center gap-2 mt-6 text-white/90 hover:text-white">
            Learn More <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    "https://picsum.photos/seed/gal1/600/400",
    "https://picsum.photos/seed/gal2/600/400",
    "https://picsum.photos/seed/gal3/600/400",
    "https://picsum.photos/seed/gal4/600/400",
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FaNewspaper className="text-2xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md group">
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-40 object-cover group-hover:scale-110 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact CTA
function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-red-700 to-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/80 mb-6">
              Central University of South Bihar, Gaya - 824236 (Bihar)
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3"><FaMapMarker /> NH-120, Gaya Panchanpur Road</p>
              <p className="flex items-center gap-3"><FaPhone /> +91-631-2229530</p>
              <p className="flex items-center gap-3"><FaEnvelope /> info@cusb.ac.in</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition">
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon fallback for FaLeaf and FaChartLine
function FaLeaf({ className }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 512 512"><path d="M371.3 367.1c27.3-3.9 51.9-19.5 65.4-42.6L480 218.5l36-36-96-96L420 2.5c-23-23-57.6-31-88.5-23.9-30.9 7.1-56 31.4-63.1 61.7l-176 504c-4.1 11.8-1.4 25 6.9 34 8.3 9 21.6 11.1 32.1 4.6l176-504c2.3-6.7 6.4-12.7 11.9-17.5l144 144z"/></svg>;
}

function FaChartLine({ className }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 512 512"><path d="M496 384H64V80c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V416h448v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16zM464 96H384V48h48v48h-48zm48 144H48V160h128v48c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-48z"/></svg>;
}

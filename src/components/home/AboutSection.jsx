import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";

function AboutSection() {
  const { t } = useTranslation();
  
  const leaders = [
    { name: "Smt. Droupadi Murmu", role: t('about.president'), image: "/images/dm.jpg", path: "/president" },
    { name: "Dr. C.P Thakur", role: t('about.chancellor'), image: "/images/cpthakur-final.jpg", path: "/chancellor" },
    { name: "Prof. K. N. Singh", role: t('about.viceChancellor'), image: "/images/VC_sir2.jpg", path: "/vice-chancellor" },
  ];

  const stats = [
    { icon: FaUsers, value: "4100+", label: "Students" },
    { icon: FaUniversity, value: "54", label: "Central Universities" },
    { icon: FaCalendarAlt, value: "2009", label: "Established" },
    { icon: FaMapMarkerAlt, value: "300", label: "Acres Campus" },
  ];

  return (
    <section className="py-6 sm:py-10 md:py-12 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="h-6 sm:h-8 w-1 bg-green-600 rounded-full"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{t('about.title')}</h2>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-3 sm:p-4 rounded-xl shadow-md text-center">
              <stat.icon className="text-green-600 text-lg sm:text-2xl mx-auto mb-1 sm:mb-2" />
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Text */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              <strong>Central University of South Bihar, Gaya</strong> is one among 54 central universities of the Federal Government of India. It was established under the <strong>Central Universities Act, 2009</strong>.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              {t('about.desc2')}
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The campus is spread across <strong>300 acres</strong> of land and is located near Gaya city in Bihar, India.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Read More →
            </Link>
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {leaders.map((leader) => (
              <div key={leader.path} className="bg-blue-50 p-2 sm:p-3 md:p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                <div className="h-20 sm:h-28 md:h-36 overflow-hidden rounded-lg mb-2 sm:mb-3 md:mb-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 mb-0.5 sm:mb-1 leading-tight">{leader.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{leader.role}</p>
                  </div>
                  <Link 
                    to={leader.path} 
                    className="w-full text-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-blue-700 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-800 transition mt-auto"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

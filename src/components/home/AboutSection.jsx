import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AboutSection() {
  const { t } = useTranslation();
  
  const leaders = [
    { name: "Smt. Droupadi Murmu", role: t('about.president'), image: "/images/dm.jpg", path: "/president" },
    { name: "Dr. C.P Thakur", role: t('about.chancellor'), image: "/images/cpthakur-final.jpg", path: "/chancellor" },
    { name: "Prof. K. N. Singh", role: t('about.viceChancellor'), image: "/images/VC_sir2.jpg", path: "/vice-chancellor" },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-8 w-1 bg-green-600"></span>
          <h2 className="text-2xl font-bold text-gray-800">{t('about.title')}</h2>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Text */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Central University of South Bihar, Gaya</strong> is one among 54 central universities of the Federal Government of India. It was established under the <strong>Central Universities Act, 2009</strong>.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('about.desc2')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              The campus is spread across <strong>300 acres</strong> of land and is located near Gaya city in Bihar, India.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-3 gap-4">
            {leaders.map((leader) => (
              <div key={leader.path} className="bg-blue-50 p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                <div className="h-36 overflow-hidden rounded-lg mb-4">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{leader.name}</h3>
                    <p className="text-xs text-gray-600 mb-3">{leader.role}</p>
                  </div>
                  <Link to={leader.path} className="w-full text-center px-3 py-2 bg-blue-700 text-white text-xs rounded-lg hover:bg-blue-800 transition mt-auto">
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

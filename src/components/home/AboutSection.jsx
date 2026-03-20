import React from "react";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <div className="p-8 bg-gray-100 border-t-4 border-b-4 border-blue-700">

      {/* Heading */}
      <h2 className="pl-3 mb-6 text-3xl font-bold text-blue-700 border-l-4 border-blue-700">
        {t('about.title')}
      </h2>

      {/* 50-50 Layout */}
      <div className="grid gap-8 md:grid-cols-2">

        {/* LEFT SIDE - TEXT */}
        <div className="leading-relaxed text-gray-700">
          <p>
            <strong>{t('about.desc1')}</strong>
          </p>

          <p className="mt-4">
            {t('about.desc2')}
          </p>

          <p className="mt-4">
            {t('about.desc3')}
          </p>
        </div>

        {/* RIGHT SIDE - CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

          {/* Card 1 */}
          <div className="p-4 text-center bg-white rounded shadow">
            <img
              src="./src/assets/dm.jpg"
              alt="President"
              className="object-cover w-full h-40 rounded"
            />
            <h3 className="mt-3 font-bold">Smt. Droupadi Murmu</h3>
            <p className="text-sm">{t('about.president')}</p>
            <button className="px-4 py-1 mt-3 text-white bg-blue-600 rounded cursor-pointer">
              {t('about.readMore')}
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-4 text-center bg-white rounded shadow">
            <img
              src="./src/assets/cpthakur-final.jpg"
              alt="Chancellor"
              className="object-cover w-full h-40 rounded"
            />
            <h3 className="mt-3 font-bold">Dr. C.P Thakur</h3>
            <p className="text-sm">{t('about.chancellor')}</p>
            <button className="px-4 py-1 mt-3 text-white bg-blue-600 rounded cursor-pointer">
              {t('about.readMore')}
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-4 text-center bg-white rounded shadow">
            <img
              src="./src/assets/VC_sir2.jpg"
              alt="VC"
              className="object-cover w-full h-40 rounded"
            />
            <h3 className="mt-3 font-bold">Prof. K. N. Singh</h3>
            <p className="text-sm">{t('about.viceChancellor')}</p>
            <button className="px-4 py-1 mt-3 text-white bg-blue-600 rounded cursor-pointer">
              {t('about.readMore')}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutSection;

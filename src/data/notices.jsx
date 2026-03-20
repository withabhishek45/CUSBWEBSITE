import React from "react";
import { useTranslation } from "react-i18next";

const notices = [
  {
    title: "Holi Advisory for CUSB students",
    date: "24-Feb-2026",
  },
  {
    title:
      "List of students applied for Supplementary/Backlog Examination",
    date: "13-Feb-2026",
  },
  {
    title: "Mandatory Course Registration on SAMARTH Portal",
    date: "05-Feb-2026",
  },
  {
    title:
      "Notice regarding semester registration of UG & PG students",
    date: "04-Feb-2026",
  },
  {
    title:
      "Registration of newly enrolled Ph.D Scholars in AY 2025-26",
    date: "30-Jan-2026",
  },
];

const Notices = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">

      {/* 🔴 PAGE TITLE */}
      <div className="max-w-6xl mx-auto">
        <h1 className="pb-2 mb-6 text-3xl font-bold text-blue-700 border-b-2 border-dashed">
          {t('notices.academicNotices')}
        </h1>

        {/* 🔴 ACADEMIC CALENDAR */}
        <div className="mb-8 bg-white shadow">
          <div className="px-4 py-2 font-semibold text-white bg-red-700">
            {t('notices.academicCalendar')}
          </div>

          <ul className="p-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>Academic Calendar AY 2025-26 for B.Sc Agriculture</li>
            <li>Academic Calendar AY 2025-26 for Diploma students</li>
            <li>Academic Calendar AY 2025-26 for PhD Students</li>
            <li>Even Semester Calendar (Jan–June 2026)</li>
          </ul>
        </div>

        {/* 🔴 NOTICE TABLE */}
        <div className="bg-white shadow">

          <div className="px-4 py-2 font-semibold text-white bg-red-700">
            Academic Notices & Notifications
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3">Title</th>
                  <th className="w-40 p-3">Published Date</th>
                </tr>
              </thead>

              <tbody>
                {notices.map((item, index) => (
                  <tr
                    key={index}
                    className="transition border-t hover:bg-gray-100"
                  >
                    <td className="p-3 text-blue-700 cursor-pointer hover:underline">
                      {item.title}
                    </td>
                    <td className="p-3">{item.date}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Notices;
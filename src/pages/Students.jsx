import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, desc, img }) => {
  return (
    <div className="flex items-center gap-4 p-6 transition bg-white border shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1 group">
      <img
        src={img}
        alt={title}
        className="object-cover w-24 h-20 transition rounded-lg group-hover:scale-105"
      />
      <div>
        <h3 className="mb-1 font-semibold text-gray-800 group-hover:text-orange-600">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

const Students = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="mx-auto max-w-7xl">

        {/* ✅ SIMPLE HEADER */}
        <h1 className="pb-2 mb-6 text-3xl font-bold text-blue-700 border-b-2 border-dashed">
          Student Portal
        </h1>

        <p className="mb-10 text-gray-700">
          Access all student-related services, academic resources and campus life information.
        </p>

        {/* ✅ MAIN GRID */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="space-y-12 lg:col-span-2">

            {/* Prospective Students */}
            <section>
              <h2 className="mb-6 text-xl font-semibold text-blue-600">
                {t("students.prospective") || "Prospective Students"}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Academic Curricula" desc="Semester schedule & courses" img="https://picsum.photos/seed/1/300/200" />
                <Card title="JoSAA Counselling" desc="Admission guidance" img="https://picsum.photos/seed/2/300/200" />
                <Card title="Scholarships" desc="Financial support programs" img="https://picsum.photos/seed/3/300/200" />
                <Card title="UG Programmes" desc="Undergraduate courses" img="https://picsum.photos/seed/4/300/200" />
                <Card title="PG Programmes" desc="Postgraduate courses" img="https://picsum.photos/seed/5/300/200" />
                <Card title="Research PhD" desc="Doctoral programmes" img="https://picsum.photos/seed/6/300/200" />
              </div>
            </section>

            {/* Current Students */}
            <section>
              <h2 className="mb-6 text-xl font-semibold text-blue-600">
                {t("students.current") || "Current Students"}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Academic Portal" desc="Grades & registration" img="https://picsum.photos/seed/7/300/200" />
                <Card title="Class Timetable" desc="Daily schedule" img="https://picsum.photos/seed/8/300/200" />
                <Card title="Academic Calendar" desc="Important dates" img="https://picsum.photos/seed/9/300/200" />
                <Card title="Fee Payment" desc="Online fee system" img="https://picsum.photos/seed/10/300/200" />
                <Card title="Hostel Fees" desc="Accommodation details" img="https://picsum.photos/seed/11/300/200" />
                <Card title="Exchange Programs" desc="Study abroad options" img="https://picsum.photos/seed/12/300/200" />
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="sticky space-y-8 top-8 h-fit">

            {/* Campus Life */}
            <div className="p-6 bg-white border shadow-md rounded-xl">
              <h3 className="mb-4 text-lg font-bold text-gray-800">
                Campus Life
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li className="p-2 rounded hover:bg-orange-50">🏠 Hostel Life</li>
                <li className="p-2 rounded hover:bg-orange-50">👥 Student Governance</li>
                <li className="p-2 rounded hover:bg-orange-50">🏏 Sports</li>
                <li className="p-2 rounded hover:bg-orange-50">🎭 Clubs & Societies</li>
              </ul>
            </div>

            {/* Quick Access */}
            <div className="p-6 border shadow-md bg-orange-50 rounded-xl">
              <h3 className="mb-4 text-lg font-bold text-orange-800">
                Quick Access
              </h3>

              <div className="space-y-2">
                <a className="block p-2 bg-white rounded hover:bg-orange-100">
                  📞 Telephone Directory
                </a>
                <a className="block p-2 bg-white rounded hover:bg-orange-100">
                  🗺️ Campus Map
                </a>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default Students;
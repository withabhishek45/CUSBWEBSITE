import { Link } from "react-router-dom";

import { recentEventsData } from "../data/recentEvents";

export default function RecentEvents() {
  const section = {
    title: "Recent Events",
    items: recentEventsData,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="text-red-400 transition-colors hover:text-red-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{section.title}</h1>
          </div>
          <p className="text-gray-600">Explore all our recent campus events and activities</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {section.items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-gray-600">{item.subtitle}</p>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
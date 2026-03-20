import { Link } from "react-router-dom";

const sections = [
  {
    id: "tenders",
    title: "Tenders",
    route: "/tenders",
    items: [
      {
        id: "tender-1",
        title: "Lab Equipment Procurement",
        subtitle: "Open until 30 Apr 2026",
        date: "25 Mar 2026",
        image: "https://picsum.photos/seed/tender1/600/400",
      },
      {
        id: "tender-2",
        title: "Campus Renovation Works",
        subtitle: "Bid submission deadline 15 May",
        date: "22 Mar 2026",
        image: "https://picsum.photos/seed/tender2/600/400",
      },
      {
        id: "tender-3",
        title: "IT Infrastructure Upgrade",
        subtitle: "Network and server enhancements",
        date: "10 Apr 2026",
        image: "https://picsum.photos/seed/tender3/600/400",
      },
      {
        id: "tender-4",
        title: "Library Books Acquisition",
        subtitle: "Academic and reference materials",
        date: "5 Apr 2026",
        image: "https://picsum.photos/seed/tender4/600/400",
      },
      {
        id: "tender-5",
        title: "Sports Equipment Supply",
        subtitle: "Gym and field equipment",
        date: "1 Apr 2026",
        image: "https://picsum.photos/seed/tender5/600/400",
      },
      {
        id: "tender-6",
        title: "Catering Services",
        subtitle: "Campus dining and events",
        date: "28 Mar 2026",
        image: "https://picsum.photos/seed/tender6/600/400",
      },
      {
        id: "tender-7",
        title: "Security System Installation",
        subtitle: "Campus safety and surveillance",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/tender7/600/400",
      },
      {
        id: "tender-8",
        title: "Green Energy Solutions",
        subtitle: "Solar panel installation",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/tender8/600/400",
      },
      {
        id: "tender-9",
        title: "Transportation Services",
        subtitle: "Student shuttle and bus services",
        date: "10 Mar 2026",
        image: "https://picsum.photos/seed/tender9/600/400",
      },
      {
        id: "tender-10",
        title: "Cleaning and Maintenance",
        subtitle: "Facility upkeep services",
        date: "5 Mar 2026",
        image: "https://picsum.photos/seed/tender10/600/400",
      },
      {
        id: "tender-11",
        title: "Digital Learning Platform",
        subtitle: "E-learning software and tools",
        date: "28 Feb 2026",
        image: "https://picsum.photos/seed/tender11/600/400",
      },
      {
        id: "tender-12",
        title: "Research Equipment",
        subtitle: "Advanced laboratory instruments",
        date: "20 Feb 2026",
        image: "https://picsum.photos/seed/tender12/600/400",
      },
    ],
  },
];

export default function Tenders() {
  const section = sections[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="text-red-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{section.title}</h1>
          </div>
          <p className="text-gray-600">Current procurement opportunities and tender notices</p>
        </div>

        {/* Tenders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {section.items.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.subtitle}</p>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
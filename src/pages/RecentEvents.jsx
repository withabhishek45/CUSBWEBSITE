import { Link } from "react-router-dom";

const sections = [
  {
    id: "recent-events",
    title: "Recent Events",
    route: "/recent-events",
    items: [
      {
        id: "event-1",
        title: "Convocation Day 2026",
        subtitle: "Ceremony and Awards",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/event1/600/400",
      },
      {
        id: "event-2",
        title: "Innovation Fest 2026",
        subtitle: "Student projects and exhibits",
        date: "12 Mar 2026",
        image: "https://picsum.photos/seed/event2/600/400",
      },
      {
        id: "event-3",
        title: "Guest Lecture Series",
        subtitle: "AI in Sustainable Systems",
        date: "5 Mar 2026",
        image: "https://picsum.photos/seed/event3/600/400",
      },
      {
        id: "event-4",
        title: "Annual Sports Meet",
        subtitle: "Inter-departmental competitions",
        date: "28 Feb 2026",
        image: "https://picsum.photos/seed/event4/600/400",
      },
      {
        id: "event-5",
        title: "Cultural Night 2026",
        subtitle: "Celebrating diversity and talent",
        date: "15 Feb 2026",
        image: "https://picsum.photos/seed/event5/600/400",
      },
      {
        id: "event-6",
        title: "Research Showcase",
        subtitle: "Faculty and student research presentations",
        date: "8 Feb 2026",
        image: "https://picsum.photos/seed/event6/600/400",
      },
      {
        id: "event-7",
        title: "Alumni Reunion 2026",
        subtitle: "Connecting past and present",
        date: "1 Feb 2026",
        image: "https://picsum.photos/seed/event7/600/400",
      },
      {
        id: "event-8",
        title: "Career Fair 2026",
        subtitle: "Industry connections and opportunities",
        date: "25 Jan 2026",
        image: "https://picsum.photos/seed/event8/600/400",
      },
      {
        id: "event-9",
        title: "Freshers Orientation",
        subtitle: "Welcome and integration session",
        date: "15 Jan 2026",
        image: "https://picsum.photos/seed/event9/600/400",
      },
      {
        id: "event-10",
        title: "Winter Festival",
        subtitle: "Seasonal celebrations and activities",
        date: "10 Jan 2026",
        image: "https://picsum.photos/seed/event10/600/400",
      },
      {
        id: "event-11",
        title: "Tech Symposium",
        subtitle: "Latest trends in technology",
        date: "5 Jan 2026",
        image: "https://picsum.photos/seed/event11/600/400",
      },
      {
        id: "event-12",
        title: "Art Workshop Series",
        subtitle: "Creative expression and skills",
        date: "28 Dec 2025",
        image: "https://picsum.photos/seed/event12/600/400",
      },
    ],
  },
];

export default function RecentEvents() {
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
          <p className="text-gray-600">Explore all our recent campus events and activities</p>
        </div>

        {/* Events Grid */}
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
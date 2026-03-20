import { Link } from "react-router-dom";

const sections = [
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    route: "/upcoming-events",
    items: [
      {
        id: "upcoming-1",
        title: "Startup Bootcamp",
        subtitle: "3-day intensive training",
        date: "8 Apr 2026",
        image: "https://picsum.photos/seed/upcoming1/600/400",
      },
      {
        id: "upcoming-2",
        title: "Research Symposium",
        subtitle: "Presentations from faculty",
        date: "18 Apr 2026",
        image: "https://picsum.photos/seed/upcoming2/600/400",
      },
      {
        id: "upcoming-3",
        title: "Campus Marathon",
        subtitle: "Health & fitness event",
        date: "26 Apr 2026",
        image: "https://picsum.photos/seed/upcoming3/600/400",
      },
      {
        id: "upcoming-4",
        title: "International Conference",
        subtitle: "Global perspectives on technology",
        date: "5 May 2026",
        image: "https://picsum.photos/seed/upcoming4/600/400",
      },
      {
        id: "upcoming-5",
        title: "Art Exhibition",
        subtitle: "Student and faculty artwork display",
        date: "12 May 2026",
        image: "https://picsum.photos/seed/upcoming5/600/400",
      },
      {
        id: "upcoming-6",
        title: "Hackathon 2026",
        subtitle: "48-hour coding challenge",
        date: "20 May 2026",
        image: "https://picsum.photos/seed/upcoming6/600/400",
      },
      {
        id: "upcoming-7",
        title: "Leadership Summit",
        subtitle: "Developing future leaders",
        date: "28 May 2026",
        image: "https://picsum.photos/seed/upcoming7/600/400",
      },
      {
        id: "upcoming-8",
        title: "Summer Internship Fair",
        subtitle: "Connect with industry partners",
        date: "5 Jun 2026",
        image: "https://picsum.photos/seed/upcoming8/600/400",
      },
      {
        id: "upcoming-9",
        title: "Environmental Awareness Week",
        subtitle: "Sustainability initiatives",
        date: "15 Jun 2026",
        image: "https://picsum.photos/seed/upcoming9/600/400",
      },
      {
        id: "upcoming-10",
        title: "Music Festival",
        subtitle: "Campus talent showcase",
        date: "22 Jun 2026",
        image: "https://picsum.photos/seed/upcoming10/600/400",
      },
      {
        id: "upcoming-11",
        title: "Tech Innovation Showcase",
        subtitle: "Cutting-edge student projects",
        date: "30 Jun 2026",
        image: "https://picsum.photos/seed/upcoming11/600/400",
      },
      {
        id: "upcoming-12",
        title: "Freshers Welcome",
        subtitle: "Welcome and integration session",
        date: "10 Jul 2026",
        image: "https://picsum.photos/seed/upcoming12/600/400",
      },
    ],
  },
];

export default function UpcomingEvents() {
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
          <p className="text-gray-600">Discover upcoming events and activities on campus</p>
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
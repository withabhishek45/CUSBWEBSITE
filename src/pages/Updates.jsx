import { Link } from "react-router-dom";

const section = {
  id: "updates",
  title: "Updates",
  items: [
    {
      id: "update-1",
      title: "New Library Hours",
      subtitle: "Open 8am–10pm starting April",
      date: "1 Apr 2026",
      image: "https://picsum.photos/seed/update1/600/400",
    },
    {
      id: "update-2",
      title: "Campus Wi-Fi Upgrade",
      subtitle: "Faster speeds arriving soon",
      date: "15 Mar 2026",
      image: "https://picsum.photos/seed/update2/600/400",
    },
    {
      id: "update-3",
      title: "Parking Policy Changes",
      subtitle: "New regulations effective April 1",
      date: "10 Apr 2026",
      image: "https://picsum.photos/seed/update3/600/400",
    },
    {
      id: "update-4",
      title: "Health Center Expansion",
      subtitle: "New services available",
      date: "8 Apr 2026",
      image: "https://picsum.photos/seed/update4/600/400",
    },
    {
      id: "update-5",
      title: "Course Registration Opens",
      subtitle: "Fall semester enrollment begins",
      date: "5 Apr 2026",
      image: "https://picsum.photos/seed/update5/600/400",
    },
    {
      id: "update-6",
      title: "New Dining Options",
      subtitle: "Cafeteria menu updates",
      date: "1 Apr 2026",
      image: "https://picsum.photos/seed/update6/600/400",
    },
    {
      id: "update-7",
      title: "Campus Shuttle Schedule",
      subtitle: "Route changes announced",
      date: "28 Mar 2026",
      image: "https://picsum.photos/seed/update7/600/400",
    },
    {
      id: "update-8",
      title: "Emergency Procedures",
      subtitle: "Updated safety protocols",
      date: "25 Mar 2026",
      image: "https://picsum.photos/seed/update8/600/400",
    },
    {
      id: "update-9",
      title: "Student ID Card Renewal",
      subtitle: "Online renewal process",
      date: "20 Mar 2026",
      image: "https://picsum.photos/seed/update9/600/400",
    },
    {
      id: "update-10",
      title: "Research Grant Applications",
      subtitle: "New funding opportunities",
      date: "15 Mar 2026",
      image: "https://picsum.photos/seed/update10/600/400",
    },
    {
      id: "update-11",
      title: "Alumni Network Expansion",
      subtitle: "New online platform",
      date: "10 Mar 2026",
      image: "https://picsum.photos/seed/update11/600/400",
    },
    {
      id: "update-12",
      title: "Sustainability Initiatives",
      subtitle: "Green campus programs",
      date: "5 Mar 2026",
      image: "https://picsum.photos/seed/update12/600/400",
    },
  ],
};

export default function Updates() {
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
          <p className="text-gray-600">Latest campus updates and announcements</p>
        </div>

        {/* Updates Grid */}
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


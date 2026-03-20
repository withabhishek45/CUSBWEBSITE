import { Link } from "react-router-dom";

const sections = [
  {
    id: "recruitment",
    title: "Recruitment",
    route: "/recruitment",
    items: [
      {
        id: "recruit-1",
        title: "Assistant Professor - Computer Science",
        subtitle: "Teaching and research position",
        date: "25 Mar 2026",
        image: "https://picsum.photos/seed/recruit1/600/400",
      },
      {
        id: "recruit-2",
        title: "Lab Technician",
        subtitle: "Science laboratory support",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/recruit2/600/400",
      },
      {
        id: "recruit-3",
        title: "Administrative Officer",
        subtitle: "Office management and coordination",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/recruit3/600/400",
      },
      {
        id: "recruit-4",
        title: "Research Associate",
        subtitle: "Research project support",
        date: "10 Mar 2026",
        image: "https://picsum.photos/seed/recruit4/600/400",
      },
      {
        id: "recruit-5",
        title: "Librarian",
        subtitle: "Library management and services",
        date: "5 Mar 2026",
        image: "https://picsum.photos/seed/recruit5/600/400",
      },
      {
        id: "recruit-6",
        title: "Sports Coach",
        subtitle: "Athletics and physical education",
        date: "28 Feb 2026",
        image: "https://picsum.photos/seed/recruit6/600/400",
      },
      {
        id: "recruit-7",
        title: "IT Support Specialist",
        subtitle: "Technical support and maintenance",
        date: "20 Feb 2026",
        image: "https://picsum.photos/seed/recruit7/600/400",
      },
      {
        id: "recruit-8",
        title: "Student Counselor",
        subtitle: "Academic and career guidance",
        date: "15 Feb 2026",
        image: "https://picsum.photos/seed/recruit8/600/400",
      },
      {
        id: "recruit-9",
        title: "Finance Officer",
        subtitle: "Budget and financial management",
        date: "10 Feb 2026",
        image: "https://picsum.photos/seed/recruit9/600/400",
      },
      {
        id: "recruit-10",
        title: "Security Guard",
        subtitle: "Campus safety and security",
        date: "5 Feb 2026",
        image: "https://picsum.photos/seed/recruit10/600/400",
      },
      {
        id: "recruit-11",
        title: "Event Coordinator",
        subtitle: "Campus activities planning",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/recruit11/600/400",
      },
      {
        id: "recruit-12",
        title: "Research Fellow",
        subtitle: "Advanced research positions",
        date: "10 Mar 2026",
        image: "https://picsum.photos/seed/recruit12/600/400",
      },
    ],
  },
];

export default function Recruitment() {
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
          <p className="text-gray-600">Current job openings and career opportunities</p>
        </div>

        {/* Recruitment Grid */}
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
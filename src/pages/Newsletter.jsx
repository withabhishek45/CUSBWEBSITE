import { Link } from "react-router-dom";

const section = {
  id: "newsletter",
  title: "Newsletter",
  items: [
    {
      id: "newsletter-1",
      title: "Spring 2026 Edition",
      subtitle: "Research breakthroughs and student achievements",
      date: "1 Apr 2026",
      image: "https://picsum.photos/seed/newsletter1/600/400",
    },
    {
      id: "newsletter-2",
      title: "Winter 2025 Edition",
      subtitle: "Holiday events and academic highlights",
      date: "15 Dec 2025",
      image: "https://picsum.photos/seed/newsletter2/600/400",
    },
    {
      id: "newsletter-3",
      title: "Fall 2025 Edition",
      subtitle: "New faculty and campus developments",
      date: "1 Oct 2025",
      image: "https://picsum.photos/seed/newsletter3/600/400",
    },
    {
      id: "newsletter-4",
      title: "Summer 2025 Edition",
      subtitle: "Graduation ceremonies and summer programs",
      date: "15 Jun 2025",
      image: "https://picsum.photos/seed/newsletter4/600/400",
    },
    {
      id: "newsletter-5",
      title: "Spring 2025 Edition",
      subtitle: "Community outreach and partnerships",
      date: "1 Apr 2025",
      image: "https://picsum.photos/seed/newsletter5/600/400",
    },
    {
      id: "newsletter-6",
      title: "Winter 2024 Edition",
      subtitle: "Year-end review and future plans",
      date: "15 Dec 2024",
      image: "https://picsum.photos/seed/newsletter6/600/400",
    },
    {
      id: "newsletter-7",
      title: "Fall 2024 Edition",
      subtitle: "Academic excellence and innovation",
      date: "1 Oct 2024",
      image: "https://picsum.photos/seed/newsletter7/600/400",
    },
    {
      id: "newsletter-8",
      title: "Summer 2024 Edition",
      subtitle: "Alumni success stories",
      date: "15 Jun 2024",
      image: "https://picsum.photos/seed/newsletter8/600/400",
    },
    {
      id: "newsletter-9",
      title: "Spring 2024 Edition",
      subtitle: "Student research and publications",
      date: "1 Apr 2024",
      image: "https://picsum.photos/seed/newsletter9/600/400",
    },
    {
      id: "newsletter-10",
      title: "Winter 2023 Edition",
      subtitle: "Campus transformation projects",
      date: "15 Dec 2023",
      image: "https://picsum.photos/seed/newsletter10/600/400",
    },
    {
      id: "newsletter-11",
      title: "Fall 2023 Edition",
      subtitle: "New programs and initiatives",
      date: "1 Oct 2023",
      image: "https://picsum.photos/seed/newsletter11/600/400",
    },
    {
      id: "newsletter-12",
      title: "Summer 2023 Edition",
      subtitle: "Community impact and engagement",
      date: "15 Jun 2023",
      image: "https://picsum.photos/seed/newsletter12/600/400",
    },
  ],
};

export default function Newsletter() {
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
          <p className="text-gray-600">University newsletters and publications</p>
        </div>

        {/* Newsletter Grid */}
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


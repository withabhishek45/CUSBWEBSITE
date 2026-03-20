import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    image: "https://picsum.photos/seed/news1/1200/700",
    title: "IIT Madras honours six educators with First Principles Teachers Award 2026",
    content:
      "Indian Institute of Technology Madras (IIT Madras) honoured six outstanding educators for their excellence in teaching. The ceremony highlighted innovative teaching approaches and student engagement strategies.",
    date: "9 Mar 2026",
    type: "Press Release",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/news2/1200/700",
    title: "IIT Madras launches Postgraduate Diploma in Manufacturing Analytics for Industry",
    content:
      "The new program is designed for industry professionals aiming to build analytics capabilities in manufacturing. It features hands-on labs, industry mentorship, and live case studies.",
    date: "5 Mar 2026",
    type: "Press Release",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/news3/1200/700",
    title: "IIT Madras study charts renewable energy pathway for Zero-Emission Trucking",
    content:
      "Researchers at IIT Madras have proposed a roadmap for reducing emissions from heavy freight transport. The study outlines technical and policy recommendations for sustainable mobility.",
    date: "26 Feb 2026",
    type: "Press Release",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/news4/1200/700",
    title: "Spectrum Inspired Low-light Image Translation for Saliency Detection",
    content:
      "A new AI technique improves low-light video analysis for real-time applications, enabling better object detection in low-visibility environments.",
    date: "18 Apr 2026",
    type: "Research",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Latest News</h1>
            <p className="text-sm text-gray-600 mt-1">
              Stay up to date with our latest announcements and research highlights.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm font-medium text-red-600 hover:underline"
            >
              Back to Home
            </Link>
            <span className="h-6 w-px bg-gray-300" />
            <span className="text-sm text-gray-500">{newsItems.length} articles</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid gap-10">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden"
          >
            <div className="h-64 md:h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {item.type} · {item.date}
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">{item.content}</p>
              <div className="mt-6">
                <Link
                  to="/news"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

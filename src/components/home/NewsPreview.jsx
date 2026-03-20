import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    image: "https://picsum.photos/seed/news1/600/400",
    title: "IIT Madras honours six educators with First Principles Teachers Award 2026",
    excerpt:
      "Indian Institute of Technology Madras (IIT Madras) honoured six outstanding educators for their excellence in teaching.",
    date: "9 Mar 2026",
    type: "Press Release",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/news2/600/400",
    title: "IIT Madras launches Postgraduate Diploma in Manufacturing Analytics for Industry",
    excerpt:
      "The new program is designed for industry professionals aiming to build analytics capabilities in manufacturing.",
    date: "5 Mar 2026",
    type: "Press Release",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/news3/600/400",
    title: "IIT Madras study charts renewable energy pathway for Zero-Emission Trucking",
    excerpt:
      "Researchers at IIT Madras have proposed a roadmap for reducing emissions from heavy freight transport.",
    date: "26 Feb 2026",
    type: "Press Release",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/news4/600/400",
    title: "Spectrum Inspired Low-light Image Translation for Saliency Detection",
    excerpt:
      "A new AI technique improves low-light video analysis for real-time applications.",
    date: "18 Apr 2026",
    type: "Research",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-12 px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="h-7 w-1 bg-red-600" />
          <h2 className="text-3xl font-bold">News</h2>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{item.date}</span>
                <span className="uppercase tracking-wide">{item.type}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

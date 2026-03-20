import { Link } from "react-router-dom";

const programmes = [
  {
    id: "agriculture",
    title: "Integrated UG-PG in Agriculture",
    subtitle: "5 Years",
    description: "Modern agriculture, agronomy and sustainable farming.",
    image: "https://picsum.photos/seed/agriculture/600/400",
  },
  {
    id: "commerce",
    title: "Integrated UG-PG in Commerce",
    subtitle: "5 Years",
    description: "Accounting, finance and business studies.",
    image: "https://picsum.photos/seed/commerce/600/400",
  },
  {
    id: "computer-science",
    title: "Integrated UG-PG in Computer Science",
    subtitle: "5 Years",
    description: "Programming, AI, data structures and software development.",
    image: "https://picsum.photos/seed/cs/600/400",
  },
  {
    id: "economics",
    title: "Integrated UG-PG in Economics",
    subtitle: "5 Years",
    description: "Micro, macro and policy studies.",
    image: "https://picsum.photos/seed/economics/600/400",
  },
  {
    id: "education",
    title: "Integrated B.A B.Ed / B.Sc B.Ed",
    subtitle: "4 Years",
    description: "Teacher training with subject specialization.",
    image: "https://picsum.photos/seed/education/600/400",
  },
  {
    id: "english",
    title: "Integrated UG-PG in English",
    subtitle: "5 Years",
    description: "Literature and communication skills.",
    image: "https://picsum.photos/seed/english/600/400",
  },
  {
    id: "geography",
    title: "Integrated UG-PG in Geography",
    subtitle: "5 Years",
    description: "Human geography and environmental studies.",
    image: "https://picsum.photos/seed/geography/600/400",
  },
  {
    id: "history",
    title: "Integrated UG-PG in History",
    subtitle: "5 Years",
    description: "Ancient, medieval and modern history.",
    image: "https://picsum.photos/seed/history/600/400",
  },
  {
    id: "hindi",
    title: "Integrated UG-PG in Hindi",
    subtitle: "5 Years",
    description: "Hindi literature and language studies.",
    image: "https://picsum.photos/seed/hindi/600/400",
  },
  {
    id: "law",
    title: "B.A. LL.B. (Hons) / B.B.A. LL.B.",
    subtitle: "5 Years",
    description: "Integrated law and legal studies.",
    image: "https://picsum.photos/seed/law/600/400",
  },
  {
    id: "mathematics",
    title: "Integrated UG-PG in Mathematics",
    subtitle: "5 Years",
    description: "Pure and applied mathematics.",
    image: "https://picsum.photos/seed/maths/600/400",
  },
  {
    id: "physics",
    title: "Integrated UG-PG in Physics",
    subtitle: "5 Years",
    description: "Theoretical and experimental physics.",
    image: "https://picsum.photos/seed/physics/600/400",
  },
  {
    id: "political",
    title: "Integrated UG-PG in Political Studies & IR",
    subtitle: "5 Years",
    description: "Political science and international relations.",
    image: "https://picsum.photos/seed/political/600/400",
  },
  {
    id: "sociology",
    title: "Integrated UG-PG in Sociology",
    subtitle: "5 Years",
    description: "Society, culture and human behavior.",
    image: "https://picsum.photos/seed/sociology/600/400",
  },
  {
    id: "statistics",
    title: "Integrated UG-PG in Statistics",
    subtitle: "5 Years",
    description: "Data analysis and statistical modelling.",
    image: "https://picsum.photos/seed/statistics/600/400",
  },
];

export default function Undergraduate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="text-red-400 hover:text-red-500">
              ← Back
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              Undergraduate Programmes
            </h1>
          </div>
          <p className="text-gray-600">
            Explore undergraduate programmes at CUSB
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((prog) => (
            <div
              key={prog.id}
              className="overflow-hidden transition bg-white border rounded-lg shadow hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  {prog.title}
                </h3>
                <p className="mb-2 text-sm text-gray-500">
                  {prog.subtitle}
                </p>
                <p className="text-sm text-gray-600">
                  {prog.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

const programmes = [
  {
    id: "bioinformatics",
    title: "M.Sc Bioinformatics",
    subtitle: "2 Years",
    description: "Genomics, proteomics and computational biology.",
    image: "https://picsum.photos/seed/bioinformatics/600/400",
  },
  {
    id: "biotechnology",
    title: "M.Sc Biotechnology",
    subtitle: "2 Years",
    description: "Molecular biology, genetics and industrial biotech.",
    image: "https://picsum.photos/seed/biotech/600/400",
  },
  {
    id: "chemistry",
    title: "M.Sc Chemistry",
    subtitle: "2 Years",
    description: "Organic, inorganic and physical chemistry.",
    image: "https://picsum.photos/seed/chemistry/600/400",
  },
  {
    id: "commerce",
    title: "M.A Commerce",
    subtitle: "2 Years",
    description: "Finance, accounting and business studies.",
    image: "https://picsum.photos/seed/commerce/600/400",
  },
  {
    id: "computer-science",
    title: "M.Sc Computer Science",
    subtitle: "2 Years",
    description: "Programming, data structures and software systems.",
    image: "https://picsum.photos/seed/cs/600/400",
  },
  {
    id: "ai",
    title: "M.Sc Artificial Intelligence",
    subtitle: "2 Years",
    description: "Machine learning, AI and data science.",
    image: "https://picsum.photos/seed/ai/600/400",
  },
  {
    id: "economics",
    title: "M.A Economics",
    subtitle: "2 Years",
    description: "Micro, macro and econometrics.",
    image: "https://picsum.photos/seed/economics/600/400",
  },
  {
    id: "english",
    title: "M.A English",
    subtitle: "2 Years",
    description: "Literature, linguistics and writing.",
    image: "https://picsum.photos/seed/english/600/400",
  },
  {
    id: "geography",
    title: "M.A Geography",
    subtitle: "2 Years",
    description: "Human geography and GIS.",
    image: "https://picsum.photos/seed/geography/600/400",
  },
  {
    id: "geology",
    title: "M.Sc Geology",
    subtitle: "2 Years",
    description: "Earth science, minerals and environment.",
    image: "https://picsum.photos/seed/geology/600/400",
  },
  {
    id: "history",
    title: "M.A History",
    subtitle: "2 Years",
    description: "Ancient, medieval and modern history.",
    image: "https://picsum.photos/seed/history/600/400",
  },
  {
    id: "hindi",
    title: "M.A Hindi",
    subtitle: "2 Years",
    description: "Hindi literature and language studies.",
    image: "https://picsum.photos/seed/hindi/600/400",
  },
  {
    id: "journalism",
    title: "M.A Journalism & Mass Communication",
    subtitle: "2 Years",
    description: "Media, communication and journalism.",
    image: "https://picsum.photos/seed/media/600/400",
  },
  {
    id: "law",
    title: "LL.M (Master of Law)",
    subtitle: "2 Years",
    description: "Advanced legal studies and specialization.",
    image: "https://picsum.photos/seed/law/600/400",
  },
  {
    id: "life-science",
    title: "M.Sc Life Science",
    subtitle: "2 Years",
    description: "Biology, ecology and life systems.",
    image: "https://picsum.photos/seed/life/600/400",
  },
  {
    id: "mathematics",
    title: "M.Sc Mathematics",
    subtitle: "2 Years",
    description: "Pure and applied mathematics.",
    image: "https://picsum.photos/seed/maths/600/400",
  },
  {
    id: "pharmacy",
    title: "M.Pharm (Pharmaceutics / Pharmacology)",
    subtitle: "2 Years",
    description: "Drug design, formulation and pharmacology.",
    image: "https://picsum.photos/seed/pharma/600/400",
  },
  {
    id: "physical-education",
    title: "M.P.Ed",
    subtitle: "2 Years",
    description: "Sports science and physical education.",
    image: "https://picsum.photos/seed/sports/600/400",
  },
  {
    id: "physics",
    title: "M.Sc Physics",
    subtitle: "2 Years",
    description: "Quantum, nuclear and applied physics.",
    image: "https://picsum.photos/seed/physics/600/400",
  },
  {
    id: "political",
    title: "M.A Political Studies & IR",
    subtitle: "2 Years",
    description: "Political science and international relations.",
    image: "https://picsum.photos/seed/political/600/400",
  },
  {
    id: "psychology",
    title: "M.A / M.Sc Psychology",
    subtitle: "2 Years",
    description: "Clinical and applied psychology.",
    image: "https://picsum.photos/seed/psychology/600/400",
  },
  {
    id: "social-work",
    title: "M.A Social Work",
    subtitle: "2 Years",
    description: "Community development and social services.",
    image: "https://picsum.photos/seed/social/600/400",
  },
  {
    id: "sociology",
    title: "M.A Sociology",
    subtitle: "2 Years",
    description: "Society, culture and human behavior.",
    image: "https://picsum.photos/seed/sociology/600/400",
  },
  {
    id: "statistics",
    title: "M.Sc Statistics / Data Science",
    subtitle: "2 Years",
    description: "Data analysis and statistical modelling.",
    image: "https://picsum.photos/seed/statistics/600/400",
  },
];

export default function Postgraduate() {
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
              Postgraduate Programmes
            </h1>
          </div>
          <p className="text-gray-600">
            Explore postgraduate programmes at CUSB
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
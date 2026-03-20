import { Link } from "react-router-dom";

const programmes = [
  {
    id: "agriculture",
    title: "PhD in Agriculture",
    subtitle: "3-5 Years",
    description: "Advanced research in agriculture, agronomy and sustainable farming.",
    image: "https://picsum.photos/seed/agriculture/600/400",
  },
  {
    id: "bioinformatics",
    title: "PhD in Bioinformatics",
    subtitle: "3-5 Years",
    description: "Research in computational biology, genomics and proteomics.",
    image: "https://picsum.photos/seed/bioinformatics/600/400",
  },
  {
    id: "biotechnology",
    title: "PhD in Biotechnology",
    subtitle: "3-5 Years",
    description: "Genetics, molecular biology and industrial biotechnology.",
    image: "https://picsum.photos/seed/biotech/600/400",
  },
  {
    id: "chemistry",
    title: "PhD in Chemistry",
    subtitle: "3-5 Years",
    description: "Organic, inorganic and physical chemistry research.",
    image: "https://picsum.photos/seed/chemistry/600/400",
  },
  {
    id: "commerce",
    title: "PhD in Commerce",
    subtitle: "3-5 Years",
    description: "Business, finance and commerce research.",
    image: "https://picsum.photos/seed/commerce/600/400",
  },
  {
    id: "computer-science",
    title: "PhD in Computer Science",
    subtitle: "3-5 Years",
    description: "AI, machine learning, data science and systems research.",
    image: "https://picsum.photos/seed/cs/600/400",
  },
  {
    id: "economics",
    title: "PhD in Economics",
    subtitle: "3-5 Years",
    description: "Development economics, econometrics and policy research.",
    image: "https://picsum.photos/seed/economics/600/400",
  },
  {
    id: "education",
    title: "PhD in Education",
    subtitle: "3-5 Years",
    description: "Teaching methods, pedagogy and education systems.",
    image: "https://picsum.photos/seed/education/600/400",
  },
  {
    id: "english",
    title: "PhD in English",
    subtitle: "3-5 Years",
    description: "Literature, linguistics and cultural studies.",
    image: "https://picsum.photos/seed/english/600/400",
  },
  {
    id: "geography",
    title: "PhD in Geography",
    subtitle: "3-5 Years",
    description: "Human geography, GIS and environmental research.",
    image: "https://picsum.photos/seed/geography/600/400",
  },
  {
    id: "geology",
    title: "PhD in Geology",
    subtitle: "3-5 Years",
    description: "Earth sciences, minerals and environmental studies.",
    image: "https://picsum.photos/seed/geology/600/400",
  },
  {
    id: "hindi",
    title: "PhD in Hindi",
    subtitle: "3-5 Years",
    description: "Hindi literature and language research.",
    image: "https://picsum.photos/seed/hindi/600/400",
  },
  {
    id: "history",
    title: "PhD in History",
    subtitle: "3-5 Years",
    description: "Historical research and analysis.",
    image: "https://picsum.photos/seed/history/600/400",
  },
  {
    id: "law",
    title: "PhD in Law",
    subtitle: "3-5 Years",
    description: "Legal research and advanced law studies.",
    image: "https://picsum.photos/seed/law/600/400",
  },
  {
    id: "life-science",
    title: "PhD in Life Science",
    subtitle: "3-5 Years",
    description: "Biological sciences and life systems research.",
    image: "https://picsum.photos/seed/life/600/400",
  },
  {
    id: "mass-communication",
    title: "PhD in Communication & Media Studies",
    subtitle: "3-5 Years",
    description: "Media, journalism and communication research.",
    image: "https://picsum.photos/seed/media/600/400",
  },
  {
    id: "mathematics",
    title: "PhD in Mathematics",
    subtitle: "3-5 Years",
    description: "Pure and applied mathematics research.",
    image: "https://picsum.photos/seed/maths/600/400",
  },
  {
    id: "pharmacy",
    title: "PhD in Pharmacy",
    subtitle: "3-5 Years",
    description: "Pharmaceutical sciences and drug research.",
    image: "https://picsum.photos/seed/pharma/600/400",
  },
  {
    id: "physical-education",
    title: "PhD in Physical Education",
    subtitle: "3-5 Years",
    description: "Sports science and physical education research.",
    image: "https://picsum.photos/seed/sports/600/400",
  },
  {
    id: "physics",
    title: "PhD in Physics",
    subtitle: "3-5 Years",
    description: "Advanced physics research and experiments.",
    image: "https://picsum.photos/seed/physics/600/400",
  },
  {
    id: "political",
    title: "PhD in Political Studies & IR",
    subtitle: "3-5 Years",
    description: "Political science and international relations research.",
    image: "https://picsum.photos/seed/political/600/400",
  },
  {
    id: "psychology",
    title: "PhD in Psychology / Clinical Psychology",
    subtitle: "3-5 Years",
    description: "Mental health, behavior and clinical research.",
    image: "https://picsum.photos/seed/psychology/600/400",
  },
  {
    id: "sociology",
    title: "PhD in Sociology",
    subtitle: "3-5 Years",
    description: "Social systems and human society research.",
    image: "https://picsum.photos/seed/sociology/600/400",
  },
  {
    id: "statistics",
    title: "PhD in Statistics",
    subtitle: "3-5 Years",
    description: "Advanced statistics, data science and modelling.",
    image: "https://picsum.photos/seed/statistics/600/400",
  },
];

export default function Research() {
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
              Research (PhD) Programmes
            </h1>
          </div>
          <p className="text-gray-600">
            Explore PhD programmes at CUSB
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
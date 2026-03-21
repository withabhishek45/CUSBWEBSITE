import { Link } from "react-router-dom";

const programmes = [
  {
    title: "Undergraduate",
    subtitle: "Bachelor's Degree Programmes",
    desc: "Explore UG programmes in all departments",
    image: "/images/ug.jpg",
    path: "/undergraduate",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Postgraduate",
    subtitle: "Master's Degree Programmes",
    desc: "Explore PG programmes in all departments",
    image: "/images/pg.jpg",
    path: "/postgraduate",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Research",
    subtitle: "PhD & Doctoral Programmes",
    desc: "Explore PhD and research areas",
    image: "/images/phd.jpg",
    path: "/research",
    color: "from-purple-500 to-purple-700"
  },
];

export default function Programmes() {
  return (
    <section className="py-10 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-8 w-1 bg-secondary-600"></span>
            <h2 className="text-2xl font-bold text-gray-800">Study @ CUSB</h2>
          </div>
          <p className="text-gray-600">Choose your path to excellence</p>
        </div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmes.map((prog) => (
            <Link key={prog.path} to={prog.path} className="block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group h-full">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} opacity-60`} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-xs bg-white/20 px-2 py-1 rounded">{prog.subtitle}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{prog.title} Programmes</h3>
                  <p className="text-gray-600 text-sm mb-4">{prog.desc}</p>
                  <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                    Explore Programs
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

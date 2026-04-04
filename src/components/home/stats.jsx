import { useState, useEffect } from "react";
import { api } from "../../utils/api";

function Stats() {
  const [stats, setStats] = useState({ students: 0, staff: 0, courses: 0, projects: 0 });

  useEffect(() => {
    async function fetchData() {
      const data = await api.getAll();
      if (data?.stats) setStats(data.stats);
    }
    fetchData();
  }, []);

  const statItems = [
    { value: stats.students, label: "Students", icon: "🎓", color: "bg-blue-500" },
    { value: stats.staff, label: "Faculty & Staff", icon: "👨‍🏫", color: "bg-green-500" },
    { value: stats.courses, label: "Programs", icon: "📚", color: "bg-purple-500" },
    { value: stats.projects, label: "Research Projects", icon: "🔬", color: "bg-orange-500" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-700 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-white mb-8">
          Central University of South Bihar in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition">
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg transform hover:scale-110 transition`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}+</h3>
              <p className="text-white/90 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

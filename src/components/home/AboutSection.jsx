import React from "react";
import { Link } from "react-router-dom";

const leaders = [
  { name: "Smt. Droupadi Murmu", role: "Hon'ble President of India", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300", path: "/president" },
  { name: "Dr. C.P Thakur", role: "Hon'ble Chancellor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300", path: "/chancellor" },
  { name: "Prof. K. N. Singh", role: "Vice Chancellor", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300", path: "/vice-chancellor" },
];

export default function AboutSection() {
  return (
    <section className="py-10 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-8 w-1 bg-green-600"></span>
          <h2 className="text-2xl font-bold text-gray-800">About University</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Central University of South Bihar, Gaya</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Central University of South Bihar is one among 54 central universities of the Federal Government of India. It was established under the <strong>Central Universities Act, 2009</strong>.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The university offers undergraduate, postgraduate, and doctoral programs across various disciplines including Sciences, Arts, Commerce, and Technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The campus is spread across <strong>300 acres</strong> of land and is located near Gaya city in Bihar, India.
            </p>
            <div className="mt-6">
              <Link to="/about" className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Learn More About CUSB →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {leaders.map((leader) => (
              <div key={leader.path} className="bg-blue-50 p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                <div className="h-36 overflow-hidden rounded-lg mb-4">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{leader.name}</h3>
                    <p className="text-xs text-gray-600 mb-3">{leader.role}</p>
                  </div>
                  <Link to={leader.path} className="w-full text-center px-3 py-2 bg-blue-700 text-white text-xs rounded-lg hover:bg-blue-800 transition mt-auto">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

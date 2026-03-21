import BackToTop from "../components/layout/BackToTop";

export default function ViceChancellor() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800">Vice Chancellor</h1>
          <p className="text-gray-600 mt-1">Prof. K. N. Singh</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img src="/images/VC_sir2.jpg" alt="Prof. K. N. Singh" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Prof. K. N. Singh</h2>
              <p className="text-blue-700 font-semibold mb-4">Hon'ble Vice Chancellor</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Prof. K. N. Singh is the Vice Chancellor of Central University of South Bihar. He brings with him years of academic experience and leadership in higher education.
                </p>
                <p>
                  Under his leadership, the university has made significant strides in academic excellence, research initiatives, and infrastructure development.
                </p>
                <p>
                  He is committed to fostering an environment of innovation, inclusivity, and excellence that prepares students for the challenges of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Vision</h3>
          <p className="text-gray-700">
            To establish the Central University of South Bihar as a center of excellence in higher education, research, and innovation, contributing to the overall development of the region and the nation.
          </p>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

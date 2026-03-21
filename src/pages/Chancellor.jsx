import BackToTop from "../components/layout/BackToTop";

export default function Chancellor() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800">Chancellor</h1>
          <p className="text-gray-600 mt-1">Dr. C.P Thakur</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img src="/images/cpthakur-final.jpg" alt="Dr. C.P Thakur" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. C.P Thakur</h2>
              <p className="text-blue-700 font-semibold mb-4">Hon'ble Chancellor</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Chakra Pani Thakur is an Indian politician, educationist, and a renowned physician who has made significant contributions to medical science and public health.
                </p>
                <p>
                  He has served as a Member of Parliament (Rajya Sabha) and has held several important positions in various governmental bodies. His expertise in tropical diseases and public health has been widely recognized.
                </p>
                <p>
                  As the Chancellor of Central University of South Bihar, he provides valuable guidance for the university's academic growth and overall development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Responsibilities</h3>
          <p className="text-gray-700">
            The Chancellor serves as the chief guest at convocation ceremonies and plays a pivotal role in maintaining the university's standards of excellence in education and research.
          </p>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

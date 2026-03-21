import BackToTop from "../components/layout/BackToTop";

export default function President() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800">President of India</h1>
          <p className="text-gray-600 mt-1">Smt. Droupadi Murmu</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img src="/images/dm.jpg" alt="Smt. Droupadi Murmu" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Smt. Droupadi Murmu</h2>
              <p className="text-blue-700 font-semibold mb-4">Hon'ble President of India</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Smt. Droupadi Murmu is the 15th President of India, serving since July 25, 2022. She is the first person belonging to a tribal community to hold the office.
                </p>
                <p>
                  Prior to her presidency, she served as the Governor of Jharkhand from 2015 to 2021. She has also held various positions in the Bharatiya Janata Party and served as a Member of Parliament in the Rajya Sabha.
                </p>
                <p>
                  As the President of India, she is also the Visitor of the Central University of South Bihar, providing guidance and oversight to the university's functioning.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Role as Visitor</h3>
          <p className="text-gray-700">
            The President of India, as the Visitor of Central Universities, plays a crucial role in ensuring the proper functioning and development of the university system in India.
          </p>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}

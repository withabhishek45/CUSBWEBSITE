import { Link } from "react-router-dom";

function Programmes() {
  return (
    <section className="pt-8 pb-0 border-t-4 border-blue-700 bg-gray-50">

      <div className="flex flex-col md:flex-row">

        {/* 🔵 Quick Links */}
        <div className="w-full p-3 bg-gray-100 border-r md:w-1/5">

          <h3 className="mb-3 text-lg font-bold text-blue-700">
            Quick Links
          </h3>

          <div className="space-y-2 text-sm">
            <Link to="/download" className="block px-3 py-2 text-white bg-blue-700 rounded">Download</Link>
            <Link to="/notices" className="block px-3 py-2 text-white bg-blue-700 rounded">Academic Notices</Link>
            <Link to="/committee" className="block px-3 py-2 text-white bg-blue-700 rounded">Committee</Link>
            <Link to="/events" className="block px-3 py-2 text-white bg-blue-700 rounded">Events</Link>
            <Link to="/tenders" className="block px-3 py-2 text-white bg-blue-700 rounded">Tenders</Link>
            <Link to="/recruitment" className="block px-3 py-2 text-white bg-blue-700 rounded">Recruitment</Link>
            <Link to="/circular" className="block px-3 py-2 text-white bg-blue-700 rounded">Circular</Link>
            <Link to="/nirf" className="block px-3 py-2 text-white bg-blue-700 rounded">NIRF</Link>
            <Link to="/iqac" className="block px-3 py-2 text-white bg-blue-700 rounded">IQAC</Link>
            <Link to="/admission" className="block px-3 py-2 text-white bg-blue-700 rounded">Admission</Link>
          </div>
        </div>

        {/* 🟢 Main Content */}
        <div className="w-full md:w-4/5">
          <div className="px-4 mx-auto max-w-7xl">

            <h2 className="mb-8 text-3xl font-bold text-center text-blue-700">
              Study @ CUSB
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {/* UG */}
              <Link to="/undergraduate">
                <div className="overflow-hidden transition bg-gray-300 shadow rounded-xl hover:shadow-xl group">

                  <div className="overflow-hidden h-75">
                    <img
                      src="/src/assets/ug.jpg"
                      alt="UG"
                      className="object-cover w-full h-full transition group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-blue-700">
                      UNDERGRADUATE PROGRAMMES
                    </h3>
                    <p className="text-sm text-gray-600">
                      Explore UG programmes in all departments.
                    </p>
                  </div>
                </div>
              </Link>

              {/* PG */}
              <Link to="/postgraduate">
                <div className="overflow-hidden transition bg-gray-300 shadow rounded-xl hover:shadow-xl group">

                  <div className="overflow-hidden h-75">
                    <img
                      src="/src/assets/pg.jpg"
                      alt="PG"
                      className="object-cover w-full h-full transition group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-blue-700">
                      POSTGRADUATE PROGRAMMES
                    </h3>
                    <p className="text-sm text-gray-600">
                      Explore PG programmes in all departments.
                    </p>
                  </div>
                </div>
              </Link>

              {/* PhD */}
              <Link to="/research">
                <div className="overflow-hidden transition bg-gray-300 shadow rounded-xl hover:shadow-xl group">

                  <div className="overflow-hidden h-75">
                    <img
                      src="/src/assets/phd.jpg"
                      alt="PhD"
                      className="object-cover w-full h-full transition group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-blue-700">
                      RESEARCH PROGRAMMES
                    </h3>
                    <p className="text-sm text-gray-600">
                      Explore PhD and research areas.
                    </p>
                  </div>
                </div>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Programmes;
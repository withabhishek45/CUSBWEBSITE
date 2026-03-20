function Stats() {
  return (
    <div
      className="py-1 text-white bg-center bg-cover"
      style={{
        backgroundImage:"src/assets/central-university-of-south-bihar-campus.jpg",
      }}
    >
      {/* Overlay */}
      <div className="px-6 py-10 bg-black/60">

        {/* Heading */}
        <h2 className="pl-3 mb-10 text-3xl font-bold border-l-4 border-red-500">
          Central University by the Numbers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

          {/* Item */}
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 border border-white rounded-full">
              🎓
            </div>
            <h3 className="text-3xl font-bold">4100+</h3>
            <p>Students</p>
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 border border-white rounded-full">
              👨‍🏫
            </div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p>Staff</p>
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 border border-white rounded-full">
              📚
            </div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Courses</p>
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 border border-white rounded-full">
              🔬
            </div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Projects</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;


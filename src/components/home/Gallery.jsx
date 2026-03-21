import { useState, useEffect } from "react";

function Gallery() {
  const images = [
    { src: "/images/2.jpg", alt: "Campus View" },
    { src: "/images/5.jpeg", alt: "Students Event" },
    { src: "/images/10_f.jpg", alt: "Academic Building" },
  ];

  const videos = [
    "WoNtUZVAuGM",
    "MxKZfOhjzrI",
    "7tSG8_6UODs",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-10 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Photo Gallery */}
          <div>
            <div className="flex items-center gap-3 mb-4">
          <span className="h-8 w-1 bg-purple-600"></span>
          <h2 className="text-2xl font-bold text-gray-800">Photo Gallery</h2>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-72 object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-medium">{images[index].alt}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-purple-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Gallery */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-8 w-1 bg-pink-600"></span>
          <h2 className="text-2xl font-bold text-gray-800">Video Gallery</h2>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {videos.map((id, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-40 sm:h-52"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Video ${i + 1}`}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

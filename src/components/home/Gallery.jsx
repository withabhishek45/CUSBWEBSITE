import { useState, useEffect } from "react";

function Gallery() {
  const images = [
    "/images/2.jpg",
    "/images/5.jpeg",
    "/images/10_f.jpg",
  ];

  // ✅ Use ONLY video IDs (important)
  const videos = [
    "WoNtUZVAuGM",
    "MxKZfOhjzrI",
    "7tSG8_6UODs",
    "0dt_S-37s1Q",
  ];

  const [index, setIndex] = useState(0);

  // ✅ Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="grid gap-6 p-6 md:grid-cols-2">

      {/* 📸 Photo Gallery */}
      <div>
        <h2 className="px-4 py-2 font-bold text-white bg-blue-700">
          PHOTO GALLERY CUSB
        </h2>

        <div className="relative mt-4">
          <img
            src={images[index]}
            alt="gallery"
            className="object-cover w-full rounded shadow h-95"
          />

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎥 Video Gallery */}
      <div>
        <h2 className="px-4 py-2 font-bold text-white bg-blue-700">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          {videos.map((id, i) => (
            <iframe
              key={i}
              className="w-full h-48 rounded shadow"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video"
              loading="lazy"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Gallery;
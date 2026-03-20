import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    id: 1,
    src: "/src/assets/fd27.jpeg",
    title: "Welcome to Central University of South Bihar",
    subtitle: "Explore our campuses, programs and innovation",
  },
  {
    id: 2,
    src: "/src/assets/interconf.jpg",
    title: "A Legacy of Research",
    subtitle: "Our faculty and students drive discovery worldwide",
  },
  {
    id: 3,
    src: "/src/assets/2.jpg",
    title: "World Class Education",
    subtitle: "Join thousands of students pursuing excellence",
  },
  {
    id: 4,
    src: "/src/assets/interconv.jpg",
    title: "Innovation & Excellence",
    subtitle: "Building the future through research and education",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slideCount = useMemo(() => slides.length, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideCount]);

  const goTo = (index) => {
    setCurrent((index + slideCount) % slideCount);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section className="w-full">
      <div className="relative w-full">

        {/* ✅ Full width + proper height */}
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* ✅ Image */}
              <img
                src={slide.src}
                alt={slide.title}
                className="object-cover object-center w-full h-full"
              />

              {/* ✅ Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* ✅ Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h2 className="mb-4 text-2xl font-bold sm:text-4xl md:text-5xl drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-white/90">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* ⬅️ Left Arrow */}
          <button
            onClick={prev}
            className="absolute z-10 p-3 transition -translate-y-1/2 bg-white rounded-full shadow left-4 top-1/2 hover:bg-gray-200"
          >
            ❮
          </button>

          {/* ➡️ Right Arrow */}
          <button
            onClick={next}
            className="absolute z-10 p-3 transition -translate-y-1/2 bg-white rounded-full shadow right-4 top-1/2 hover:bg-gray-200"
          >
            ❯
          </button>

          {/* 🔘 Dots */}
          <div className="absolute z-10 flex gap-3 -translate-x-1/2 bottom-6 left-1/2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === current
                    ? "bg-white w-8"
                    : "bg-white/50 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
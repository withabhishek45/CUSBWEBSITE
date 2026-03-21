import { useEffect, useMemo, useState } from "react";

const UNI_NAME = "Central University of South Bihar";

const slides = [
  { id: 1, src: "/images/fd27.jpeg", title: "Welcome to " + UNI_NAME, subtitle: "Explore our campuses, programs and innovation" },
  { id: 2, src: "/images/interconf.jpg", title: UNI_NAME, subtitle: "A Legacy of Research Excellence" },
  { id: 3, src: "/images/2.jpg", title: "World Class Education at " + UNI_NAME, subtitle: "Join thousands of students pursuing excellence" },
  { id: 4, src: "/images/interconv.jpg", title: "Innovation & Excellence at " + UNI_NAME, subtitle: "Building the future through research and education" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slideCount = useMemo(() => slides.length, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slideCount), 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const goTo = (index) => setCurrent((index + slideCount) % slideCount);

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img src={slide.src} alt={slide.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 sm:px-16 text-white">
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-xl leading-tight">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/95 drop-shadow">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl sm:text-3xl shadow-xl transition"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl sm:text-3xl shadow-xl transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all ${idx === current ? "bg-white w-6 sm:w-10 h-2 sm:h-3" : "bg-white/60 w-2 sm:w-3 h-2 sm:h-3"}`}
          />
        ))}
      </div>
    </section>
  );
}

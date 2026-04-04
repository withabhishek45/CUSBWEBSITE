import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UNI_NAME = "Central University of South Bihar";

const slides = [
  { id: 1, src: "/images/fd27.jpeg", title: "Welcome to " + UNI_NAME, subtitle: "Explore our campuses, programs and innovation" },
  { id: 2, src: "/images/interconf.jpg", title: UNI_NAME, subtitle: "A Legacy of Research Excellence" },
  { id: 3, src: "/images/2.jpg", title: "World Class Education at " + UNI_NAME, subtitle: "Join thousands of students pursuing excellence" },
  { id: 4, src: "/images/interconv.jpg", title: "Innovation & Excellence at " + UNI_NAME, subtitle: "Building the future through research and education" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = useMemo(() => slides.length, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slideCount), 5000);
    return () => clearInterval(timer);
  }, [slideCount, isPaused]);

  const goTo = (index) => setCurrent((index + slideCount) % slideCount);

  const nextSlide = () => goTo(current + 1);
  const prevSlide = () => goTo(current - 1);

  return (
    <section 
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img 
            src={slide.src} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 text-white">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-3 md:mb-4 drop-shadow-xl leading-tight max-w-4xl">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 drop-shadow max-w-2xl hidden sm:block">
              {slide.subtitle}
            </p>

          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg transition hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-sm sm:text-lg md:text-2xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg transition hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-sm sm:text-lg md:text-2xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all ${idx === current ? "bg-white w-6 sm:w-8 h-2 sm:h-2" : "bg-white/60 w-2 h-2"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div 
          className="h-full bg-white/80 transition-all duration-300"
          style={{ width: `${((current + 1) / slideCount) * 100}%` }}
        />
      </div>
    </section>
  );
}

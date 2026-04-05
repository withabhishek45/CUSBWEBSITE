import { useEffect, useState, useCallback } from "react";
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const nextSlide = useCallback(() => goTo(current + 1), [current, goTo]);
  const prevSlide = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <section 
      className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img 
            src={slide.src} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 lg:px-24 text-white">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl leading-tight max-w-4xl px-2">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 drop-shadow max-w-2xl px-4">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg transition-all hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg transition-all hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
      </button>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${idx === current ? "bg-white w-6 sm:w-8 h-2 sm:h-2" : "bg-white/60 w-2 h-2 hover:bg-white/80"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div 
          className="h-full bg-white/90 transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}

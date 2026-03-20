import { useEffect, useRef, useState } from "react";

const announcements = [
  {
    id: 1,
    text: "🎓 Admissions Open for 2026-27 | Apply Now",
  },
  {
    id: 2,
    text: "🏆 Fellowship 2026 - Applications Deadline Extended",
  },
  {
    id: 3,
    text: "📢 Vigilance Awareness Week - 27th October to 2nd November, 2025",
  },
  {
    id: 4,
    text: "🔬 Research Grant Opportunities Available for Faculty",
  },
  {
    id: 5,
    text: "🎉 Annual Fest 2026 - Register Your Team",
  },
  {
    id: 6,
    text: "📚 New Online Courses Launched | Enroll Today",
  },
];

export default function Announcements() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll || isPaused) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const autoScroll = setInterval(() => {
      scrollAmount += scrollSpeed;
      if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
        scrollAmount = 0;
        scroll.scrollLeft = 0;
      } else {
        scroll.scrollLeft += scrollSpeed;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  return (
    <section className="w-full py-5 overflow-hidden text-white bg-blue-700">
      <div className="flex items-center gap-6 px-6">
        {/* Header */}
        <div className="flex-shrink-0 px-4 py-2 font-bold text-blue-700 bg-white rounded whitespace-nowrap">
          📌 Announcements
        </div>

        {/* Scrolling Announcements */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex flex-1 gap-8 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="flex-shrink-0 whitespace-nowrap text-sm sm:text-base hover:text-yellow-300 transition duration-300 cursor-pointer after:content-['|'] after:ml-2 after:text-white/70"
            >
              {announcement.text}
            </div>
          ))}
          {/* Repeat announcements for seamless loop */}
          {announcements.map((announcement) => (
            <div
              key={`repeat-${announcement.id}`}
              className="flex-shrink-0 whitespace-nowrap text-sm sm:text-base hover:text-yellow-300 transition duration-300 cursor-pointer after:content-['|'] after:ml-2 after:text-white/70"
            >
              {announcement.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

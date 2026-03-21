import { useEffect, useRef, useState } from "react";
import { api } from "../../utils/api";

export default function Announcements() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await api.get("/announcements");
      if (data) setAnnouncements(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll || isPaused || announcements.length === 0) return;

    const autoScroll = setInterval(() => {
      if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
        scroll.scrollLeft = 0;
      } else {
        scroll.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(autoScroll);
  }, [isPaused, announcements]);

  return (
    <div className="w-full py-3 bg-red-700 text-white shadow-md">
      <div className="flex items-center max-w-7xl mx-auto px-4">
        <div className="flex-shrink-0 px-4 py-2 bg-yellow-500 text-red-800 font-bold rounded-lg shadow text-sm md:text-base">
          📢 Announcements
        </div>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex-1 flex gap-8 overflow-x-auto ml-4 scroll-smooth hide-scrollbar"
        >
          {announcements.length > 0 ? (
            <>
              {[...announcements, ...announcements].map((item, idx) => (
                <span key={idx} className="flex-shrink-0 text-white text-sm md:text-base whitespace-nowrap cursor-pointer hover:text-yellow-300 font-medium">
                  {item.text}
                  <span className="mx-4 text-white/50">•</span>
                </span>
              ))}
            </>
          ) : (
            <span className="text-white/70 text-sm">Loading announcements...</span>
          )}
        </div>
      </div>
    </div>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "recent-events",
    title: "Recent Events",
    route: "/recent-events",
    items: [
      {
        id: "event-1",
        title: "17th Foundation Day Celebration ",
        subtitle: "Ceremony and Awards",
        date: "27 Feb 2026",
        image: "/src/assets/fd27.jpeg",
      },
      {
        id: "event-2",
        title: "Alumini Meet 2026",
        subtitle: "Reconnect with fellow graduates",
        date: "25 Feb 2026",
        image: "/src/assets/ameet.jpeg",
      },
      {
        id: "event-3",
        title: "International Conference on AI",
        subtitle: "AI in Sustainable Systems",
        date: "5 Mar 2026",
        image: "/src/assets/interconf.jpg",
      },
      {
        id: "event-4",
        title: "Inter-Departmental Sports Meet",
        subtitle: "Inter-departmental competitions",
        date: "28 Feb 2026",
        image: "/src/assets/sportimg.jpeg",
      },
      {
        id: "event-5",
        title: "Cultural Night 2026",
        subtitle: "Celebrating diversity and talent",
        date: "15 Feb 2026",
        image: "https://picsum.photos/seed/event5/600/400",
      },
      {
        id: "event-6",
        title: "Research Showcase",
        subtitle: "Faculty and student research presentations",
        date: "8 Feb 2026",
        image: "https://picsum.photos/seed/event6/600/400",
      },
      {
        id: "event-7",
        title: "Alumni Reunion",
        subtitle: "Connecting past and present",
        date: "1 Feb 2026",
        image: "https://picsum.photos/seed/event7/600/400",
      },
      {
        id: "event-8",
        title: "Workshop on Entrepreneurship",
        subtitle: "Building startup skills",
        date: "25 Jan 2026",
        image: "https://picsum.photos/seed/event8/600/400",
      },
      {
        id: "event-9",
        title: "Seminar on Climate Change",
        subtitle: "Environmental awareness session",
        date: "18 Jan 2026",
        image: "https://picsum.photos/seed/event9/600/400",
      },
      {
        id: "event-10",
        title: "Tech Talk Series",
        subtitle: "Industry experts share insights",
        date: "10 Jan 2026",
        image: "https://picsum.photos/seed/event10/600/400",
      },
      {
        id: "event-11",
        title: "Career Fair 2026",
        subtitle: "Meet potential employers",
        date: "5 Jan 2026",
        image: "https://picsum.photos/seed/event11/600/400",
      },
      {
        id: "event-12",
        title: "Freshers' Orientation",
        subtitle: "Welcome new students",
        date: "28 Dec 2025",
        image: "https://picsum.photos/seed/event12/600/400",
      },
    ],
  },
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    route: "/upcoming-events",
    items: [
      {
        id: "upcoming-1",
        title: "Startup Bootcamp",
        subtitle: "3-day intensive training",
        date: "8 Apr 2026",
        image: "https://picsum.photos/seed/upcoming1/600/400",
      },
      {
        id: "upcoming-2",
        title: "Research Symposium",
        subtitle: "Presentations from faculty",
        date: "18 Apr 2026",
        image: "https://picsum.photos/seed/upcoming2/600/400",
      },
      {
        id: "upcoming-3",
        title: "Campus Marathon",
        subtitle: "Health & fitness event",
        date: "26 Apr 2026",
        image: "https://picsum.photos/seed/upcoming3/600/400",
      },
      {
        id: "upcoming-4",
        title: "International Conference",
        subtitle: "Global perspectives on technology",
        date: "5 May 2026",
        image: "https://picsum.photos/seed/upcoming4/600/400",
      },
      {
        id: "upcoming-5",
        title: "Art Exhibition",
        subtitle: "Student and faculty artwork display",
        date: "12 May 2026",
        image: "https://picsum.photos/seed/upcoming5/600/400",
      },
      {
        id: "upcoming-6",
        title: "Hackathon 2026",
        subtitle: "48-hour coding challenge",
        date: "20 May 2026",
        image: "https://picsum.photos/seed/upcoming6/600/400",
      },
      {
        id: "upcoming-7",
        title: "Leadership Summit",
        subtitle: "Developing future leaders",
        date: "28 May 2026",
        image: "https://picsum.photos/seed/upcoming7/600/400",
      },
      {
        id: "upcoming-8",
        title: "Music Festival",
        subtitle: "Campus talent showcase",
        date: "5 Jun 2026",
        image: "https://picsum.photos/seed/upcoming8/600/400",
      },
      {
        id: "upcoming-9",
        title: "Science Fair",
        subtitle: "Innovative projects and experiments",
        date: "15 Jun 2026",
        image: "https://picsum.photos/seed/upcoming9/600/400",
      },
      {
        id: "upcoming-10",
        title: "Community Service Day",
        subtitle: "Giving back to the local community",
        date: "22 Jun 2026",
        image: "https://picsum.photos/seed/upcoming10/600/400",
      },
      {
        id: "upcoming-11",
        title: "Summer Internship Fair",
        subtitle: "Connect with industry partners",
        date: "1 Jul 2026",
        image: "https://picsum.photos/seed/upcoming11/600/400",
      },
      {
        id: "upcoming-12",
        title: "Orientation for New Faculty",
        subtitle: "Welcome and integration session",
        date: "10 Jul 2026",
        image: "https://picsum.photos/seed/upcoming12/600/400",
      },
    ],
  },
  {
    id: "tenders",
    title: "Tenders",
    route: "/tenders",
    items: [
      {
        id: "tender-1",
        title: "Lab Equipment Procurement",
        subtitle: "Open until 30 Apr 2026",
        date: "25 Mar 2026",
        image: "https://picsum.photos/seed/tender1/600/400",
      },
      {
        id: "tender-2",
        title: "Campus Renovation Works",
        subtitle: "Bid submission deadline 15 May",
        date: "22 Mar 2026",
        image: "https://picsum.photos/seed/tender2/600/400",
      },
      {
        id: "tender-3",
        title: "IT Infrastructure Upgrade",
        subtitle: "Network and server enhancements",
        date: "10 Apr 2026",
        image: "https://picsum.photos/seed/tender3/600/400",
      },
      {
        id: "tender-4",
        title: "Library Books Acquisition",
        subtitle: "Academic and reference materials",
        date: "5 Apr 2026",
        image: "https://picsum.photos/seed/tender4/600/400",
      },
      {
        id: "tender-5",
        title: "Sports Equipment Supply",
        subtitle: "Gym and field equipment",
        date: "1 Apr 2026",
        image: "https://picsum.photos/seed/tender5/600/400",
      },
      {
        id: "tender-6",
        title: "Catering Services",
        subtitle: "Campus dining and events",
        date: "28 Mar 2026",
        image: "https://picsum.photos/seed/tender6/600/400",
      },
      {
        id: "tender-7",
        title: "Security System Installation",
        subtitle: "Campus safety and surveillance",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/tender7/600/400",
      },
      {
        id: "tender-8",
        title: "Green Energy Solutions",
        subtitle: "Solar panel installation",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/tender8/600/400",
      },
      {
        id: "tender-9",
        title: "Transportation Services",
        subtitle: "Student shuttle and bus services",
        date: "10 Mar 2026",
        image: "https://picsum.photos/seed/tender9/600/400",
      },
      {
        id: "tender-10",
        title: "Waste Management Contract",
        subtitle: "Recycling and disposal services",
        date: "5 Mar 2026",
        image: "https://picsum.photos/seed/tender10/600/400",
      },
      {
        id: "tender-11",
        title: "Software Licensing",
        subtitle: "Educational software packages",
        date: "1 Mar 2026",
        image: "https://picsum.photos/seed/tender11/600/400",
      },
      {
        id: "tender-12",
        title: "Maintenance Services",
        subtitle: "Building and facility upkeep",
        date: "25 Feb 2026",
        image: "https://picsum.photos/seed/tender12/600/400",
      },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    route: "/recruitment",
    items: [
      {
        id: "recruit-1",
        title: "Faculty Positions Open",
        subtitle: "Apply by 10 Apr 2026",
        date: "28 Mar 2026",
        image: "https://picsum.photos/seed/recruit1/600/400",
      },
      {
        id: "recruit-2",
        title: "Research Associate Hiring",
        subtitle: "Multiple disciplines",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/recruit2/600/400",
      },
      {
        id: "recruit-3",
        title: "Administrative Assistant",
        subtitle: "Office support role",
        date: "15 Apr 2026",
        image: "https://picsum.photos/seed/recruit3/600/400",
      },
      {
        id: "recruit-4",
        title: "Lab Technician",
        subtitle: "Science lab support",
        date: "12 Apr 2026",
        image: "https://picsum.photos/seed/recruit4/600/400",
      },
      {
        id: "recruit-5",
        title: "IT Support Specialist",
        subtitle: "Technical assistance",
        date: "8 Apr 2026",
        image: "https://picsum.photos/seed/recruit5/600/400",
      },
      {
        id: "recruit-6",
        title: "Librarian Position",
        subtitle: "Library management",
        date: "5 Apr 2026",
        image: "https://picsum.photos/seed/recruit6/600/400",
      },
      {
        id: "recruit-7",
        title: "Sports Coach",
        subtitle: "Athletics training",
        date: "1 Apr 2026",
        image: "https://picsum.photos/seed/recruit7/600/400",
      },
      {
        id: "recruit-8",
        title: "Counselor",
        subtitle: "Student support services",
        date: "28 Mar 2026",
        image: "https://picsum.photos/seed/recruit8/600/400",
      },
      {
        id: "recruit-9",
        title: "Security Officer",
        subtitle: "Campus safety",
        date: "25 Mar 2026",
        image: "https://picsum.photos/seed/recruit9/600/400",
      },
      {
        id: "recruit-10",
        title: "Maintenance Worker",
        subtitle: "Facility upkeep",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/recruit10/600/400",
      },
      {
        id: "recruit-11",
        title: "Event Coordinator",
        subtitle: "Campus activities planning",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/recruit11/600/400",
      },
      {
        id: "recruit-12",
        title: "Research Fellow",
        subtitle: "Advanced research positions",
        date: "10 Mar 2026",
        image: "https://picsum.photos/seed/recruit12/600/400",
      },
    ],
  },
  {
    id: "updates",
    title: "Updates",
    route: "/updates",
    items: [
      {
        id: "update-1",
        title: "New Library Hours",
        subtitle: "Open 8am–10pm starting April",
        date: "1 Apr 2026",
        image: "https://picsum.photos/seed/update1/600/400",
      },
      {
        id: "update-2",
        title: "Campus Wi-Fi Upgrade",
        subtitle: "Faster speeds arriving soon",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/update2/600/400",
      },
      {
        id: "update-3",
        title: "Parking Policy Changes",
        subtitle: "New regulations effective April 1",
        date: "10 Apr 2026",
        image: "https://picsum.photos/seed/update3/600/400",
      },
      {
        id: "update-4",
        title: "Health Center Expansion",
        subtitle: "New services available",
        date: "8 Apr 2026",
        image: "https://picsum.photos/seed/update4/600/400",
      },
      {
        id: "update-5",
        title: "Course Registration Opens",
        subtitle: "Fall semester enrollment begins",
        date: "5 Apr 2026",
        image: "https://picsum.photos/seed/update5/600/400",
      },
      {
        id: "update-6",
        title: "New Dining Options",
        subtitle: "Cafeteria menu updates",
        date: "1 Apr 2026",
        image: "https://picsum.photos/seed/update6/600/400",
      },
      {
        id: "update-7",
        title: "Campus Shuttle Schedule",
        subtitle: "Route changes announced",
        date: "28 Mar 2026",
        image: "https://picsum.photos/seed/update7/600/400",
      },
      {
        id: "update-8",
        title: "Emergency Procedures",
        subtitle: "Updated safety protocols",
        date: "25 Mar 2026",
        image: "https://picsum.photos/seed/update8/600/400",
      },
      {
        id: "update-9",
        title: "Student ID Card Renewal",
        subtitle: "Online renewal process",
        date: "20 Mar 2026",
        image: "https://picsum.photos/seed/update9/600/400",
      },
      {
        id: "update-10",
        title: "Research Grant Applications",
        subtitle: "New funding opportunities",
        date: "15 Mar 2026",
        image: "https://picsum.photos/seed/update10/600/400",
      },
      {
        id: "update-11",
        title: "Alumni Network Expansion",
        subtitle: "New online platform",
        date: "10 Mar 2026",
        image: "https://picsum.photos/seed/update11/600/400",
      },
      {
        id: "update-12",
        title: "Sustainability Initiatives",
        subtitle: "Green campus programs",
        date: "5 Mar 2026",
        image: "https://picsum.photos/seed/update12/600/400",
      },
    ],
  },
  {
    id: "newsletter",
    title: "Newsletter",
    route: "/newsletter",
    items: [
      {
        id: "newsletter-1",
        title: "Foundation Day Special Edition",
        subtitle: "Highlights from the 17th Foundation Day",
        date: "28 Feb 2026",
        image: "/src/assets/nw1.jpeg",
      },
      {
        id: "newsletter-2",
        title: "Administrative Updates",
        subtitle: "Important announcements and policy changes",
        date: "15 Dec 2025",
        image: "/src/assets/nw2.jpeg",
      },
      {
        id: "newsletter-3",
        title: "Research Breakthroughs And Student Achievements",
        subtitle: "Academic excellence and innovation",
        date: "1 Oct 2025",
        image: "/src/assets/nw3.jpeg",
      },
      {
        id: "newsletter-4",
        title: "CSIR-UGC NET Qualifiers",
        subtitle: "Celebrating our students' success in national exams",
        date: "5 March 2025",
        image: "/src/assets/nw4.jpeg",
      },
      {
        id: "newsletter-5",
        title: "Spring 2025 Edition",
        subtitle: "Community outreach and partnerships",
        date: "1 Apr 2025",
        image: "https://picsum.photos/seed/newsletter5/600/400",
      },
      {
        id: "newsletter-6",
        title: "Winter 2024 Edition",
        subtitle: "Year-end review and future plans",
        date: "15 Dec 2024",
        image: "https://picsum.photos/seed/newsletter6/600/400",
      },
      {
        id: "newsletter-7",
        title: "Fall 2024 Edition",
        subtitle: "Academic excellence and innovation",
        date: "1 Oct 2024",
        image: "https://picsum.photos/seed/newsletter7/600/400",
      },
      {
        id: "newsletter-8",
        title: "Summer 2024 Edition",
        subtitle: "Alumni success stories",
        date: "15 Jun 2024",
        image: "https://picsum.photos/seed/newsletter8/600/400",
      },
      {
        id: "newsletter-9",
        title: "Spring 2024 Edition",
        subtitle: "Student research and publications",
        date: "1 Apr 2024",
        image: "https://picsum.photos/seed/newsletter9/600/400",
      },
      {
        id: "newsletter-10",
        title: "Winter 2023 Edition",
        subtitle: "Campus transformation projects",
        date: "15 Dec 2023",
        image: "https://picsum.photos/seed/newsletter10/600/400",
      },
      {
        id: "newsletter-11",
        title: "Fall 2023 Edition",
        subtitle: "New programs and initiatives",
        date: "1 Oct 2023",
        image: "https://picsum.photos/seed/newsletter11/600/400",
      },
      {
        id: "newsletter-12",
        title: "Summer 2023 Edition",
        subtitle: "Community impact and engagement",
        date: "15 Jun 2023",
        image: "https://picsum.photos/seed/newsletter12/600/400",
      },
    ],
  },
];

export default function SectionTabs() {
  const [active, setActive] = useState(sections[0].id);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === active) ?? sections[0],
    [active]
  );

  return (
    <section className="mb-10 overflow-hidden bg-white rounded-lg shadow-sm">
      <div className="px-4 bg-blue-700 border-b border-yellow-300 md:px-6">
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center">
          <div className="flex gap-2 overflow-x-auto md:gap-4 hide-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActive(section.id)}
                className={`rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                  section.id === active
                    ? "bg-white text-blue-900 shadow"
                    : "text-white hover:bg-white/70"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
          {activeSection.items.slice(0, 4).map((item) => (
            <article
              key={item.id}
              className="overflow-hidden transition-transform bg-white border border-gray-200 rounded-lg shadow-sm hover:-translate-y-1"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                <p className="mb-3 text-sm text-blue-700">{item.subtitle}</p>
                <div className="text-xs text-gray-500">{item.date}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            to={activeSection.route}
            className="inline-flex items-center px-4 py-2 text-white transition-colors bg-blue-700 rounded-md hover:bg-blue-950"
          >
            View All {activeSection.title}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

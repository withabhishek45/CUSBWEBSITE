const API_BASE = 'https://cusb-backend-1.onrender.com';

const MOCK_DEPARTMENTS = [
  { id: 'computer-science', name: 'Department of Computer Science', shortName: 'Computer Science', description: 'The Department of Computer Science offers comprehensive programs in software development, AI, data science, cybersecurity, and cloud computing.', programs: ['B.Sc. Computer Science', 'M.Sc. Computer Science', 'MCA', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'], studentCount: 300, placementRate: 95, researchPapers: 200, fundedProjects: 25, established: 2014, email: 'computerscience@cusb.ac.in', phone: '+91-631-2223516', vision: 'To be a center of excellence in computer science education and research.', mission: 'To provide state-of-the-art education in computing fundamentals and emerging technologies.', objectives: ['Provide comprehensive CS education', 'Promote research in AI and ML', 'Develop industry-ready professionals', 'Foster innovation'], facilities: ['High-Performance Computing Lab', 'AI/ML Lab', 'Cybersecurity Lab', 'Cloud Computing Lab'], faculty: [{ name: 'Dr. Vikram Singh', designation: 'Professor & Head', email: 'vikram.cs@cusb.ac.in', phone: '+91-631-2223535', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200', specialization: 'Artificial Intelligence', publications: 90 }] },
  { id: 'chemistry', name: 'Department of Chemistry', shortName: 'Chemistry', description: 'The Department of Chemistry provides rigorous training in organic, inorganic, physical, and analytical chemistry.', programs: ['B.Sc. Chemistry', 'M.Sc. Chemistry', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800'], studentCount: 140, placementRate: 72, researchPapers: 150, fundedProjects: 20, established: 2014, email: 'chemistry@cusb.ac.in', phone: '+91-631-2223512', vision: 'To excel in chemical sciences education and research.', mission: 'To cultivate a deep understanding of chemical principles.', objectives: ['Deliver comprehensive chemistry education', 'Promote research', 'Foster innovation'], facilities: ['Organic Synthesis Lab', 'Spectroscopy Lab', 'Analytical Lab'], faculty: [{ name: 'Dr. Anil Kumar', designation: 'Professor & Head', email: 'anil.chem@cusb.ac.in', phone: '+91-631-2223524', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', specialization: 'Organic Chemistry', publications: 72 }] },
  { id: 'physics', name: 'Department of Physics', shortName: 'Physics', description: 'The Department of Physics offers comprehensive programs in theoretical and experimental physics.', programs: ['B.Sc. Physics', 'M.Sc. Physics', 'M.Tech.', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800'], studentCount: 145, placementRate: 72, researchPapers: 130, fundedProjects: 22, established: 2014, email: 'physics@cusb.ac.in', phone: '+91-631-2223513', vision: 'To be a leading department in physics education and frontier research.', mission: 'To provide comprehensive physics education.', objectives: ['Provide quality physics education', 'Promote research', 'Develop experimental skills'], facilities: ['Physics Lab', 'Electronics Lab', 'Computational Lab'], faculty: [{ name: 'Dr. Subhash Chandra', designation: 'Professor & Head', email: 'subhash.phys@cusb.ac.in', phone: '+91-631-2223527', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200', specialization: 'Condensed Matter Physics', publications: 85 }] },
  { id: 'mathematics', name: 'Department of Mathematics', shortName: 'Mathematics', description: 'The Department of Mathematics offers programs in pure and applied mathematics.', programs: ['B.Sc. Mathematics', 'M.Sc. Mathematics', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800'], studentCount: 125, placementRate: 68, researchPapers: 100, fundedProjects: 12, established: 2014, email: 'mathematics@cusb.ac.in', phone: '+91-631-2223514', vision: 'To be a center of excellence in mathematics education and research.', mission: 'To develop mathematical thinking.', objectives: ['Provide quality mathematics education', 'Promote research'], facilities: ['Computing Lab', 'Mathematics Lab'], faculty: [{ name: 'Dr. Naveen Chandra', designation: 'Professor & Head', email: 'naveen.math@cusb.ac.in', phone: '+91-631-2223530', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200', specialization: 'Applied Mathematics', publications: 60 }] },
  { id: 'biotechnology', name: 'Department of Biotechnology', shortName: 'Biotechnology', description: 'The Department of Biotechnology offers programs in molecular biology, genetics, and bioinformatics.', programs: ['B.Sc. Biotechnology', 'M.Sc. Biotechnology', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800'], studentCount: 150, placementRate: 85, researchPapers: 95, fundedProjects: 12, established: 2014, email: 'biotechnology@cusb.ac.in', phone: '+91-631-2223505', vision: 'To be a leader in biotechnology education and research.', mission: 'To provide interdisciplinary training.', objectives: ['Provide quality biotechnology education', 'Conduct research'], facilities: ['Molecular Biology Lab', 'Cell Culture Lab', 'Bioinformatics Center'], faculty: [{ name: 'Dr. Priya Singh', designation: 'Professor & Head', email: 'priya.biotech@cusb.ac.in', phone: '+91-631-2223509', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200', specialization: 'Molecular Biology', publications: 65 }] },
  { id: 'english', name: 'Department of English', shortName: 'English', description: 'The Department of English offers programs in literature, linguistics, and creative writing.', programs: ['B.A. English', 'M.A. English', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800'], studentCount: 200, placementRate: 70, researchPapers: 75, fundedProjects: 6, established: 2014, email: 'english@cusb.ac.in', phone: '+91-631-2223519', vision: 'To foster excellence in English language and literature.', mission: 'To develop linguistic proficiency.', objectives: ['Impart comprehensive English education', 'Develop communication skills'], facilities: ['Language Lab', 'Media Room', 'Theater Studio'], faculty: [{ name: 'Dr. Amitabh Tripathi', designation: 'Professor & Head', email: 'amitabh.eng@cusb.ac.in', phone: '+91-631-2223543', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200', specialization: 'English Literature', publications: 62 }] },
  { id: 'economics', name: 'Department of Economics', shortName: 'Economics', description: 'The Department of Economics offers programs in microeconomics, macroeconomics, and development economics.', programs: ['B.A. Economics', 'M.A. Economics', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800'], studentCount: 130, placementRate: 75, researchPapers: 90, fundedProjects: 15, established: 2014, email: 'economics@cusb.ac.in', phone: '+91-631-2223508', vision: 'To be a leading department in economics education.', mission: 'To produce economists with analytical skills.', objectives: ['Provide quality economics education', 'Conduct research'], facilities: ['Economics Lab', 'Statistical Software', 'Research Cell'], faculty: [{ name: 'Dr. Sunita Devi', designation: 'Professor & Head', email: 'sunita.econ@cusb.ac.in', phone: '+91-631-2223516', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200', specialization: 'Development Economics', publications: 55 }] },
  { id: 'commerce', name: 'Department of Commerce', shortName: 'Commerce', description: 'The Department of Commerce offers programs in accounting, finance, and business management.', programs: ['B.Com.', 'M.Com.', 'MBA', 'Ph.D.'], images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'], studentCount: 280, placementRate: 90, researchPapers: 80, fundedProjects: 8, established: 2014, email: 'commerce@cusb.ac.in', phone: '+91-631-2223522', vision: 'To be a premier department developing business leaders.', mission: 'To provide industry-relevant education.', objectives: ['Impart knowledge in commerce', 'Develop managerial skills'], facilities: ['Computer Lab', 'Accounting Lab', 'Incubation Center'], faculty: [{ name: 'Dr. Meena Sharma', designation: 'Professor & Head', email: 'meena.com@cusb.ac.in', phone: '+91-631-2223550', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200', specialization: 'Finance', publications: 55 }] },
];

const MOCK_NOTICES = [
  { id: '1', title: 'Semester Registration Open', date: '07 Apr 2026', category: 'Academic', description: 'Register for upcoming semester courses online.' },
  { id: '2', title: 'Examination Schedule Released', date: '06 Apr 2026', category: 'Examination', description: 'Check your exam timetable on the portal.' },
  { id: '3', title: 'Campus Placement Drive', date: '05 Apr 2026', category: 'Placement', description: 'TCS and Infosys recruitment on campus.' },
  { id: '4', title: 'Fee Payment Deadline', date: '10 Apr 2026', category: 'Fee', description: 'Last date for semester fee payment.' },
];

const MOCK_EVENTS = [
  { id: '1', title: 'Annual Convocation', date: '15 Apr 2026', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', type: 'upcoming' },
  { id: '2', title: 'Research Symposium', date: '18 Apr 2026', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600', type: 'upcoming' },
  { id: '3', title: 'Tech Fest 2026', date: '20 Apr 2026', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600', type: 'upcoming' },
  { id: '4', title: 'Hackathon 2026', date: '05 May 2026', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600', type: 'upcoming' },
];

const MOCK_STATS = { students: 4100, staff: 200, courses: 50, projects: 100 };

function getMockData(endpoint) {
  if (endpoint.includes('departments')) return MOCK_DEPARTMENTS;
  if (endpoint.includes('notices')) return MOCK_NOTICES;
  if (endpoint.includes('events')) return MOCK_EVENTS;
  if (endpoint.includes('stats')) return MOCK_STATS;
  if (endpoint.includes('department/')) {
    const id = endpoint.split('/department/')[1];
    return MOCK_DEPARTMENTS.find(d => d.id === id) || MOCK_DEPARTMENTS[0];
  }
  return null;
}

export const api = {
  async get(endpoint) {
    try {
      const url = `${API_BASE}/api${endpoint}`;
      const res = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
      
      if (!res.ok) {
        console.warn(`API ${res.status} - Using mock data for ${endpoint}`);
        return getMockData(endpoint);
      }
      
      return await res.json();
    } catch (err) {
      console.warn(`API Error - Using mock data for ${endpoint}:`, err.message);
      return getMockData(endpoint);
    }
  },

  async post(endpoint, data) {
    try {
      const res = await fetch(`${API_BASE}/api${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      return { error: err.message };
    }
  },
};

export { MOCK_DEPARTMENTS, MOCK_NOTICES, MOCK_EVENTS, MOCK_STATS };

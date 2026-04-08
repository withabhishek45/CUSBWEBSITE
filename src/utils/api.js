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
  { id: '1', title: 'Academic Calendar AY 2025-26 for B.Sc.(Hons.) Agriculture programme', date: '2025', category: 'Academic', description: 'Academic Calendar for students admitted in B.Sc.(Hons.) Agriculture programme' },
  { id: '2', title: 'Academic Calendar AY 2025-26 for Diploma in Pharmacy', date: '2025', category: 'Academic', description: 'Academic Calendar for students of Diploma in Pharmacy' },
  { id: '3', title: 'Academic Calendar AY 2025-26 for PhD Students', date: '2025', category: 'Academic', description: 'Academic Calendar for PhD Students admitted in AY 2025-26' },
  { id: '4', title: 'Academic Calendar 2025-26 (January-June) for UG & PG programmes', date: '2025', category: 'Academic', description: 'Academic Calendar for Undergraduate and Postgraduate programmes' },
  { id: '5', title: 'Academic Calendar 2025-26 (July-December) for AY 2025-26', date: '2025', category: 'Academic', description: 'Academic Calendar for students of Undergraduate and B.Lib.I.Sc programmes' },
  { id: '6', title: 'Notice for Submission of Backlog Forms', date: '02-April-26', category: 'Examination', description: 'Backlog form for appearing in backlog course' },
  { id: '7', title: 'Notification regarding issuance of Character Certificate', date: '26-March-26', category: 'Examination', description: 'Notification No. CUSB/Acad./9-17/2025/AE-633' },
  { id: '8', title: 'Clarification for submission of Monthly Student Attendance Records', date: '19-March-26', category: 'Examination', description: 'Extension of last date for submission pending monthly attendance record' },
  { id: '9', title: 'Submission of Monthly Student Attendance Records', date: '12-March-26', category: 'Examination', description: 'Format available from Email' },
  { id: '10', title: 'Revised list of students for Supplementary/Backlog Examination', date: '13-Feb-26', category: 'Examination', description: 'Revised list of students applied for Supplementary/Backlog Examination' },
  { id: '11', title: 'Time-Table of Supplementary Examination', date: '12-Feb-26', category: 'Examination', description: 'Time-Table of 5 year Integrated UG-PG programme / Backlog Examination' },
  { id: '12', title: 'List of students for Supplementary/Backlog Examination of UG Programmes', date: '11-Feb-26', category: 'Examination', description: 'List of students applied for Supplementary/Backlog Examination' },
  { id: '13', title: 'Mandatory Course Registration on SAMARTH Portal', date: '05-Feb-26', category: 'Examination', description: 'All students must register on SAMARTH Portal' },
  { id: '14', title: 'Semester registration for Undergraduate and Postgraduate students', date: '04-Feb-26', category: 'Examination', description: 'Registration of students promoted to next semester' },
  { id: '15', title: 'Registration of newly enrolled Ph.D. Scholars on SAMARTH portal', date: '30-Jan-26', category: 'Examination', description: 'Generation of ABC ID for new Ph.D. scholars' },
  { id: '16', title: 'List of provisionally eligible students for Gold Medals', date: '29-Jan-26', category: 'Examination', description: 'List for Gold Medals of Year-2023 and Year-2024' },
  { id: '17', title: 'Issuance of Enrolment Number to Ph.D. students', date: '20-Jan-26', category: 'Examination', description: 'Enrolment Number for students admitted in Ph.D. programmes' },
  { id: '18', title: 'Physical Document Verification of Ph.D. Scholars', date: '21-Jan-26', category: 'Examination', description: 'Document verification for AY 2025-26' },
  { id: '19', title: 'Allotment of supervisor to Ph.D. Scholars', date: '21-Jan-26', category: 'Examination', description: 'Allotment of supervisor and co-supervisor' },
  { id: '20', title: 'Submission of six-monthly progress reports', date: '21-Jan-26', category: 'Examination', description: 'Progress reports for July-December 2025' },
  { id: '21', title: 'Issuance of Bonafide Certificate and Fee Structure', date: '15-Jan-26', category: 'Examination', description: 'Notice regarding issuance of certificates' },
  { id: '22', title: 'Extension of last date for registration to repeat courses', date: '15-Jan-26', category: 'Examination', description: 'Extension for Undergraduate and Postgraduate programmes' },
  { id: '23', title: 'Semester registration for Undergraduate (4th/6th/8th/10th) and PG (2nd/4th)', date: '10-Jan-26', category: 'Examination', description: 'Semester registration for January-June 2026' },
  { id: '24', title: 'Semester registration for Ph.D. Scholars', date: '10-Jan-26', category: 'Examination', description: 'Registration for AY 2020-21, 2022-23, 2023-24 and 2024-25' },
  { id: '25', title: 'Registration for repeat courses', date: '09-Jan-26', category: 'Examination', description: 'Form for Repeat Courses' },
  { id: '26', title: 'Semester registration for PG programmes (2nd Semester under paid seat)', date: '09-Jan-26', category: 'Examination', description: 'For the period of January-June 2026' },
  { id: '27', title: 'Supplementary Examination for Postgraduate Programmes', date: '30-July-25', category: 'Examination', description: 'Supplementary Examination for PG programmes' },
  { id: '28', title: 'Supplementary Examination for B.Sc. Agriculture & Integrated UG-PG', date: '30-July-25', category: 'Examination', description: 'Examination to be held in August-2025' },
  { id: '29', title: 'PM-Vidyalaxmi Schemes for Students', date: '23-Apr-25', category: 'Scholarship', description: 'New schemes for student welfare' },
  { id: '30', title: 'Degree data of passed out students in year-2024', date: '02-Jan-26', category: 'Academic', description: 'List of passed out students' },
];

const MOCK_EVENTS = [
  { id: '1', title: 'Annual Convocation', date: '15 Apr 2026', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', type: 'upcoming' },
  { id: '2', title: 'Research Symposium', date: '18 Apr 2026', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600', type: 'upcoming' },
  { id: '3', title: 'Tech Fest 2026', date: '20 Apr 2026', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600', type: 'upcoming' },
  { id: '4', title: 'Hackathon 2026', date: '05 May 2026', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600', type: 'upcoming' },
];

const MOCK_STATS = { students: 4100, staff: 200, courses: 50, projects: 100 };

const MOCK_ANNOUNCEMENTS = [
  { id: '1', title: 'Semester Registration Open', subtitle: 'Last Date: 30th April 2026' },
  { id: '2', title: 'Annual Convocation', subtitle: '15th April 2026' },
  { id: '3', title: 'Campus Placement Drive', subtitle: 'TCS & Infosys' },
  { id: '4', title: 'Examination Schedule Released', subtitle: 'Check Portal' },
  { id: '5', title: 'Fee Payment Deadline Extended', subtitle: '15th April' },
];

function getMockData(endpoint) {
  if (endpoint.includes('departments')) return MOCK_DEPARTMENTS;
  if (endpoint.includes('notices')) return MOCK_NOTICES;
  if (endpoint.includes('events')) return MOCK_EVENTS;
  if (endpoint.includes('stats')) return MOCK_STATS;
  if (endpoint.includes('announcements')) return MOCK_ANNOUNCEMENTS;
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

export { MOCK_DEPARTMENTS, MOCK_NOTICES, MOCK_EVENTS, MOCK_STATS, MOCK_ANNOUNCEMENTS };

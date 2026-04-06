const API_BASE = 'https://cusb-backend-1.onrender.com';

const MOCK_DATA = {
  departments: [
    { id: '1', name: 'Computer Science & Engineering', description: 'Department of Computer Science', programs: ['B.Tech', 'M.Tech', 'PhD'] },
    { id: '2', name: 'Mathematics', description: 'Department of Mathematics', programs: ['B.Sc', 'M.Sc', 'PhD'] },
    { id: '3', name: 'Physics', description: 'Department of Physics', programs: ['B.Sc', 'M.Sc', 'PhD'] }
  ],
  notices: [
    { id: '1', title: 'Semester Registration Open', date: '2026-04-01', category: 'Academic' },
    { id: '2', title: 'Examination Schedule Released', date: '2026-04-02', category: 'Examination' }
  ],
  news: [
    { id: '1', title: 'New Research Lab Inaugurated', date: '2026-04-01' },
    { id: '2', title: 'Placement Drive Success', date: '2026-04-03' }
  ],
  announcements: [
    { id: '1', text: 'Campus will remain closed on April 15th', type: 'info' }
  ],
  events: [
    { id: '1', title: 'Tech Fest 2026', date: '2026-04-20', type: 'upcoming' }
  ],
  stats: { students: 4100, staff: 200, courses: 50, projects: 100 }
};

export const api = {
  async get(endpoint) {
    try {
      console.log(`API Call: ${API_BASE}${endpoint}`);
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!res.ok) {
        console.error(`API Error: HTTP ${res.status}`);
        return MOCK_DATA[endpoint.replace('/api/', '')] || null;
      }
      
      const data = await res.json();
      console.log(`API Success: ${endpoint}`, data);
      return data;
    } catch (err) {
      console.error(`API Error (${endpoint}):`, err.message);
      console.log('Using mock data as fallback');
      return MOCK_DATA[endpoint.replace('/api/', '')] || null;
    }
  },

  async post(endpoint, data) {
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      console.error(`API Error (${endpoint}):`, err.message);
      return { error: err.message };
    }
  },
};

export { MOCK_DATA };

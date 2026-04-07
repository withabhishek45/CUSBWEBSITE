const API_BASE = 'https://cusb-backend-1.onrender.com';

export const api = {
  async get(endpoint) {
    try {
      console.log(`API Call: ${API_BASE}/api${endpoint}`);
      const res = await fetch(`${API_BASE}/api${endpoint}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (!res.ok) {
        console.error(`API Error: HTTP ${res.status}`);
        return null;
      }
      
      const data = await res.json();
      console.log(`API Success:`, data);
      return data;
    } catch (err) {
      console.error(`API Error:`, err.message);
      return null;
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
      console.error(`API Error:`, err.message);
      return { error: err.message };
    }
  },
};

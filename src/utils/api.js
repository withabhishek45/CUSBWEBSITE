const API_BASE = (import.meta.env.VITE_API_URL || '') + '/api';

let cachedData = null;
let cacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000;

export const api = {
  async getAll() {
    const now = Date.now();
    if (cachedData && now - cacheTime < CACHE_DURATION) {
      return cachedData;
    }
    try {
      const res = await fetch(`${API_BASE}/all`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      cachedData = data;
      cacheTime = now;
      return data;
    } catch (err) {
      console.error(`API Error (/all):`, err.message);
      return null;
    }
  },

  async get(endpoint) {
    try {
      const res = await fetch(`${API_BASE}${endpoint}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error(`API Error (${endpoint}):`, err.message);
      return null;
    }
  },

  async post(endpoint, data) {
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      cachedData = null;
      return await res.json();
    } catch (err) {
      console.error(`API Error (${endpoint}):`, err.message);
      return { error: err.message };
    }
  },

  clearCache() {
    cachedData = null;
    cacheTime = 0;
  }
};

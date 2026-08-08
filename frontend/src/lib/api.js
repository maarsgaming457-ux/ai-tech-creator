import axios from 'axios';

const BASE_URL = 'https://ai-tech-creator-1.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000 // 30s timeout
});

export const generatePost = async (category, topic) => {
  const endpoint = '/api/generate-post';
  const payload = {
    category: category || "general",
    series_topic: topic
  };
  
  console.log(`[API REQUEST] POST ${BASE_URL}${endpoint}`);
  console.log(`[API PAYLOAD]`, payload);
  
  try {
    const response = await api.post(endpoint, payload);
    console.log(`[API RESPONSE] Success:`, response.data);
    
    if (!response.data) {
      throw new Error("No response generated from the server.");
    }
    
    return response.data;
  } catch (error) {
    console.error(`[API ERROR]`, error.message);
    if (error.response) {
      console.error(`[API ERROR DATA]`, error.response.data);
    } else if (error.request) {
      console.error(`[API ERROR NETWORK] Server not reachable`);
      throw new Error("Server not reachable. Please check your internet connection or try again later.");
    }
    throw error;
  }
};

export default api;

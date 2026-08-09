const API_URL = import.meta.env.VITE_API_BASE_URL || 'https://ai-tech-creator.onrender.com';

export const generatePost = async (category, userMessage) => {
  const url = `${API_URL}/api/generate`;
  
  const payload = {
    category: category || "general",
    series_topic: userMessage
  };
  
  console.log(`[API REQUEST] POST ${url}`);
  console.log(`[API PAYLOAD]`, payload);
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    // Check if response is empty
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { error: 'Unknown server error' };
      }
      console.error(`[API ERROR] Response not ok:`, errorData);
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`[API RESPONSE] Success:`, data);
    
    if (!data) {
      throw new Error("No response generated from the server.");
    }
    
    return data;
    
  } catch (error) {
    // Check for network errors (e.g. server is down or CORS blocked)
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      console.error(`[API ERROR NETWORK] Server not reachable`);
      throw new Error("Server not reachable. Please check your internet connection or try again later.");
    }
    
    console.error(`[API ERROR]`, error.message);
    throw new Error(error.message || "Something went wrong");
  }
};

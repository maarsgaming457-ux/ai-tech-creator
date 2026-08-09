const API = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;

export const generatePost = async (userMessage) => {
  try {
    console.log("[API REQUEST]", API + "/api/generate");

    const res = await fetch(`${API}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: "general",
        series_topic: userMessage
      })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    console.log("[API RESPONSE]", data);

    return data;
  } catch (error) {
    console.error("[API ERROR]", error);
    throw new Error("Server not reachable or CORS issue");
  }
};

export const initAgent = async () => {
  try {
    const res = await fetch(`${API}/api/agent/init`, { method: "POST" });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("API RESPONSE:", data);
    return data;
  } catch (error) {
    console.error("[AGENT INIT ERROR]", error);
    throw error;
  }
};

export const fetchAgentFeed = async (agentId) => {
  try {
    const url = agentId ? `${API}/api/agent/feed?agentId=${agentId}` : `${API}/api/agent/feed`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("API RESPONSE:", data);
    return data;
  } catch (error) {
    console.error("[AGENT FEED ERROR]", error);
    throw error;
  }
};

export const stopAgent = async () => {
  try {
    const res = await fetch(`${API}/api/agent/stop`, { method: "POST" });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("API RESPONSE:", data);
    return data;
  } catch (error) {
    console.error("[AGENT STOP ERROR]", error);
    throw error;
  }
};

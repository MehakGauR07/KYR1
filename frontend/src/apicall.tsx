import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SESSION_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

const createSessionId = () => {
  const newSessionId = uuidv4(); // Assuming you're using a UUID generator
  const sessionData = { session_id: newSessionId, timestamp: Date.now() };
  localStorage.setItem('wit_session_data', JSON.stringify(sessionData));
  
  // Set a timer to clear the session ID after the expiry time
  setTimeout(() => {
    clearSessionId();
  }, SESSION_EXPIRY_MS);

  return newSessionId;
};

const getSessionId = () => {
  const sessionData = JSON.parse(localStorage.getItem('wit_session_data') || '{}');
  const { session_id, timestamp } = sessionData;

  // If session ID doesn't exist or has expired, create a new one
  if (!session_id || (timestamp && Date.now() - timestamp > SESSION_EXPIRY_MS)) {
    return createSessionId();
  }

  // Refresh the session timestamp
  sessionData.timestamp = Date.now();
  localStorage.setItem('wit_session_data', JSON.stringify(sessionData));

  return session_id;
};

export const clearSessionId = () => {
  localStorage.removeItem('wit_session_data');
  console.log('Session ID cleared after inactivity.');
};


const sendMessageToWitAI = async (message: string) => {
  const session_id = getSessionId(); // Get or generate a session ID
  const api_version = '20240908'; // Replace with the correct API version
  const wit_ai_token = 'DFT7X65NQWHVCOAFPZ6RGGBDEQV24VU7'; // Replace with your Wit.ai token

  try {
    const response = await axios.post(
      `https://api.wit.ai/event?v=${api_version}&session_id=${session_id}&context_map=%7B%7D`,
      {
        type: 'message',
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${wit_ai_token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Extract the actual text string from the response
    const responseText = response.data?.response?.text || 'No response from Wit.ai';
    console.log('Response from Wit.ai:', response.data);
    return responseText; // Return the string text for further processing
  } catch (error) {
    console.error('Error sending message to Wit.ai:', error);
    throw error;
  }
};

export default sendMessageToWitAI;

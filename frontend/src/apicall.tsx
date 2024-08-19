// apicall.tsx
import axios from 'axios';

const apiUrl = 'http://localhost:5005/webhooks/rest/webhook'; // Correct URL

async function sendMessageToBot(message: string) {
  try {
    const response = await axios.post(apiUrl, { message });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error sending message:', error);
    return []; // Return an empty array if there is an error
  }
}

export default sendMessageToBot;

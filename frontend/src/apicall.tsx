import axios from 'axios';

const sendMessageToWitAI = async (message: string) => {
  const session_id = 'prodt5b'; // Replace with your session ID
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

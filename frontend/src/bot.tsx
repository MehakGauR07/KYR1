import { useState, useRef, useEffect } from 'react';
import sendMessageToWitAI, { clearSessionId } from './apicall'; // Import the function

const Chat = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState<{ text: string; sender: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const endOfMessagesRef = useRef<HTMLDivElement>(null); // Ref for the end of messages

  const handleSend = async () => {
    if (!message.trim()) return; // Do nothing if the message is empty

    setIsLoading(true); // Start loading indicator

    try {
      // Send the message to Wit.ai and get the response text
      const witResponseText = await sendMessageToWitAI(message);

      // Update the responses state with the user's message and Wit.ai's reply
      setResponses([
        ...responses,
        { text: message, sender: 'user' },
        { text: witResponseText, sender: 'bot' } // Use the extracted text string from Wit.ai
      ]);

      // Clear the input field
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      // Optionally, display an error message in the chat
      setResponses([...responses, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim()) {
      handleSend();
    }
  };

  const handleRefreshChat = () => {
    clearSessionId(); // Clear the session ID
    setResponses([]); // Clear the chat history
  };

  // Scroll to the bottom whenever responses change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [responses]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-8 h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <div className="space-y-4">
            {responses.map((res, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${res.sender === 'user' ? 'bg-blue-100 text-blue-800 self-end' : 'bg-gray-100 text-gray-800 self-start'}`}
              >
                {res.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-center p-3 text-gray-600">Loading...</div>
            )}
            <div ref={endOfMessagesRef} /> {/* Dummy div to scroll into view */}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d42755]"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#d42755] text-white rounded-lg hover:bg-[#b51d48]"
            disabled={isLoading} // Disable send button while loading
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
          <button
            onClick={handleRefreshChat}
            className="px-4 py-2 bg-[#d42755] text-white rounded-lg hover:bg-[#b51d48]"
            disabled={isLoading} // Disable refresh button while loading
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

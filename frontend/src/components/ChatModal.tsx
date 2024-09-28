import React from 'react';
import Chat from '../bot'; // Import your existing Chat component

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full h-full max-h-full p-4 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close chat"
        >
          ✖️
        </button>
        <div className="flex flex-col h-full items-center justify-center">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ChatModal;

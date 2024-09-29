// src/FloatingChatButton.tsx
import React from 'react';
import icon from '../assets/icon.png';

const FloatingChatButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 p-3 bg-[#FAEBF0] text-white rounded-full shadow-lg transition transform hover:bg-[#F7D8E0] hover:scale-105"
      aria-label="Chat with us"
    >
      <img src={icon} alt="Chat Icon" className="w-11 h-11" />
    </button>
  );
};

export default FloatingChatButton;

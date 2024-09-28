// src/FloatingChatButton.tsx
import React from 'react';

const FloatingChatButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      aria-label="Chat with us"
    >
      💬
    </button>
  );
};

export default FloatingChatButton;

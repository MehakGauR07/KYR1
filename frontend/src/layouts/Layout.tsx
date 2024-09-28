// src/Layout.tsx
import { useState } from 'react';
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FloatingChatButton from '../components/FloatingChat';
import ChatModal from '../components/ChatModal';

const Layout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Hero/>
      <main className="flex-grow container mx-auto px-6 py-2">
        <About />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-6">
        © 2024 KYR. All rights reserved.
      </footer>
      <FloatingChatButton onClick={handleOpenChat} />
      <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />
    </div>
  );
};

export default Layout;

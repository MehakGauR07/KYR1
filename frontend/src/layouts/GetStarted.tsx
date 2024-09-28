import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/Form";
import HangmanGame from "../components/hangman";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import hangman from "../assets/hangman/hangman-6.svg";
import RockPaperScissors from "../components/rockps";
import consti from "../assets/rps/constitution.png";
import BoggleGame from "../components/BoggleGame";
import boggle from "../assets//boggle.jpeg";
import QuizComponent from "../components/quiz";
import qc from "../assets/quizcard.png";
import WordScramble from "../components/scramble";
import sc from "../assets/scarmble.png";

const GetStarted = () => {
  // State to track which game is active
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // Function to open the clicked game
  const handleGameClick = (gameName: string) => {
    setActiveGame(gameName);
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveGame(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header showGetStarted={false} />
      <Hero />
      <main className="flex-grow container mx-auto px-6 py-2">
        {/* Form Section */}
        <div className="mb-8">
  <div className="border border-pink-200 p-4 mb-4">
    <Form />
  </div>
  <div className="border border-pink-200 p-4 mb-4">
    <Form2 />
  </div>
  <div className="border border-pink-200 p-4">
    <Form3 />
  </div>
</div>


        {/* Separator Strip */}
        <div className="bg-[#d42755] h-14 my-8 w-full flex items-center justify-center border-rounded">
          <p className="text-white text-3xl font-semibold">Games</p>
        </div>

        {/* Game Section */}
        <div className="mb-8 text-center">
          {/* Game Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
  className="relative bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow min-h-[250px] flex flex-col justify-between overflow-hidden"
  onClick={() => handleGameClick("hangman")}
>
  {/* Background Image without Blur */}
  <div
    className="absolute inset-0 bg-no-repeat bg-center transition-transform transform hover:scale-110"
    style={{
      backgroundImage: `url(${hangman})`,
      backgroundSize: 'contain', // Image will be fully visible and not distorted
      backgroundPosition: 'center', // Centers the image inside the div
      transition: 'transform 0.3s ease', // Smooth transition for scaling
    }}
  ></div>

  {/* Card Content with Blur Effect */}
  <div className="relative z-10 p-6 bg-white bg-opacity-50 backdrop-blur-sm">
    <p className="text-xl font-semibold">Hangman</p>
    <p className="text-sm text-gray-600">Test your word-guessing skills!</p>
  </div>
</div>


            {/* Card 2 */}
<div
  className="relative bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow min-h-[250px] flex flex-col justify-between overflow-hidden"
  onClick={() => handleGameClick("game2")}
>
  {/* Background Image without Blur */}
  <div
    className="absolute inset-0 bg-no-repeat bg-center transition-transform transform hover:scale-110"
    style={{
      backgroundImage: `url(${consti})`,
      backgroundSize: 'cover', // Ensure the image covers the entire area
      backgroundPosition: 'center', // Centers the image inside the div
      transition: 'transform 0.3s ease', // Smooth transition for scaling
    }}
  ></div>

  {/* Card Content with Blur Effect */}
  <div className="relative z-10 p-6 bg-white bg-opacity-50 backdrop-blur-sm">
    <p className="text-xl font-semibold">Rock Paper Scissors</p>
    <p className="text-sm text-gray-600">A fun and exciting game based on chance!</p>
  </div>
</div>

            {/* Card 3 */}
            <div
              className="relative bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow min-h-[250px] flex flex-col justify-between overflow-hidden"
              onClick={() => handleGameClick("game3")}
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center transition-transform transform hover:scale-110"
                style={{ backgroundImage: `url(${boggle})` }}
              ></div>
              {/* Card Content */}
              <div className="relative z-10 p-6 bg-white bg-opacity-50 backdrop-blur-sm">
                <p className="text-xl font-semibold">Boggle Game</p>
                <p className="text-sm text-gray-600">Challenge yourself with this word finding game!</p>
              </div>
            </div>
            
            <div
              className="relative bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow min-h-[250px] flex flex-col justify-between overflow-hidden"
              onClick={() => handleGameClick("game4")}
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center transition-transform transform hover:scale-110"
                style={{ backgroundImage: `url(${qc})` }}
              ></div>
              {/* Card Content */}
              <div className="relative z-10 p-6 bg-white bg-opacity-50 backdrop-blur-sm">
                <p className="text-xl font-semibold">Quiz game</p>
                <p className="text-sm text-gray-600">The classic quiz game to tickle your brain!</p>
              </div>
            </div>

            <div
              className="relative bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow min-h-[250px] flex flex-col justify-between overflow-hidden"
              onClick={() => handleGameClick("game5")}
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center transition-transform transform hover:scale-110"
                style={{ backgroundImage: `url(${sc})` }}
              ></div>
              {/* Card Content */}
              <div className="relative z-10 p-6 bg-white bg-opacity-50 backdrop-blur-sm">
                <p className="text-xl font-semibold">Scramble game</p>
                <p className="text-sm text-gray-600">Can you guess the word before time runs out?</p>
              </div>
            </div>

          </div>
          

          {/* Display active game */}
          {/* Display active game */}
          {activeGame && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-3xl mx-4 md:mx-6 lg:mx-8 max-h-[90vh] overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      {/* Modal Content */}
      <div className="text-center">
        {activeGame === "hangman" && <HangmanGame />}
        {activeGame === "game2" && <RockPaperScissors/>}
        {activeGame === "game3" && <BoggleGame dictionaryApiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/" />}
        {activeGame === "game4" && <QuizComponent/>}
        {activeGame === "game5" && <WordScramble />}
      </div>
    </div>
  </div>
)}


        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-6">
        © 2024 KYR. All rights reserved.
      </footer>
    </div>
  );
};

export default GetStarted;

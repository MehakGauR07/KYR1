// src/TypingTest.tsx
import React, { useState, useEffect } from 'react';

const paragraphs = [
  "Your first paragraph for typing test.",
  "Another example sentence for practice typing.",
  "Feel free to add more sentences here."
];

const TypingTest: React.FC = () => {
  const [timer, setTimer] = useState<number>(60);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');
  const [activeParagraph, setActiveParagraph] = useState<string>('');
  const [wpm, setWpm] = useState<number>(0);
  const [cpm, setCpm] = useState<number>(0);

  useEffect(() => {
    loadParagraph();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTyping && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTyping, timer]);

  const loadParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setActiveParagraph(paragraphs[randomIndex]);
    setTypedText('');
    setCharIndex(0);
    setMistakes(0);
    setTimer(60);
    setIsTyping(false);
    setWpm(0);
    setCpm(0);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedChar = e.target.value.split('')[charIndex];
    if (charIndex < activeParagraph.length && timer > 0) {
      if (!isTyping) setIsTyping(true);
      if (typedChar === undefined) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          if (activeParagraph[charIndex - 1] !== typedText[charIndex - 1]) {
            setMistakes((prev) => prev - 1);
          }
        }
      } else {
        if (activeParagraph[charIndex] === typedChar) {
          setCharIndex((prev) => prev + 1);
        } else {
          setMistakes((prev) => prev + 1);
          setCharIndex((prev) => prev + 1);
        }
        setTypedText(e.target.value);
      }

      // Update WPM and CPM
      const currentWPM = Math.round(((charIndex - mistakes) / 5) / (60 - timer) * 60);
      const currentCPM = charIndex - mistakes;
      setWpm(currentWPM < 0 || !currentWPM ? 0 : currentWPM);
      setCpm(currentCPM);
    }
  };

  const resetGame = () => {
    loadParagraph();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
      <h1 className="text-3xl font-semibold text-red-700">!!! Typing Speed Test !!!</h1>
      <input
        type="text"
        className="mt-4 w-full p-2 border rounded"
        onChange={handleInput}
        value={typedText}
        placeholder="Start typing here..."
      />
      <div className="content-box mt-4 p-4 bg-white rounded shadow-lg">
        <div className="typing-text">
          <p>
            {activeParagraph.split('').map((char, index) => {
              let className = '';
              if (index < charIndex) {
                className = char === typedText[index] ? 'text-green-600' : 'text-red-600';
              }
              return (
                <span key={index} className={className}>
                  {char}
                </span>
              );
            })}
          </p>
        </div>
        <ul className="result-details flex justify-between mt-4">
          <li className="time">
            <p>Time Left: <b>{timer}</b>s</p>
          </li>
          <li className="mistake">
            <p>Mistakes: <span>{mistakes}</span></p>
          </li>
          <li className="wpm">
            <p>WPM: <span>{wpm}</span></p>
          </li>
          <li className="cpm">
            <p>CPM: <span>{cpm}</span></p>
          </li>
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
          onClick={resetGame}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default TypingTest;

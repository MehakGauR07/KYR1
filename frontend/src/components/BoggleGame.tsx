import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BoggleGameProps {
  dictionaryApiUrl: string;
}

interface WordDefinition {
  word: string;
  definition: string;
}

const lawWords = [
  "ACT", "BILL", "LAW", "JURY", "VOTE", "APPEAL",
  "COURT", "LIABLE", "TRIAL", "CLAIM", "PLEA", "OATH", "CLERK",
  "DEED", "REMIT", "FINE", "BAIL", "DUTY", "TAX", "TERM", "VOTE",
  "DEBT", "VOID", "WRIT", "JUROR", "FUND", "BOND", "STATE",
  "PARTY", "PROOF", "JUDGE", "CRIME", "TREAT", "FRAUD", "PACT",
  "MINOR", "GUILD", "GUARD", "PANEL", "AGENT", "CIVIL", "STATE",
  "LEGAL", "SCAM", "LEASE", "AWARD", "BENCH"
];

const getRandomWordsWithDefinitions = (words: string[], count: number): WordDefinition[] => {
  const availableWords = [...words];
  const result: WordDefinition[] = [];
  while (result.length < count && availableWords.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const word = availableWords.splice(randomIndex, 1)[0];
    result.push({ word, definition: '' });
  }
  return result;
};

const generateBoard = (selectedWords: WordDefinition[]): string[][] => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const board: string[][] = Array(6).fill(null).map(() => Array(6).fill(''));

  const canPlaceWord = (word: string, startRow: number, startCol: number, direction: string): boolean => {
    if (direction === 'H') {
      if (startCol + word.length > 6) return false;
      for (let i = 0; i < word.length; i++) {
        if (board[startRow][startCol + i] !== '' && board[startRow][startCol + i] !== word[i]) {
          return false;
        }
      }
    } else if (direction === 'V') {
      if (startRow + word.length > 6) return false;
      for (let i = 0; i < word.length; i++) {
        if (board[startRow + i][startCol] !== '' && board[startRow + i][startCol] !== word[i]) {
          return false;
        }
      }
    } else if (direction === 'D') {
      if (startRow + word.length > 6 || startCol + word.length > 6) return false;
      for (let i = 0; i < word.length; i++) {
        if (board[startRow + i][startCol + i] !== '' && board[startRow + i][startCol + i] !== word[i]) {
          return false;
        }
      }
    }
    return true;
  };

  const placeWord = (word: string, startRow: number, startCol: number, direction: string): boolean => {
    if (canPlaceWord(word, startRow, startCol, direction)) {
      if (direction === 'H') {
        for (let i = 0; i < word.length; i++) {
          board[startRow][startCol + i] = word[i];
        }
      } else if (direction === 'V') {
        for (let i = 0; i < word.length; i++) {
          board[startRow + i][startCol] = word[i];
        }
      } else if (direction === 'D') {
        for (let i = 0; i < word.length; i++) {
          board[startRow + i][startCol + i] = word[i];
        }
      }
      return true;
    }
    return false;
  };

  selectedWords.forEach(({ word }) => {
    let placed = false;
    const maxAttempts = 100;
    let attempts = 0;

    while (!placed && attempts < maxAttempts) {
      const direction = ['H', 'V', 'D'][Math.floor(Math.random() * 3)];
      const startRow = Math.floor(Math.random() * 6);
      const startCol = Math.floor(Math.random() * 6);

      placed = placeWord(word, startRow, startCol, direction);
      attempts++;
    }
  });

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      if (board[row][col] === '') {
        board[row][col] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }

  return board;
};

const BoggleGame: React.FC<BoggleGameProps> = ({ dictionaryApiUrl }) => {
  const [selectedWords, setSelectedWords] = useState<WordDefinition[]>(() => getRandomWordsWithDefinitions(lawWords, 6));
  const [board, setBoard] = useState<string[][]>(() => generateBoard(selectedWords));
  const [word, setWord] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [guessedWords, setGuessedWords] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const maxAttempts = 10;

  useEffect(() => {
    setBoard(generateBoard(selectedWords)); // Generate board only once at the start
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (attempts >= maxAttempts || selectedWords.every(({ word }) => guessedWords.has(word.toLowerCase()))) {
      setShowModal(true);
    }
  }, [attempts, guessedWords, selectedWords]);

  const handleGuess = async () => {
    if (word.trim().length > 0) {
      const guessedWord = word.toLowerCase();
      const foundWord = selectedWords.find((w) => w.word.toLowerCase() === guessedWord);

      if (foundWord && !guessedWords.has(guessedWord)) {
        setMessage('Correct guess!');

        try {
          const response = await axios.get(`${dictionaryApiUrl}${guessedWord}`);
          const data = response.data;

          if (data && data[0] && data[0].meanings && data[0].meanings.length > 0) {
            const definition = data[0].meanings[0].definitions[0].definition;
            setSelectedWords((prevWords) =>
              prevWords.map((w) =>
                w.word.toLowerCase() === guessedWord
                  ? { ...w, definition: definition }
                  : w
              )
            );
          } else {
            console.warn('Definition not found in API response.');
            setSelectedWords((prevWords) =>
              prevWords.map((w) =>
                w.word.toLowerCase() === guessedWord
                  ? { ...w, definition: 'Definition not available.' }
                  : w
              )
            );
          }
        } catch (error) {
          console.error('Error fetching word definition:', error);
          setSelectedWords((prevWords) =>
            prevWords.map((w) =>
              w.word.toLowerCase() === guessedWord
                ? { ...w, definition: 'Error fetching word definition.' }
                : w
            )
          );
        }

        setGuessedWords((prevGuessedWords) => new Set(prevGuessedWords).add(guessedWord));
      } else {
        setMessage('Incorrect guess or already guessed. Try again.');
        setAttempts((prev) => prev + 1); // Increment attempts for each guess
      }

      setWord(''); // Clear the input field
    }
  };

  const handleTryAgain = () => {
    const newWords = getRandomWordsWithDefinitions(lawWords, 6);
    setSelectedWords(newWords);
    setBoard(generateBoard(newWords)); // Regenerate board only when starting a new game
    setWord('');
    setMessage(null);
    setGuessedWords(new Set());
    setAttempts(0);
    setShowModal(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission behavior
      handleGuess();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Boggle Game</h1>

      <div className="grid grid-cols-6 gap-2 mb-6">
        {board.map((row, rowIndex) =>
          row.map((letter, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="text-xl font-bold text-gray-900 p-4 w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-300"
            >
              {letter}
            </div>
          ))
        )}
      </div>

      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
        onKeyDown={handleKeyDown}
        placeholder="Guess a word"
        className="p-2 border rounded-lg w-64 mb-4 text-center text-xl"
      />
      <button
        onClick={handleGuess}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md"
      >
        Submit Guess
      </button>

      {message && (
        <div className="mt-4 text-lg text-gray-800">
          <strong>{message}</strong>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Guessed Words and Definitions:</h3>
        <ul className="list-disc list-inside">
          {selectedWords
            .filter(({ word }) => guessedWords.has(word.toLowerCase()))
            .map(({ word, definition }) => (
              <li key={word} className="text-lg text-gray-600">
                <strong>{word}:</strong> {definition || 'Definition not yet available.'}
              </li>
            ))}
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Game Over</h2>
            <p className="mb-4">
              {attempts >= maxAttempts
                ? 'You have reached the maximum number of attempts.'
                : 'Congratulations! You have guessed all words correctly.'}
            </p>
            <button
              onClick={handleTryAgain}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoggleGame;
99
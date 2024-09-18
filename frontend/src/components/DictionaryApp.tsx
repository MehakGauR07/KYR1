import React, { useState, useEffect } from 'react';

type Phonetic = {
  text: string;
  audio: string;
};

type Definition = {
  definition: string;
  example?: string;
  synonyms: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

type WordResult = {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};

const Modal = ({ result, onClose, onPlayAudio, fetchApi }: { result: WordResult[]; onClose: () => void; onPlayAudio: () => void; fetchApi: (word: string) => void; }) => {
  if (!result || !result[0]) return null;

  const { word, meanings, phonetics } = result[0];
  const { partOfSpeech, definitions } = meanings[0];
  const { text: phoneticText, audio } = phonetics[0];
  const { definition, example, synonyms } = definitions[0];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <span className="material-icons font-bold">X</span>
        </button>
        <header className="text-2xl font-medium text-center mb-4">Word Details</header>
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b border-gray-200 pb-4">
            <div>
              <p className="text-xl font-medium">{word}</p>
              <span className="text-sm text-gray-500">{`${partOfSpeech} /${phoneticText}/`}</span>
            </div>
            {audio && (
              <i
                onClick={onPlayAudio}
                className="fas fa-volume-up text-gray-400 cursor-pointer"
              ></i>
            )}
          </li>
          <li className="space-y-2">
            <div className="border-l-4 border-blue-500 pl-2">
              <p className="text-lg font-medium">Meaning</p>
              <span className="text-gray-700">{definition}</span>
            </div>
          </li>
          <li className="space-y-2">
            <div className="border-l-4 border-blue-500 pl-2">
              <p className="text-lg font-medium">Example</p>
              <span className="text-gray-700">{example}</span>
            </div>
          </li>
          {synonyms && synonyms.length > 0 && (
            <li className="space-y-2">
              <div className="border-l-4 border-blue-500 pl-2">
                <p className="text-lg font-medium">Synonyms</p>
                <div className="flex flex-wrap space-x-2">
                  {synonyms.slice(0, 5).map((synonym, index) => (
                    <span
                      key={index}
                      onClick={() => fetchApi(synonym)}
                      className="text-blue-500 cursor-pointer underline"
                    >
                      {synonym}{index < 4 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const DictionaryApp = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState<WordResult[] | null>(null);
  const [infoText, setInfoText] = useState('Type any existing word and press enter to get meaning, example, synonyms, etc.');
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (result && result[0] && result[0].phonetics[0].audio) {
      setAudio(new Audio(result[0].phonetics[0].audio));
      setInfoText('');
    }
  }, [result]);

  const fetchApi = async (word: string) => {
    setInfoText(`Searching the meaning of "${word}"`);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data: WordResult[] = await response.json();
      setResult(data);
      setIsModalOpen(true);
    } catch {
      setInfoText(`Can't find the meaning of "${word}". Please, try to search for another word.`);
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && word) {
      fetchApi(word);
    }
  };

  const handleVolumeClick = () => {
    if (audio) {
      audio.play();
    }
  };

  const handleClearSearch = () => {
    setWord('');
    setResult(null);
    setInfoText('Type any existing word and press enter to get meaning, example, synonyms, etc.');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto my-10 p-6">
      <header className="text-2xl font-medium text-center mb-6">Give a word to find its meaning!</header>
      <div className="relative">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyUp={handleSearch}
          placeholder="Search a word"
          className="w-full h-12 px-10 border border-gray-400 rounded-lg focus:border-blue-500 outline-none"
        />
        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        {word && (
          <span
            onClick={handleClearSearch}
            className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer font-bold"
          >
            clear
          </span>
        )}
      </div>
      <p className={`text-sm mt-4 ${result ? 'text-gray-600' : 'text-gray-400'}`}>{infoText}</p>
      
      {/* Modal */}
      {isModalOpen && result && (
        <Modal
          result={result}
          onClose={handleCloseModal}
          onPlayAudio={handleVolumeClick}
          fetchApi={fetchApi} // Pass fetchApi as a prop
        />
      )}
    </div>
  );
};

export default DictionaryApp;

import React, { useState, useEffect } from 'react';
import hangman0 from '../assets/hangman/hangman-0.svg';
import hangman1 from '../assets/hangman/hangman-1.svg';
import hangman2 from '../assets/hangman/hangman-2.svg';
import hangman3 from '../assets/hangman/hangman-3.svg';
import hangman4 from '../assets/hangman/hangman-4.svg';
import hangman5 from '../assets/hangman/hangman-5.svg';
import hangman6 from '../assets/hangman/hangman-6.svg';
import lost from '../assets/hangman/lost.gif'
import vic from '../assets/hangman/victory.gif'
const wordList = [
    {
        word: "constitution",
        hint: "A document outlining the fundamental principles of a government."
    },
    {
        word: "amendment",
        hint: "A change or addition to a legal document."
    },
    {
        word: "democracy",
        hint: "A system of government by the whole population."
    },
    {
        word: "legislation",
        hint: "Laws considered collectively."
    },
    {
        word: "judiciary",
        hint: "The system of courts that interprets and applies the law."
    },
    {
        word: "sovereignty",
        hint: "Supreme power or authority."
    },
    {
        word: "federalism",
        hint: "A system of government in which entities share power."
    },
    {
        word: "citizenship",
        hint: "The status of being a legal member of a country."
    },
    {
        word: "rights",
        hint: "Legal entitlements or protections."
    },
    {
        word: "preamble",
        hint: "An introductory statement in a document."
    },
    {
        word: "republic",
        hint: "A state in which supreme power is held by the people and their elected representatives."
    },
    {
        word: "bill",
        hint: "A draft of a proposed law presented to parliament for discussion."
    },
    {
        word: "veto",
        hint: "A constitutional right to reject a decision or proposal made by a law-making body."
    },
    {
        word: "ratification",
        hint: "The action of signing or giving formal consent to a treaty, contract, or agreement."
    },
    {
        word: "bicameral",
        hint: "A legislative body having two branches or chambers."
    },
    {
        word: "unicameral",
        hint: "A legislative body having a single legislative chamber."
    },
    {
        word: "executive",
        hint: "The branch of government responsible for implementing laws."
    },
    {
        word: "legislature",
        hint: "The legislative body of a country or state."
    },
    {
        word: "precedent",
        hint: "A legal decision that serves as an authoritative rule in future similar cases."
    },
    {
        word: "jurisdiction",
        hint: "The official power to make legal decisions and judgments."
    },
    {
        word: "plaintiff",
        hint: "A person who brings a case against another in a court of law."
    },
    {
        word: "defendant",
        hint: "An individual, company, or institution sued or accused in a court of law."
    },
    {
        word: "appeal",
        hint: "Apply to a higher court for a reversal of the decision of a lower court."
    },
    {
        word: "verdict",
        hint: "A decision on a disputed issue in a civil or criminal case."
    },
    {
        word: "indictment",
        hint: "A formal charge or accusation of a serious crime."
    },
    {
        word: "subpoena",
        hint: "A writ ordering a person to attend a court."
    },
    {
        word: "testimony",
        hint: "A formal written or spoken statement given in a court of law."
    },
    {
        word: "affidavit",
        hint: "A written statement confirmed by oath for use as evidence in court."
    },
    {
        word: "tort",
        hint: "A wrongful act leading to civil legal liability."
    },
    {
        word: "contract",
        hint: "A written or spoken agreement that is enforceable by law."
    },
    {
        word: "negligence",
        hint: "Failure to take proper care in doing something, leading to damage or injury."
    },
    {
        word: "liability",
        hint: "The state of being responsible for something, especially by law."
    },
    {
        word: "damages",
        hint: "A sum of money claimed or awarded in compensation for a loss or injury."
    },
    {
        word: "injunction",
        hint: "An authoritative warning or order."
    },
    {
        word: "arbitration",
        hint: "The use of an arbitrator to settle a dispute."
    },
    {
        word: "mediation",
        hint: "Intervention in a dispute to resolve it."
    },
    {
        word: "settlement",
        hint: "An official agreement intended to resolve a dispute."
    },
    {
        word: "litigation",
        hint: "The process of taking legal action."
    },
    {
        word: "prosecution",
        hint: "The institution and conducting of legal proceedings against someone."
    },
    {
        word: "defense",
        hint: "The case presented by or on behalf of the party being accused or sued."
    },
    {
        word: "acquittal",
        hint: "A judgment that a person is not guilty of the crime with which they have been charged."
    },
    {
        word: "conviction",
        hint: "A formal declaration that someone is guilty of a criminal offense."
    },
    {
        word: "sentence",
        hint: "The punishment assigned to a defendant found guilty by a court."
    },
    {
        word: "parole",
        hint: "The release of a prisoner temporarily or permanently before the completion of a sentence."
    },
    {
        word: "probation",
        hint: "The release of an offender from detention, subject to a period of good behavior under supervision."
    },
    {
        word: "appeal",
        hint: "Apply to a higher court for a reversal of the decision of a lower court."
    },
    {
        word: "juror",
        hint: "A member of a jury."
    },
    {
        word: "bail",
        hint: "The temporary release of an accused person awaiting trial."
    },
    {
        word: "warrant",
        hint: "A document issued by a legal or government official authorizing the police to make an arrest."
    },
    {
        word: "plea",
        hint: "A formal statement by or on behalf of a defendant or prisoner, stating guilt or innocence in response to a charge."
    },
    {
        word: "hearing",
        hint: "A session in which testimony and arguments are presented, especially before an official."
    },
    {
        word: "trial",
        hint: "A formal examination of evidence in a court."
    },
    {
        word: "felony",
        hint: "A serious crime, typically one involving violence."
    },
    {
        word: "misdemeanor",
        hint: "A minor wrongdoing."
    },
    {
        word: "infraction",
        hint: "A violation or infringement of a law or agreement."
    },
    {
        word: "statute",
        hint: "A written law passed by a legislative body."
    },
    {
        word: "ordinance",
        hint: "A piece of legislation enacted by a municipal authority."
    },
    {
        word: "regulation",
        hint: "A rule or directive made and maintained by an authority."
    },
    {
        word: "code",
        hint: "A systematic collection of laws or regulations."
    }]

const HangmanGame = () => {
  const maxGuesses = 6;
  const [currentWord, setCurrentWord] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isVictory, setIsVictory] = useState<boolean>(false);

  useEffect(() => {
    getRandomWord();
  }, []);
  
  const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(word);
    setHint(hint);
    setCorrectLetters([]);
    setWrongGuesses([]);
    setWrongGuessCount(0);
    setIsGameOver(false);
    setIsVictory(false);
  };

  const initGame = (letter: string) => {
    if (currentWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        const updatedCorrectLetters = [...correctLetters, letter];
        setCorrectLetters(updatedCorrectLetters);

        const uniqueLetters = [...new Set(currentWord.split(''))];
        if (updatedCorrectLetters.length === uniqueLetters.length) {
          setIsVictory(true);
          setIsGameOver(true);
        }
      }
    } else {
      if (!wrongGuesses.includes(letter)) {
        const updatedWrongGuesses = [...wrongGuesses, letter];
        setWrongGuesses(updatedWrongGuesses);
        const updatedWrongGuessCount = wrongGuessCount + 1;
        setWrongGuessCount(updatedWrongGuessCount);

        if (updatedWrongGuessCount === maxGuesses) {
          setIsGameOver(true);
          setIsVictory(false);
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <label className="block text-2xl font-semibold text-gray-900 mb-6">
              Consitution Law Hangman Game
            </label>
      {isGameOver && (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-400 ease-in-out ${isGameOver ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="p-6 max-w-md w-full rounded-lg bg-white text-center shadow-lg">
          <img src={isVictory ? vic : lost} alt="game-status" className="w-32 mx-auto mb-4" />
            <h4 className="text-xl">{isVictory ? 'Congrats!' : 'Game Over!'}</h4>
            <p className="text-lg font-medium my-4"><b className="text-primary">{isVictory ? 'You found the word:' : 'The correct word was:'} <p className='text-[#d42755] uppercase'>{currentWord}</p></b></p>
            <button className="bg-[#d42755] text-white font-semibold text-lg rounded-md py-2 px-4" onClick={getRandomWord}>Play Again</button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-4">
        <img src={[hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6][wrongGuessCount]} alt="hangman" className="w-64 select-none" />
        <h1 className="text-2xl text-center mt-4 uppercase">Hangman Game</h1>
      </div>

      <div className="flex flex-col items-center mb-4">
      <ul className="flex flex-wrap gap-2 justify-center">
   {currentWord.split('').map((letter, index) => (
      <li key={index} className={`w-8 text-3xl text-center font-semibold mb-2 border-b-4 border-black ${correctLetters.includes(letter) ? '' : 'text-transparent'}`}>
         {letter}
      </li>
   ))}
</ul>
        <h4 className="text-lg font-medium text-center mb-4">Hint: <b>{hint}</b></h4>
        <h4 className="text-lg font-medium text-center mb-4">Incorrect guesses: <b className="text-error">{wrongGuessCount} / {maxGuesses}</b></h4>

        <div className="flex flex-wrap gap-2 mt-4 justify-center overflow-x-auto">
          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map((letter) => (
            <button
            key={letter}
            className={`text-lg font-bold uppercase px-4 py-2 rounded ${correctLetters.includes(letter) || wrongGuesses.includes(letter)
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#d42755] text-white hover:bg-[#b51d48]'
              }`}
            onClick={() => !isGameOver && initGame(letter)}
            disabled={correctLetters.includes(letter) || wrongGuesses.includes(letter) || isGameOver}
          >
            {letter}
          </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HangmanGame;

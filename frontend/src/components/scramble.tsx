import React, { useState, useEffect, useRef, useCallback } from 'react';
const words = [
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
    
const WordScramble: React.FC = () => {
  const [scrambledWord, setScrambledWord] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [correctWord, setCorrectWord] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [message, setMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const initTimer = useCallback((maxTime: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(maxTime);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timerRef.current as NodeJS.Timeout);
          setMessage(`Time off! ${correctWord.toUpperCase()} was the correct word`);
          return 0;
        }
      });
    }, 1000);
  }, [correctWord]);

  const initGame = useCallback(() => {
    const randomObj = words[Math.floor(Math.random() * words.length)];
    const wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    setScrambledWord(wordArray.join(""));
    setHint(randomObj.hint);
    setCorrectWord(randomObj.word.toLowerCase());

    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.setAttribute("maxlength", randomObj.word.length.toString());
    }

    setMessage(""); 
    initTimer(30);
  }, [initTimer]);

  useEffect(() => {
    initGame();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [initGame]);

  const checkWord = () => {
    const userWord = inputRef.current?.value.toLowerCase();
    if (!userWord) {
      setMessage("Please enter the word to check!");
      return;
    }
    if (userWord !== correctWord) {
      setMessage(`Oops! ${userWord} is not the correct word`);
      return;
    }
    setMessage(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    setTimeout(() => {
      initGame();
    }, 2000); // Delay for 2 seconds
  };

  // Handle Enter key press to submit the word
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      checkWord(); // Call checkWord function
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center border-b pb-4 text-[#d42755]">Word Scramble</h2>
        <div className="my-6">
          <p className="text-center text-3xl font-medium tracking-widest uppercase mb-4">{scrambledWord}</p>
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">Hint: <span className="font-semibold text-[#d42755]">{hint}</span></p>
            <p className="text-lg text-gray-700">Time Left: <span className="font-semibold text-[#d42755]">{timeLeft}s</span></p>
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a valid word"
            className="w-full h-12 px-4 mb-6 text-lg border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            onKeyPress={handleKeyPress} // Add key press handler here
          />
          <div className="flex justify-between">
            <button
              onClick={initGame}
              className="w-1/2 bg-gray-600 hover:bg-[#d42755] text-white py-3 rounded mr-2 transition-all duration-300"
            >
              Refresh Word
            </button>
            <button
              onClick={checkWord}
              className="w-1/2 bg-[#d42755] hover:bg-gray-600 text-white py-3 rounded ml-2 transition-all duration-300"
            >
              Check Word
            </button>
          </div>
        </div>
        {message && (
          <p className="mt-4 text-center text-lg text-[#d42755] font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default WordScramble;

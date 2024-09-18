import { useState } from "react";
import judge from "../assets/rps/judge.png";
import gavel from "../assets/rps/gavel.png";
import consti from "../assets/rps/constitution.png";

const RockPaperScissors = () => {
  const [userResult, setUserResult] = useState("images/judge.png");
  const [cpuResult, setCpuResult] = useState("images/judge.png");
  const [result, setResult] = useState("Let's Play!!");
  const [defi, setDefi] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);

  const optionImages = [
    { src: `${judge}`, label: "Judge", value: "J" },
    { src: `${consti}`, label: "Constitution", value: "C" },
    { src: `${gavel}`, label: "Gavel", value: "G" },
  ];

  const handleOptionClick = (index: number) => {
    setIsGameStarted(true);
    setUserResult("images/judge.png");
    setCpuResult("images/judge.png");
    setResult("Wait...");
    setDefi("");

    setTimeout(() => {
      setIsGameStarted(false);

      const selectedOption = optionImages[index];
      setUserResult(selectedOption.src);

      const randomNumber = Math.floor(Math.random() * 3);
      const cpuChoice = optionImages[randomNumber];
      setCpuResult(cpuChoice.src);

      const userValue = selectedOption.value;
      const cpuValue = cpuChoice.value;

      const outcomes: Record<string, string> = {
        JJ: "Draw",
        JC: "Cpu",
        JG: "User",
        CC: "Draw",
        CJ: "User",
        CG: "Cpu",
        GG: "Draw",
        GJ: "Cpu",
        GC: "User",
      };

      const outcomeKey = userValue + cpuValue;
      let outComeValue = "";
      if (outcomeKey in outcomes) {
        outComeValue = outcomes[outcomeKey];
      }

      let ans = userValue === cpuValue ? "Match Draw<br>" : `${outComeValue} Won!!<br>`;

      let ans1 = "";
      switch (outcomeKey) {
        case "JJ":
          ans += "Two Judges in agreement, the decision stands firm!";
          ans1 = "<br><br>Judge: A public official appointed to decide cases in a court of law";
          break;
        case "JC":
        case "CJ":
          ans += "The Constitution is the supreme law that even the Judge must follow!";
          ans1 = "<br><br>Constitution: A set of fundamental principles or established precedents according to which a state or other organization is governed";
          break;
        case "JG":
        case "GJ":
          ans += "The Judge overrules the Gavel with authority!";
          ans1 = "<br><br>Gavel: A small hammer used by a judge or an auctioneer to call for attention or to signal a decision";
          break;
        case "CC":
          ans += "The Constitution remains unchallenged, a stalemate";
          ans1 = "<br><br>Constitution: A set of fundamental principles or established precedents according to which a state or other organization is governed";
          break;
        case "CG":
        case "GC":
          ans += "The Gavel enforces the laws written in the Constitution!";
          ans1 = "<br><br>Gavel: A small hammer used by a judge or an auctioneer to call for attention or to signal a decision";
          break;
        case "GG":
          ans += "Two Gavels clash, the enforcement is balanced!";
          ans1 = "<br><br>Gavel: A small hammer used by a judge or an auctioneer to call for attention or to signal a decision";
          break;
        default:
          break;
      }

      setResult(ans);
      setDefi(ans1);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <section className="p-8 bg-white shadow-md rounded-lg">
        <div className="flex justify-around mb-6">
          <span className="user_result">
            <img src={userResult} alt="" className="w-24 rotate-90" />
          </span>
          <span className="cpu_result">
            <img src={cpuResult} alt="" className="w-24 -rotate-90" />
          </span>
        </div>
        <div
          className="text-2xl font-bold text-purple-600 text-center"
          dangerouslySetInnerHTML={{ __html: result }}
        ></div>
        <div
          className="mt-4 text-red-700 font-semibold text-center"
          dangerouslySetInnerHTML={{ __html: defi }}
        ></div>
      </section>

      <div className="flex justify-around mt-8 w-full">
        {optionImages.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition-opacity ${
              isGameStarted ? "opacity-50 pointer-events-none" : "hover:opacity-100"
            }`}
            onClick={() => handleOptionClick(index)}
          >
            <img src={option.src} alt={option.label} className="w-16" />
            <p className="text-purple-600 text-lg mt-2">{option.label}</p>
          </div>
        ))}
      </div>

      <main className="mt-6">
        <button
          id="playAgainButton"
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800"
        >
          Play Again
        </button>
      </main>
    </div>
  );
};

export default RockPaperScissors;

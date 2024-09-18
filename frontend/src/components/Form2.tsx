import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Answers {
  [key: string]: string;
}

interface Option {
  value: string;
  index: number;
  answer: string;
}

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (step === 2 && answers.question1) {
      fetchCase3Options(answers.question1);
    }
  }, [step, answers]);

  const fetchCase3Options = async (article: string) => {
    if (!article) {
      console.error('Article is undefined. Cannot fetch options.');
      return;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND}/api/options/data43/${article}`);
      setOptions(response.data.options || []);  // Adjust this line if your API returns a different structure
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const className1 = "px-4 py-2 border border-black text-[#d42755] font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300";
  const className2 = "px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300";

  // const getClassName = (index: number) => {
  //   const pattern = [className2, className1, className1, className2, className2, className1];
  //   return pattern[(index - 1) % pattern.length];
  // };

  const handleAnswer = (question: string, answer: string) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label className="block text-2xl font-semibold text-gray-900 mb-6">
              Directive Principles of State Policy:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-60 overflow-y-auto">
              <button
                onClick={() => handleAnswer('question1', '38')}
                className={className2}
              >
                Promotion of the welfare of the people (Article 38)
              </button>
              <button
                onClick={() => handleAnswer('question1', '39A')}
                className={className1}
              >
                Equal justice and free legal aid (Article 39A)
              </button>
              <button
                onClick={() => handleAnswer('question1', '40')}
                className={className1}
              >
                Organization of village panchayats (Article 40)
              </button>
              <button
                onClick={() => handleAnswer('question1', '41')}
                className={className2}
              >
                Right to work, to education, and to public assistance in certain cases (Article 41)
              </button>
              <button
                onClick={() => handleAnswer('question1', '42')}
                className={className1}
              >
                Provision for just and humane conditions of work and maternity relief (Article 42)
              </button>
              <button
                onClick={() => handleAnswer('question1', '43')}
                className={className1}
              >
                Living wage, etc., for workers (Article 43)
              </button>
              <button
                onClick={() => handleAnswer('question1', '43A')}
                className={className2}
              >
                Participation of workers in management of industries (Article 43A)
              </button>
              <button
                onClick={() => handleAnswer('question1', '44')}
                className={className1}
              >
                Uniform civil code for the citizens (Article 44)
              </button>
              <button
                onClick={() => handleAnswer('question1', '45')}
                className={className1}
              >
                Provision for free and compulsory education for children (Article 45)
              </button>
              <button
                onClick={() => handleAnswer('question1', '46')}
                className={className2}
              >
                Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes, and other weaker sections (Article 46)
              </button>
              <button
                onClick={() => handleAnswer('question1', '47')}
                className={className1}
              >
                Duty of the State to raise the level of nutrition and the standard of living and to improve public health (Article 47)
              </button>
              <button
                onClick={() => handleAnswer('question1', '48')}
                className={className1}
              >
                Organization of agriculture and animal husbandry (Article 48)
              </button>
              <button
                onClick={() => handleAnswer('question1', '48A')}
                className={className2}
              >
                Protection and improvement of environment and safeguarding of forests and wildlife (Article 48A)
              </button>
              <button
                onClick={() => handleAnswer('question1', '49')}
                className={className1}
              >
                Protection of monuments and places and objects of national importance (Article 49)
              </button>
              <button
                onClick={() => handleAnswer('question1', '50')}
                className={className1}
              >
                Separation of judiciary from executive (Article 50)
              </button>
              <button
                onClick={() => handleAnswer('question1', '51')}
                className={className2}
              >
                Promotion of international peace and security (Article 51)
              </button>
            </div>          
          </>
        );
      // case 2:
      //   return (
      //     <>
      //       <label className="block text-2xl font-semibold text-gray-900 mb-6">
      //         What do you want to know about {answers.question1 === 'equality' ? 'Right to Equality' : 
      //         answers.question1 === 'freedom' ? 'Right to Freedom' : 
      //         answers.question1 === 'exploitation' ? 'Right against Exploitation' : 
      //         answers.question1 === 'religion' ? 'Right to Freedom of Religion' : 
      //         answers.question1 === 'culture' ? 'Cultural and Educational Rights' : 
      //         'Right to Constitutional Remedies'}?
      //       </label>
      //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      //         {options.map((option) => (
      //           <button
      //             key={option.index}
      //             onClick={() => handleAnswer('question2', option.answer)}
      //             className={getClassName(option.index)}
      //           >
      //             {option.value}
      //           </button>
      //         ))}
      //       </div>
      //     </>
      //   );
        case 2:
          return (
            <>
              <label className="block text-2xl font-semibold text-gray-900 mb-6">
                Here's what you need to know about Article {answers.question1}:
              </label>
              <ul className="list-disc pl-6">
                {options.length > 0 ? (
                  options.map((option) => (
                    <li key={option.index} className="text-lg text-gray-800 mb-2">
                      {option.value}
                    </li>
                  ))
                ) : (
                  <p>No information available.</p>
                )}
              </ul>
            </>
          );
        default:
          return null;
      }
    };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-md rounded-lg p-8">
        {renderQuestion()}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {step < 3 && answers[`question${step}`] && (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;

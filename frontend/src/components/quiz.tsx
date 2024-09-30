import React, { useState } from 'react';

type Question = {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
};

const quizData: Question[] = [
    {
        question: "Which constitutional article can help a rape victim ensure justice?",
        options: ["Article 14 - Right to Equality", "Article 21 - Right to Life and Personal Liberty", "Article 19 - Freedom of Speech", "Article 32 - Right to Constitutional Remedies"],
        correct: 2,
        explanation: "Article 21 provides the Right to Life and Personal Liberty, ensuring that a rape victim can seek justice and protection under the law."
    },
    {
        question: "Which article ensures gender equality in India, prohibiting discrimination based on sex?",
        options: ["Article 21", "Article 14", "Article 19", "Article 23"],
        correct: 2,
        explanation: "Article 14 ensures that the state shall not deny equality before the law or equal protection under the law, promoting gender equality."
    },
    {
        question: "Which article prohibits human trafficking and forced labor?",
        options: ["Article 14", "Article 17", "Article 23", "Article 32"],
        correct: 3,
        explanation: "Article 23 prohibits human trafficking, forced labor, and similar forms of exploitation."
    },
    {
        question: "Which article provides the right to free legal aid for underprivileged people?",
        options: ["Article 14", "Article 22", "Article 39A", "Article 32"],
        correct: 3,
        explanation: "Article 39A ensures that free legal aid is provided to those who cannot afford it, ensuring justice for all."
    },
    {
        question: "Which article abolishes 'untouchability' and protects the dignity of every citizen?",
        options: ["Article 14", "Article 15", "Article 17", "Article 23"],
        correct: 3,
        explanation: "Article 17 abolishes untouchability and forbids its practice in any form."
    },
    {
        question: "Which article provides for the protection of the interests of minorities?",
        options: ["Article 21", "Article 25", "Article 29", "Article 32"],
        correct: 3,
        explanation: "Article 29 protects the cultural, educational, and religious rights of minorities."
    },
    {
        question: "Which article provides special provisions for the protection of children against exploitation?",
        options: ["Article 23", "Article 21", "Article 45", "Article 39"],
        correct: 4,
        explanation: "Article 39 emphasizes the protection of children from abuse and exploitation."
    },
    {
        question: "Which article provides the right to education for children up to the age of 14?",
        options: ["Article 21A", "Article 19", "Article 32", "Article 14"],
        correct: 1,
        explanation: "Article 21A guarantees free and compulsory education for children aged 6 to 14."
    },
    {
        question: "Which article guarantees freedom of religion and the right to profess, practice, and propagate religion?",
        options: ["Article 25", "Article 19", "Article 29", "Article 15"],
        correct: 1,
        explanation: "Article 25 grants freedom of religion, allowing individuals to profess and practice their faith freely."
    },
    {
        question: "Which article provides protection against arrest and detention in certain cases?",
        options: ["Article 20", "Article 22", "Article 19", "Article 14"],
        correct: 2,
        explanation: "Article 22 protects individuals from arbitrary arrest and detention."
    },
    {
        question: "Which article ensures the right to free speech and expression?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        correct: 2,
        explanation: "Article 19 guarantees the freedom of speech and expression to every citizen."
    },
    {
        question: "Which article allows the Supreme Court to issue writs to enforce fundamental rights?",
        options: ["Article 14", "Article 19", "Article 32", "Article 226"],
        correct: 3,
        explanation: "Article 32 allows the Supreme Court to issue writs to enforce fundamental rights."
    },
    {
        question: "Which article allows for the implementation of affirmative action to uplift historically marginalized groups?",
        options: ["Article 15", "Article 19", "Article 21", "Article 46"],
        correct: 1,
        explanation: "Article 15 allows for special provisions for socially and educationally backward groups."
    },
    {
        question: "Which article ensures equality of opportunity in matters of public employment?",
        options: ["Article 14", "Article 16", "Article 21", "Article 23"],
        correct: 2,
        explanation: "Article 16 guarantees equality of opportunity in public employment for all citizens."
    },
    {
        question: "Which article protects women from being discriminated against in public employment?",
        options: ["Article 14", "Article 15", "Article 16", "Article 17"],
        correct: 3,
        explanation: "Article 16 ensures non-discrimination in matters of public employment, including on the basis of gender."
    },
    {
        question: "Which article protects victims of domestic violence?",
        options: ["Article 14", "Article 21", "Article 19", "Article 32"],
        correct: 2,
        explanation: "Article 21, through the right to life and personal liberty, protects women against domestic violence."
    },
    {
        question: "Which article deals with the protection of religious minorities?",
        options: ["Article 15", "Article 30", "Article 19", "Article 32"],
        correct: 2,
        explanation: "Article 30 ensures the right of religious and linguistic minorities to establish and administer educational institutions."
    },
    {
        question: "Which article mandates equal pay for equal work for both men and women?",
        options: ["Article 21", "Article 23", "Article 39(d)", "Article 14"],
        correct: 3,
        explanation: "Article 39(d) ensures equal pay for equal work for both men and women."
    },
    {
        question: "Which article grants the right to personal liberty, protecting individuals from unlawful detention?",
        options: ["Article 19", "Article 21", "Article 32", "Article 22"],
        correct: 2,
        explanation: "Article 21 ensures that no person shall be deprived of their life or personal liberty except according to procedure established by law."
    },
    {
        question: "Which article prohibits discrimination on the grounds of religion, race, caste, sex, or place of birth?",
        options: ["Article 14", "Article 15", "Article 16", "Article 17"],
        correct: 2,
        explanation: "Article 15 prohibits discrimination on the grounds of religion, race, caste, sex, or place of birth."
    },
    {
        question: "Which article provides constitutional remedies through the judiciary in case of violation of fundamental rights?",
        options: ["Article 32", "Article 21", "Article 14", "Article 226"],
        correct: 1,
        explanation: "Article 32 gives citizens the right to move the Supreme Court to enforce their fundamental rights."
    },
    {
        question: "Which article ensures that children are protected from hazardous employment and exploitation?",
        options: ["Article 21A", "Article 24", "Article 25", "Article 39"],
        correct: 2,
        explanation: "Article 24 prohibits the employment of children below the age of 14 in hazardous industries."
    },
    {
        question: "Which article deals with the reservation of seats for Scheduled Castes and Scheduled Tribes in the legislature?",
        options: ["Article 330", "Article 340", "Article 368", "Article 370"],
        correct: 1,
        explanation: "Article 330 provides for the reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha."
    },
    {
        question: "Which article protects women's reproductive rights under the right to life and personal liberty?",
        options: ["Article 21", "Article 14", "Article 19", "Article 15"],
        correct: 1,
        explanation: "Article 21, through the right to life and personal liberty, protects women's reproductive rights."
    },
    {
        question: "Which article allows special provisions for the advancement of any socially and educationally backward classes?",
        options: ["Article 14", "Article 15(4)", "Article 16", "Article 19"],
        correct: 2,
        explanation: "Article 15(4) allows the state to make special provisions for the advancement of socially and educationally backward classes."
    },
    {
        question: "Which article ensures the protection of the environment as a directive principle of state policy?",
        options: ["Article 21", "Article 48A", "Article 19", "Article 32"],
        correct: 2,
        explanation: "Article 48A directs the state to protect and improve the environment."
    },
    {
        question: "Which article deals with the protection of tribal interests and ensures that their rights are preserved?",
        options: ["Article 46", "Article 244", "Article 21", "Article 23"],
        correct: 2,
        explanation: "Article 244 deals with the administration of scheduled areas and the protection of tribal interests."
    },
    {
        question: "Which article guarantees the right to constitutional remedies?",
        options: ["Article 32", "Article 226", "Article 19", "Article 21"],
        correct: 1,
        explanation: "Article 32 provides the right to move the Supreme Court for enforcement of fundamental rights."
    },
    {
        question: "Which article ensures freedom of speech and the right to assemble peacefully without arms?",
        options: ["Article 19", "Article 21", "Article 14", "Article 32"],
        correct: 1,
        explanation: "Article 19 provides the freedom of speech and the right to assemble peacefully."
    },
    {
        question: "Which article prohibits discrimination in employment and ensures equality of opportunity?",
        options: ["Article 14", "Article 16", "Article 19", "Article 21"],
        correct: 2,
        explanation: "Article 16 ensures equality of opportunity in matters of public employment."
    },
    {
        question: "Which constitutional article provides the right to approach the Supreme Court for enforcement of fundamental rights?",
        options: ["Article 12", "Article 32", "Article 21", "Article 226"],
        correct: 2,
        explanation: "Article 32 guarantees the right to approach the Supreme Court for the enforcement of fundamental rights, often called the 'heart and soul' of the Constitution."
    },
    {
        question: "Which article allows for special provisions for women and children in employment?",
        options: ["Article 19", "Article 15(3)", "Article 21", "Article 14"],
        correct: 2,
        explanation: "Article 15(3) allows the state to make special provisions for women and children to promote their welfare."
    },
    {
        question: "Which article focuses on the prohibition of child labor in factories or hazardous employment?",
        options: ["Article 21A", "Article 24", "Article 19", "Article 32"],
        correct: 2,
        explanation: "Article 24 explicitly prohibits the employment of children below the age of 14 in factories, mines, and other hazardous environments."
    },
    {
        question: "Which article provides for the reservation of seats for women in Panchayats?",
        options: ["Article 40", "Article 243D", "Article 15", "Article 326"],
        correct: 2,
        explanation: "Article 243D provides for the reservation of seats for women in Panchayats to ensure their participation in local governance."
    },
    {
        question: "Which article ensures the protection of the environment and wildlife?",
        options: ["Article 21", "Article 48A", "Article 32", "Article 51A(g)"],
        correct: 4,
        explanation: "Article 51A(g) mentions it as a fundamental duty to protect and improve the environment and safeguard forests and wildlife."
    },
    {
        question: "Which article guarantees the right against exploitation, including the prohibition of forced labor?",
        options: ["Article 21", "Article 23", "Article 25", "Article 19"],
        correct: 2,
        explanation: "Article 23 prohibits human trafficking and forced labor, ensuring freedom from exploitation."
    },
    {
        question: "Which article protects individual freedom of conscience and the right to freely profess, practice, and propagate religion?",
        options: ["Article 14", "Article 19", "Article 25", "Article 32"],
        correct: 3,
        explanation: "Article 25 guarantees freedom of conscience and the right to freely profess, practice, and propagate religion."
    },
    {
        question: "Which article safeguards the rights of linguistic and religious minorities in establishing educational institutions?",
        options: ["Article 21", "Article 30", "Article 29", "Article 19"],
        correct: 2,
        explanation: "Article 30 ensures the right of minorities to establish and administer their own educational institutions."
    },
    {
        question: "Which article of the Indian Constitution prohibits discrimination on grounds of race, caste, sex, and place of birth?",
        options: ["Article 15", "Article 14", "Article 17", "Article 21"],
        correct: 1,
        explanation: "Article 15 prohibits discrimination on the basis of race, caste, sex, place of birth, or religion."
    },
    {
        question: "Which article ensures that every citizen has the right to assemble peacefully without arms?",
        options: ["Article 19(1)(b)", "Article 21", "Article 32", "Article 14"],
        correct: 1,
        explanation: "Article 19(1)(b) guarantees the right to peacefully assemble without arms as part of the freedom of expression."
    },
    {
        question: "Which article abolishes titles except for military or academic distinctions?",
        options: ["Article 14", "Article 18", "Article 19", "Article 21"],
        correct: 2,
        explanation: "Article 18 abolishes titles to ensure equality and prevent social or legal privilege based on honorific titles."
    },
    {
        question: "Which article of the Constitution deals with the protection of life and personal liberty?",
        options: ["Article 21", "Article 19", "Article 25", "Article 14"],
        correct: 1,
        explanation: "Article 21 protects the right to life and personal liberty, stating that no one shall be deprived of it except according to procedures established by law."
    },
    {
        question: "Which article of the Constitution provides for the right to property?",
        options: ["Article 19", "Article 31", "Article 300A", "Article 21"],
        correct: 3,
        explanation: "Article 300A provides for the right to property, though it is no longer a fundamental right after the 44th Amendment."
    },
    {
        question: "Which article ensures that no person is held in slavery or servitude?",
        options: ["Article 14", "Article 19", "Article 23", "Article 32"],
        correct: 3,
        explanation: "Article 23 ensures the right against exploitation, prohibiting slavery, servitude, and bonded labor."
    },
    {
        question: "Which article guarantees freedom to manage religious affairs?",
        options: ["Article 21", "Article 26", "Article 32", "Article 19"],
        correct: 2,
        explanation: "Article 26 guarantees the freedom to manage religious affairs, including the establishment of religious institutions and charities."
    }
    // Each question follows the same structure: question, options, correct index, and explanation
];

const QuizComponent: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionClick = (index: number) => {
        setSelectedOption(index);
        setShowExplanation(true);
        if (index === quizData[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setShowExplanation(false);
        setCurrentQuestion((prev) => prev + 1);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg border border-gray-200">
            <h1 className="text-3xl font-bold text-[#d42755] mb-6 text-center">Quiz Yourself</h1>

            {currentQuestion < quizData.length ? (
                <div>
                    <h2 className="text-xl mb-4 font-semibold">{quizData[currentQuestion].question}</h2>
                    <div className="grid gap-4">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <button 
                                key={index}
                                onClick={() => handleOptionClick(index)}
                                className={`p-4 border rounded-lg w-full text-left transition duration-200 ${
                                    selectedOption === index
                                        ? index === quizData[currentQuestion].correct
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-black hover:bg-gray-200'
                                }`}
                                disabled={showExplanation}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {showExplanation && (
                        <div className="mt-4 p-4 border-t border-gray-300 bg-gray-50">
                            <p className="text-sm text-slate-600">{quizData[currentQuestion].explanation}</p>
                            <button
                                onClick={handleNextQuestion}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Next Question
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">Quiz Completed</h2>
                    <p className="text-lg">Your Score: {score} / {quizData.length}</p>
                    <button
                        onClick={() => setCurrentQuestion(0)}
                        className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        Retry Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Vue", "C++"],
    correctAnswer: 3
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    correctAnswer: 0
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: 1
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return; // disable after selection
    setSelectedOption(index);
    setShowFeedback(true);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

   // ✅ RESTART QUIZ FUNCTION
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setShowFeedback(false);
  };

  const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {showResult ? (
        <div className="result">
          <h2>Quiz Completed 🎉</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
            <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => {
            let className = "option";

            if (showFeedback) {
              if (index === questions[currentQuestion].correctAnswer) {
                className += " correct";
              } else if (index === selectedOption) {
                className += " incorrect";
              }
            } else if (index === selectedOption) {
              className += " selected";
            }

            return (
              <div
                key={index}
                className={className}
                onClick={() => handleOptionSelect(index)}
              >
                <input
                  type="radio"
                  checked={selectedOption === index}
                  disabled={selectedOption !== null}
                  readOnly
                />
                <label>{option}</label>
              </div>
            );
          })}

          {showFeedback && (
            <p className="feedback">
              {selectedOption ===
              questions[currentQuestion].correctAnswer
                ? "✅ Correct Answer!"
                : "❌ Wrong Answer"}
            </p>
          )}

          <button onClick={handleNext} disabled={!showFeedback}>
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default App;

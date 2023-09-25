import { useEffect, useState } from "react";
import { getQuestions } from "../data/questions";

export default function App() {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);
  const handleAnswerButtonClick = (answer) => {
    return () => {
      if (currentQuestion < questions.length - 1) {
        if (answer.correct === true) {
          setCount(count + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        console.log(`you have ${count + 1} points`);
      } else {
        alert(`You got ${count + 1} out of ${questions.length} right!`);
      }
    };
  };

  if (questions.length !== 0) {
    return (
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h1 className="mb-2 text-2xl text-yellow-700">
            {currentQuestion}) {questions[currentQuestion].question}
          </h1>
        </div>
        <div className="px-6 pt-4 pb-2">
          <ul>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={handleAnswerButtonClick(
                  questions[currentQuestion].answers[0]
                )}
              >
                a) {questions[currentQuestion].answers[0].answer}
              </p>
            </li>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={handleAnswerButtonClick(
                  questions[currentQuestion].answers[1]
                )}
              >
                b) {questions[currentQuestion].answers[1].answer}
              </p>
            </li>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={handleAnswerButtonClick(
                  questions[currentQuestion].answers[2]
                )}
              >
                c) {questions[currentQuestion].answers[2].answer}
              </p>
            </li>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={handleAnswerButtonClick(
                  questions[currentQuestion].answers[3]
                )}
              >
                d) {questions[currentQuestion].answers[3].answer}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
}

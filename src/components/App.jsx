import { useEffect, useState } from "react";
import { getQuestions } from "../data/questions";
import { Question } from "./Question";

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
      <Question
        question={questions[currentQuestion]}
        handleAnswerButtonClick={handleAnswerButtonClick}
        currentQuestionIndex={currentQuestion + 1}
      />
    );
  }
  return <div>Loading...</div>;
}

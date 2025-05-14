import React, { useEffect, useState } from "react";

const MyQuiz = () => {
  const [info, setInfo] = useState({
    questions: [],
    error: "",
    loading: true,
    answer: {},
  });
  useEffect(() => {
    fetch("./questions.json")
      .then((res) => res.json())
      .then((data) => {
        setInfo((prev) => ({ ...prev, questions: data, loading: false }));
      })
      .catch((error) => {
        setInfo((prev) => ({ ...prev, error: error.message }));
      });
  }, []);
  const answerHandler = (questionIndex, selectedAnswer) => {
    setInfo((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        [questionIndex]: selectedAnswer,
      },
    }));
  };

  console.log(info);

  return (
    <div>
      {info.questions.map((item, index) => (
        <div key={index}>
          <h1>{item.question}</h1>
          <ul>
            {item.answers.map((answer, i) => (
              <li key={i} onClick={() => answerHandler(index, answer)}>
                {answer}
              </li>
            ))}
            {info.answer[index] && (
              <p>
                {info.answer[index] === item.correct_answer
                  ? "Correct!"
                  : `Incorrect! Correct answer: ${item.correct_answer}`}
              </p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyQuiz;

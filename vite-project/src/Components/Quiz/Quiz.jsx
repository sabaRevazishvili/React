import React, { useEffect, useState } from "react";
import he from "he";

const Quiz = () => {
  const [info, setInfo] = useState({
    questions: [],
    error: "",
    loading: true,
    answer: "",
  });
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple&token=cd41c1e1addbe6af2d6fda16f84a84d723a4019916b5731e808bb215c04e5353`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInfo((prev) => ({ ...prev, questions: data.results }));
      })
      .catch((error) => {
        setInfo((prev) => ({ ...prev, error: error.message }));
      })
      .finally(() => {
        setInfo((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  console.log(info);
  return (
    <div>
      {info.questions.map((item, index) => (
        <div key={index}>
          <h1>{he.decode(item.question)}</h1>
          <ul>
            <li>{he.decode(item.correct_answer)}</li>

            {item.incorrect_answers.map((answer, index) => (
              <li key={index}>{he.decode(answer)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;

import { Button } from "antd";
import React, { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="my-5 flex flex-col gap-y-3">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let classCss = "";

        if (answerState === "answered" && isSelected) {
          classCss = "w-full bg-blue-500";
        }

        if (answerState === "correct" && isSelected) {
          classCss = "w-full bg-green-400";
        }

        if (answerState === "wrong" && isSelected) {
          classCss = "w-full bg-red-400";
        }

        return (
          <Button onClick={() => onSelect(answer)} className={classCss}>
            <li key={answer}>{answer}</li>
          </Button>
        );
      })}
    </ul>
  );
}

export default Answers;

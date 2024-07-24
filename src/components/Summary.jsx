import { Card } from "antd";
import React from "react";
import QUESTIONS from "../questions";

import complteImg from "../assets/quiz-complete.png";

function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((d) => d === null);
  const correctAnswers = userAnswers.filter(
    (d, i) => d === QUESTIONS[i].answers[0]
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <Card className="font-roboto">
      <div className="flex justify-center">
        <img src={complteImg} alt="" className="w-[50%]" />
      </div>
      <h1 className="font-bold text-3xl text-center my-5">Quiz Completed</h1>
      <div className="flex gap-x-5 justify-center">
        <Card>
          <p className="text-center">{skippedAnswerShare}%</p>
          <p className="font-semibold">Skipped</p>
        </Card>
        <Card>
          <p className="text-center">{correctAnswerShare}%</p>
          <p className="font-semibold">Answer Correctly</p>
        </Card>
        <Card>
          <p className="text-center">{wrongAnswerShare}%</p>
          <p className="font-semibold">Answer Incorrectly</p>
        </Card>
      </div>
      <div className="mt-5">
        <p className="text-2xl">Questions</p>
        {userAnswers.map((answer, index) => {
          let cssClass = "";

          if (answer === null) {
            cssClass = "text-yellow-500";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass = "text-green-400";
          } else {
            cssClass = "text-red-500";
          }

          return (
            <div key={index} className="my-3">
              <div className="flex gap-x-3 border-b border-gray-300">
                <h3 className="text-lg font-bold">{index + 1}</h3>
                <p className="text-lg font-medium">{QUESTIONS[index].text}</p>
              </div>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default Summary;

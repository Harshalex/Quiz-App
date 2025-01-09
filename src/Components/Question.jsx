import React from "react";
import Options from "./Options";

function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div>
      <h3 className="text-2xl text-white font-bold">{question.question}</h3>
      <Options
        options={question.options}
        dispatch={dispatch}
        answer={answer}
        question={question}
      />
    </div>
  );
}

export default Question;

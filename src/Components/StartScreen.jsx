import React from "react";

function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="text-center font-semibold">
      <h2 className="text-white text-3xl font-bold py-3">
        Welcome to the React Quiz
      </h2>
      <h3 className="text-white text-2xl font-bold py-2">
        {numOfQuestions} questions to test your React mastery
      </h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="px-4 py-2 bg-slate-500 text-slate-700 rounded-xl mt-2  "
      >
        Let's started
      </button>
    </div>
  );
}

export default StartScreen;

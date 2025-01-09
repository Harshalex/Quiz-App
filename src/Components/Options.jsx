import React from "react";

function Options({ options, dispatch, answer, question }) {
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col items-start gap-6  py-3">
      {options.map((option, index) => {
        return (
          <button
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`text-white text-start pl-6 w-96 font-bold ${
              answer == index ? "border-white border-4" : ""
            } bg-slate-600 py-4 rounded-3xl hover:bg-slate-800
                ${
                  hasAnswered
                    ? index == question.correctOption
                      ? "bg-blue-700"
                      : "bg-red-700"
                    : ""
                }
                `}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;

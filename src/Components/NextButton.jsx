import React from "react";

function NextButton({ answer, dispatch, index, maxQuestion }) {
  if (answer == null) return;
  if (index < maxQuestion - 1) {
    return (
      <div>
        <button
          className="px-5 py-2 bg-slate-700 rounded-2xl ml-80 mt-4"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }
  if (index == maxQuestion - 1) {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="px-5 py-2 bg-slate-700 rounded-2xl ml-80 mt-4"
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;

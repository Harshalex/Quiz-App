import React from "react";

function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = ((points / totalPoints) * 100).toFixed(2);
  return (
    <div className="text-center">
      <p className=" text-2xl bg-cyan-600 py-3 text-white font-bold rounded-s-3xl">
        You Scored {points} out of {totalPoints} ({percentage}%)
      </p>
      <p className="text-2xl text-center py-3 text-white font-bold">
        HighScore Is {highScore}
      </p>
      <button
        onClick={() => {
          dispatch({ type: "restart" });
        }}
        className="bg-gray-600 text-white px-4 py-2 rounded-2xl font-bold "
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;

import React from "react";

function Progress({ index, numOfQuestions, points, totalPoints, answer }) {
  // Calculate the value and percentage of progress
  let value = index + Number(answer !== null); // Include the answer if it's not null
  const maxValue = numOfQuestions;
  const percentage = (value / maxValue) * 100; // Correctly calculate percentage

  return (
    <div>
      <div className="w-full mt-10 pt-5">
        <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }} // Correct width based on percentage
            aria-label={`Progress: ${percentage.toFixed(2)}%`} // Show correct progress percentage
          ></div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="font-bold text-white py-2">
          {index + 1} / {numOfQuestions}
        </p>
        <p className="font-bold text-white py-2">
          {points} / {totalPoints}
        </p>
      </div>
    </div>
  );
}

export default Progress;

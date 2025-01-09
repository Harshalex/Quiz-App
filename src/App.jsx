import { useEffect, useReducer, useState } from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question";
import NextButton from "./Components/NextButton";
import Progress from "./Components/Progress";
import FinishScreen from "./Components/FinishScreen";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setData":
        return { ...state, questions: action.payload, status: "ready" };
      case "failedData":
        return { ...state, status: "error" };
      case "start":
        return { ...state, status: "active" };
      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload == question.correctOption
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finish":
        return {
          ...state,
          status: "finish",
          highScore:
            state.points > state.highScore ? state.points : state.highScore,
        };
      case "restart":
        return {
          ...state,
          index: 0,
          status: "ready",
          answer: null,
          points: 0,
          //there is one more method -> return {...initialState,questions:state.questions,status:"ready"}
        };
    }
  };

  const initialState = {
    questions: [],
    // loading ,error , ready ,active ,finish
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highScore: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highScore } = state;
  const numOfQuestions = questions.length;
  const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("http://localhost:8000/questions");
        const res = await data.json();

        dispatch({ type: "setData", payload: res });
      } catch (error) {
        dispatch({ type: "failedData" });
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-svh w-full bg-slate-900 px-44">
        <Header />
        <Progress
          index={index}
          numOfQuestions={numOfQuestions}
          points={points}
          totalPoints={totalPoints}
          answer={answer}
        />
        <Main>
          {status == "loading" && <Loader />}
          {status == "error" && <Error />}
          {status == "ready" && (
            <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
          )}
          {status == "active" && (
            <>
              <Question
                question={questions[index]}
                answer={answer}
                dispatch={dispatch}
              />
              <NextButton
                answer={answer}
                dispatch={dispatch}
                index={index}
                maxQuestion={numOfQuestions}
              />
            </>
          )}
          {status == "finish" && (
            <FinishScreen
              points={points}
              totalPoints={totalPoints}
              highScore={highScore}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </>
  );
}

function Loader() {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-slate-400">Loading Data......</p>
    </div>
  );
}

function Error() {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-slate-400">
        ⛔ Error !!! Something went wrong in Fetching Data
      </p>
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useRef, useEffect } from "react";
import BingoBoard from "./components/BingoBoard";
import NumberCaller from "./components/NumberCaller";
import { BINGO_BALL } from "./types/interfaces";
import bingoBallList from "./utils/bingoBallList";
import playBallSoundEffect, { unlockAudioPlayback } from "./utils/playSound";

function App() {
  const [boardNumbers, setBoardNumbers] =
    useState<BINGO_BALL[]>(bingoBallList);
  const numbersOnBoard = useRef<number[]>([]);
  const loopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastNumberCalled =
    numbersOnBoard.current[numbersOnBoard.current.length - 1];
  const recentCalledBalls = numbersOnBoard.current
    .slice(-5)
    .reverse()
    .map((calledNumber) => boardNumbers[calledNumber - 1])
    .filter((ball): ball is BINGO_BALL => Boolean(ball));
  const [gameIsRunning, setGameIsRunning] = useState<boolean>(false);
  const [waitTime, setWaitTime] = useState<number>(5000);

  const clearLoopTimeout = () => {
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  };

  const uniqueRandomNumber = (): number => {
    let randomNumber = Math.floor(Math.random() * 75 + 1);
    while (numbersOnBoard.current.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 75 + 1);
    }
    return randomNumber;
  };

  useEffect(() => {
    clearLoopTimeout();

    if (!gameIsRunning) {
      return;
    }

    const scheduleNextCall = () => {
      loopTimeoutRef.current = setTimeout(() => {
        if (numbersOnBoard.current.length >= bingoBallList.length) {
          setGameIsRunning(false);
          return;
        }

        const randomNumber = uniqueRandomNumber();

        playBallSoundEffect(randomNumber);
        numbersOnBoard.current.push(randomNumber);

        setBoardNumbers((prevBoardNumbers) =>
          prevBoardNumbers.map((number) => {
            if (number.number === randomNumber) {
              return { ...number, isOnBoard: true };
            }
            return number;
          })
        );

        scheduleNextCall();
      }, waitTime);
    };

    scheduleNextCall();

    return () => {
      clearLoopTimeout();
    };
  }, [gameIsRunning, waitTime]);

  const startGame = async () => {
    if (!gameIsRunning) {
      await unlockAudioPlayback();
    }

    setGameIsRunning((prev) => !prev);
  };

  return (
    <div className="App flex h-screen flex-col p-2 sm:flex-row">
      <NumberCaller
        calledNumber={boardNumbers[lastNumberCalled - 1]}
        recentCalledBalls={recentCalledBalls}
        startGame={startGame}
        gameIsRunning={gameIsRunning}
        setGameIsRunning={setGameIsRunning}
        setBoardNumbers={setBoardNumbers}
        numbersOnBoard={numbersOnBoard}
        waitTime={waitTime}
        setWaitTime={setWaitTime}
      />
      <BingoBoard boardNumbers={boardNumbers} />
    </div>
  );
}

export default App;

import { BINGO_BALL } from "../types/interfaces";
import Controls from "./Controls";

interface Props {
  calledNumber: BINGO_BALL | undefined;
  startGame: () => void;
  gameIsRunning: boolean;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardNumbers: React.Dispatch<React.SetStateAction<BINGO_BALL[]>>;
  numbersOnBoard: React.MutableRefObject<number[]>;
  waitTime: number;
  setWaitTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function NumberCaller({
  calledNumber,
  startGame,
  gameIsRunning,
  setGameIsRunning,
  setBoardNumbers,
  numbersOnBoard,
  waitTime,
  setWaitTime
}: Props) {
  const LastNumberCalled = calledNumber ?? {
    letter: "F",
    number: "3",
    isOnBoard: false,
  };

  

  return (
    <div className="flex flex-1 flex-col items-center justify-evenly">
      <div className="flex h-52 w-52 items-center justify-center  rounded-full border-8 border border-red-800 bg-red-800 text-7xl font-extrabold drop-shadow-lg md:h-96 md:w-96 md:text-9xl">
        <div className="ring-offset- h-40 w-40 rounded-full border-4 border border-red-800 bg-white ring-1 ring-white md:h-72 md:w-72 md:border-8 md:ring-4">
          <div>{LastNumberCalled.letter}</div>
          <div>{LastNumberCalled.number}</div>
        </div>
      </div>
      <Controls
        startGame={startGame}
        gameIsRunning={gameIsRunning}
        setGameIsRunning={setGameIsRunning}
        setBoardNumbers={setBoardNumbers}
        numbersOnBoard={numbersOnBoard}
        waitTime={waitTime}
        setWaitTime={setWaitTime}
      />
    </div>
  );
}

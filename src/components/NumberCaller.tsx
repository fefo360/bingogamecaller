import { BINGO_BALL } from "../types/interfaces";
import Controls from "./Controls";

interface Props {
  calledNumber: BINGO_BALL | undefined;
  startGame: () => void;
  gameIsRunning: boolean;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardNumbers: React.Dispatch<React.SetStateAction<BINGO_BALL[]>>;
  numbersOnBoard: React.MutableRefObject<number[]>;
}

export default function NumberCaller({
  calledNumber,
  startGame,
  gameIsRunning,
  setGameIsRunning,
  setBoardNumbers,
  numbersOnBoard,
}: Props) {
  const LastNumberCalled = calledNumber ?? {
    letter: "F",
    number: "3",
    isOnBoard: false,
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-evenly">
      <div className="flex h-52 w-52 items-center justify-center  rounded-full border-8 border border-red-800 bg-red-800 text-7xl font-extrabold drop-shadow-lg lg:h-96 lg:w-96 lg:text-9xl">
        <div className="ring-offset- h-40 w-40 rounded-full border-4 border border-red-800 bg-white ring-1 ring-white lg:h-72 lg:w-72 lg:border-8 lg:ring-4">
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
      />
    </div>
  );
}

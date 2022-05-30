import { BingoNumber } from "../types/interfaces";
import Controls from "./Controls";

interface Props {
  calledNumber: BingoNumber | undefined;
  startGame: () => void;
  gameIsRunning: boolean;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardNumbers: React.Dispatch<React.SetStateAction<BingoNumber[]>>;
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

  //function to reset browser

  return (
    <div className="flex flex-col items-center space-between flex-1 justify-evenly">
      <div className="flex justify-center items-center border-8 border border-red-800 rounded-full w-96 h-96 text-9xl bg-red-800 font-extrabold drop-shadow-lg ">
        <div className="ring-white ring-offset-2 ring-4 border-8 border border-red-800 w-72 h-72 rounded-full bg-white">
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

import { BINGO_BALL } from "../types/interfaces";

interface Props {
  startGame: () => void;
  gameIsRunning: boolean;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardNumbers: React.Dispatch<React.SetStateAction<BINGO_BALL[]>>;
  numbersOnBoard: React.MutableRefObject<number[]>;
}

export default function Controls({
  startGame,
  gameIsRunning,
  setGameIsRunning,
  setBoardNumbers,
  numbersOnBoard,
}: Props) {
  const resetGame = () => {
    setGameIsRunning(false);
    numbersOnBoard.current = [];
    setBoardNumbers((prevValues) =>
      prevValues.map((number) => ({ ...number, isOnBoard: false }))
    );
  };

  return (
    <div>
      <button
        onClick={startGame}
        className={`${
          gameIsRunning ? "bg-orange-400" : "bg-green-500"
        } mr-2 h-10 border p-2 text-sm font-extrabold md:h-16 md:w-28 md:text-2xl`}
      >
        {gameIsRunning ? "PAUSE" : "START"}
      </button>
      <button
        className={`ml-2 h-10 border bg-red-500 p-2 text-sm font-extrabold md:h-16 md:w-28 md:text-2xl`}
        onClick={resetGame}
      >
        RESET
      </button>
      <br />
    </div>
  );
}

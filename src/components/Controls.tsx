import { BINGO_BALL } from "../types/interfaces";

interface Props {
  startGame: () => void;
  gameIsRunning: boolean;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardNumbers: React.Dispatch<React.SetStateAction<BINGO_BALL[]>>;
  numbersOnBoard: React.MutableRefObject<number[]>;
  waitTime:number
  setWaitTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Controls({
  startGame,
  gameIsRunning,
  setGameIsRunning,
  setBoardNumbers,
  numbersOnBoard,
  waitTime,
  setWaitTime
}: Props) {

  const resetGame = () => {
    setGameIsRunning(false);
    numbersOnBoard.current = [];
    setBoardNumbers((prevValues) =>
      prevValues.map((number) => ({ ...number, isOnBoard: false }))
    );
  };

  const handleWaitTime = () => {
    setWaitTime(prev => prev + 1000)
}

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={startGame}
        className={`${
          gameIsRunning
            ? "border-amber-700 bg-gradient-to-b from-amber-400 to-amber-600 text-white shadow-amber-900/30"
            : "border-emerald-700 bg-gradient-to-b from-emerald-400 to-emerald-600 text-white shadow-emerald-900/30"
        } h-10 rounded-xl border px-4 text-sm font-extrabold tracking-wide shadow-lg transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 md:h-16 md:w-28 md:text-2xl`}
      >
        {gameIsRunning ? "PAUSE" : "START"}
      </button>
      <button
        className="h-10 rounded-xl border border-rose-700 bg-gradient-to-b from-rose-400 to-rose-600 px-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-rose-900/30 transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 md:h-16 md:w-28 md:text-2xl"
        onClick={resetGame}
      >
        RESET
      </button>
      <button
        className="h-10 rounded-xl border border-sky-700 bg-gradient-to-b from-sky-400 to-blue-600 px-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 md:h-16 md:w-28 md:text-2xl"
        onClick={handleWaitTime}
      >
        {waitTime.toString().substring(0, waitTime.toString().length - 3)}s
      </button>
    </div>
  );
}

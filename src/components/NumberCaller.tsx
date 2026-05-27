import { BINGO_BALL } from "../types/interfaces";
import Controls from "./Controls";

interface Props {
  calledNumber: BINGO_BALL | undefined;
  recentCalledBalls: BINGO_BALL[];
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
  recentCalledBalls,
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
      <div className="flex min-h-[5rem] w-full max-w-2xl flex-wrap items-center justify-center gap-3 px-2">
        {recentCalledBalls.map((ball, index) => (
          <div
            key={`${ball.letter}-${ball.number}`}
            className={`relative flex h-20 w-20 items-center justify-center rounded-full border-6 text-sm font-extrabold md:h-24 md:w-24 md:border-8 md:text-base ${
              index === 0
                ? "border-red-800 bg-red-800 shadow-[0_0_0_4px_rgba(254,242,242,0.9),0_18px_35px_rgba(127,29,29,0.35)]"
                : "border-blue-800 bg-blue-800 shadow-lg"
            }`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white md:h-16 md:w-16 md:border-4">
              <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-white bg-white leading-none md:h-12 md:w-12">
                <div
                  className={`${
                    index === 0 ? "text-red-800" : "text-blue-800"
                  } text-base font-extrabold md:text-lg`}
                >
                  {ball.letter}
                </div>
                <div className="text-base font-extrabold text-slate-900 md:text-lg">
                  {ball.number}
                </div>
              </div>
            </div>
          </div>
        ))}
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

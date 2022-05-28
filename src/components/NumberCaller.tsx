import { BingoNumber } from "../types/interfaces";

interface Props {
  boardNumbers: BingoNumber[];
  startGame: () => void;
  calledNumber: BingoNumber | undefined;
}

export default function NumberCaller({
  boardNumbers,
  startGame,
  calledNumber,
}: Props) {
  const LastNumberCalled = calledNumber ?? {
    letter: "x",
    number: "0",
    isOnBoard: false,
  };

  return (
    <div className="flex flex-col items-center space-between flex-1 justify-evenly">
      <div
        onClick={startGame}
        className="flex justify-center items-center border-8 border border-red-800 rounded-full w-96 h-96 text-9xl bg-red-800 font-extrabold drop-shadow-lg"
      >
        <div className="ring-white ring-offset-2 ring-4 border-8 border border-red-800 w-72 h-72 rounded-full bg-white">
          <div>{LastNumberCalled.letter}</div>
          <div>{LastNumberCalled.number}</div>
        </div>
      </div>
      <button className="border" onClick={startGame}>Click to Start Calling Balls</button>
    </div>
  );
}

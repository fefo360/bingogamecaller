import { BingoNumber } from "../types/interfaces";

interface Props {
  boardNumbers: BingoNumber[];
  markOnBoard: () => void;
  calledNumber: BingoNumber | undefined;
}

export default function NumberCaller({
  boardNumbers,
  markOnBoard,
  calledNumber,
}: Props) {
  const LastNumberCalled = calledNumber ?? {
    letter: "x",
    number: 0,
    isOnBoard: false,
  };

  return (
    <div className="flex flex-1 justify-center">
      <div
        onClick={() => markOnBoard()}
        className="flex justify-center items-center border-8 border border-red-800 rounded-full w-96 h-96 text-9xl bg-red-800 font-extrabold drop-shadow-lg"
      >
        <div className="ring-white ring-offset-2 ring-4 border-8 border border-red-800 w-72 h-72 rounded-full bg-white">
          {/* <button onClick={()=>markOnBoard()}>Click</button> */}
          <div>{LastNumberCalled.letter}</div>
          <div>{LastNumberCalled.number}</div>
        </div>
      </div>
    </div>
  );
}

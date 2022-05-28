import { BingoNumber } from "../types/interfaces";

export interface Props {
  letter: string;
  columnNumbers: BingoNumber[];
  range: number[]
}

export default function BingoColumn({ letter, columnNumbers, range }: Props) {
  const minNumber = range[0]-1;
  const maxNumber = range[1];

  
  return (
    <div >
      <div id={letter} className="flex border text-5xl justify-center font-extrabold bg-blue-800 text-white">{letter}</div>
      {columnNumbers.slice(minNumber, maxNumber).map((number) => (
        <div
          key={number.number}
          className={`${number.isOnBoard ? "text-white bg-blue-800 " : "text-gray-400 bg-blue-200"} font-extrabold text-5xl border border-white flex-1 w-32 `}
        >
          {number.number}
        </div>
      ))}
    </div>
  );
}

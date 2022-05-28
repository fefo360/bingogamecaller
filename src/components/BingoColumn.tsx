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
    <div className="flex flex-col">
      <div id={letter} className="flex border text-5xl justify-center items-center font-extrabold bg-blue-800 text-white md: text-4xl md:h-8 text-3xl">{letter}</div>
      {columnNumbers.slice(minNumber, maxNumber).map((number) => (
        <div
          key={number.number}
          className={`${number.isOnBoard ? "text-white bg-blue-800 " : "text-gray-400 bg-blue-200"} font-extrabold text-5xl border border-white flex-1 w-32 md:text-2xl w-20 h-6`}
        >
          {number.number}
        </div>
      ))}
    </div>
  );
}

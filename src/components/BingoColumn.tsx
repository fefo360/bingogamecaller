import { BingoNumber } from "../types/interfaces";

export interface Props {
  letter: string;
  columnNumbers: BingoNumber[];
  range: number[];
}

export default function BingoColumn({ letter, columnNumbers, range }: Props) {
  const minNumber = range[0] - 1;
  const maxNumber = range[1];

  return (
    <div className="flex flex-col">
      <div
        id={letter}
        className="flex items-center justify-center border bg-blue-800 text-xl lg:text-5xl font-extrabold text-white xl:h-14 md:w-36"
      >
        {letter}
      </div>
      {columnNumbers.slice(minNumber, maxNumber).map((number) => (
        <div
          key={number.number}
          className={`${
            number.isOnBoard
              ? "bg-blue-800 text-white "
              : "bg-blue-200 text-gray-400"
          } h-6  w-20 flex-1 border border-white font-extrabold lg:text-5xl xl:w-36`}
        >
          {number.number}
        </div>
      ))}
    </div>
  );
}

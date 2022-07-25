import { BINGO_BALL, NUMBER_RANGE } from "../types/interfaces";

export interface Props{
  letter: string;
  columnNumbers: BINGO_BALL[];
  range: NUMBER_RANGE;
}

export default function BingoColumn({
  letter,
  columnNumbers,
  range,
 
}: Props) {
  return (
    <div className="flex flex-col">
      <div
        id={letter}
        className="flex items-center justify-center border bg-blue-800 text-2xl font-extrabold text-white lg:text-5xl xl:h-14 xl:w-32"
      >
        {letter}
      </div>
      {columnNumbers.slice(range.start - 1, range.end).map((number) => (
        <div
          key={number.number}
          className={`${
            number.isOnBoard
              ? "bg-blue-800 text-white "
              : "bg-blue-200 text-gray-400"
          } h-6  w-20 flex-1 border border-white md:text-2xl font-extrabold lg:text-5xl xl:w-32`}
        >
          {number.number}
        </div>
      ))}
    </div>
  );
}

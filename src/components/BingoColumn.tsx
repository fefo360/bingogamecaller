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
        className="flex h-8 items-center justify-center border bg-blue-800 text-center text-xl font-extrabold leading-none text-white md:h-10 md:text-2xl lg:h-12 lg:text-4xl xl:h-14 xl:w-32"
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
          } flex h-7 w-20 flex-1 items-center justify-center border border-white text-center text-base font-extrabold leading-none tabular-nums md:h-10 md:text-2xl lg:h-12 lg:text-4xl xl:h-14 xl:w-32`}
        >
          {number.number}
        </div>
      ))}
    </div>
  );
}

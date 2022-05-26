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
    <div>
      <div id={letter}>{letter}</div>
      {columnNumbers.slice(minNumber, maxNumber).map((number) => (
        <div
          key={number.number}
          className={number.isOnBoard ? "text-red-500" : "text-blue-800"}
        >
          {number.number}
        </div>
      ))}
    </div>
  );
}

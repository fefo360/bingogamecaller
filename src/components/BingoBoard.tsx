import BingoColumn from "./BingoColumn";
import { BINGO_BALL } from "../types/interfaces";

export interface Props {
  boardNumbers: BINGO_BALL[];
}

export default function BingoBoard({ boardNumbers }: Props) {
  return (
    <div className="flex justify-center drop-shadow-lg">
      <BingoColumn letter="B" columnNumbers={boardNumbers} range={{start: 1, end: 15}} />
      <BingoColumn letter="I" columnNumbers={boardNumbers} range={{start: 16, end: 30}} />
      <BingoColumn letter="N" columnNumbers={boardNumbers} range={{start: 31, end: 45}} />
      <BingoColumn letter="G" columnNumbers={boardNumbers} range={{start:46, end:60}} />
      <BingoColumn letter="O" columnNumbers={boardNumbers} range={{start:61, end:75}} />
    </div>
  );
}

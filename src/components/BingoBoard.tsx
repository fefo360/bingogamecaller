import BingoColumn from "./BingoColumn";
import { BINGO_BALL } from "../types/interfaces";

export interface Props {
  boardNumbers: BINGO_BALL[];
}

export default function BingoBoard({ boardNumbers }: Props) {
  return (
    <div className="flex justify-center drop-shadow-lg">
      <BingoColumn letter="B" columnNumbers={boardNumbers} range={[1, 15]} />
      <BingoColumn letter="I" columnNumbers={boardNumbers} range={[16, 30]} />
      <BingoColumn letter="N" columnNumbers={boardNumbers} range={[31, 45]} />
      <BingoColumn letter="G" columnNumbers={boardNumbers} range={[46, 60]} />
      <BingoColumn letter="O" columnNumbers={boardNumbers} range={[61, 75]} />
    </div>
  );
}

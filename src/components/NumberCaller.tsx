import {BingoNumber} from '../types/interfaces'

interface Props{
  boardNumbers: BingoNumber[];
  markOnBoard: () => void;
  calledNumber: BingoNumber | undefined;
}

export default function NumberCaller({boardNumbers, markOnBoard, calledNumber}: Props ) {
  const LastNumberCalled = calledNumber ?? {letter: "X", number: 0, isOnBoard: false};

  return (
    <div>
      <button onClick={()=>markOnBoard()}>Click</button>
      <div>{LastNumberCalled.letter}</div>
      <div>{LastNumberCalled.number}</div>
    </div>
  )
}
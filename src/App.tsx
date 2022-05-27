import "./App.css";
import { useState } from "react";
import BingoBoard from "./components/BingoBoard";
import NumberCaller from "./components/NumberCaller";
import { BingoNumber } from "./types/interfaces";
import bingoNumberList from "./utils/bingoNumbersList";

function App() {
  const [boardNumbers, setBoardNumbers] =
    useState<BingoNumber[]>(bingoNumberList);
  const [numbersOnBoard, setNumbersOnBoard] = useState<number[]>([]);
  const lastNumberCalled = numbersOnBoard[numbersOnBoard.length - 1];

  console.log(`lastNumberCalled: ${lastNumberCalled} and numbersOnBoard: ${numbersOnBoard}`);

  const markOnBoard = (): number | undefined => {

    let randomNumber = Math.floor(Math.random() * 75);

    if (numbersOnBoard.includes(randomNumber)) return;

    const newBoard = boardNumbers.map((number) => {
      if (number.number === randomNumber)
        return { ...number, isOnBoard: !number.isOnBoard };
      console.log(
        `number.number: ${number.number} and random:  ${randomNumber}`
      );
      return number;
    });

    setBoardNumbers(newBoard);
    setNumbersOnBoard([...numbersOnBoard, randomNumber]);
    console.log(JSON.stringify(numbersOnBoard));
  };

  return (
    <div className="App bg-slate- flex justify-between p-5">
      <NumberCaller
        boardNumbers={boardNumbers}
        markOnBoard={markOnBoard}
        calledNumber={boardNumbers[lastNumberCalled-1]}
      />
      <BingoBoard boardNumbers={boardNumbers} />
    </div>
  );
}

export default App;

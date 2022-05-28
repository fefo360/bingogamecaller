import "./App.css";
import { useState } from "react";
import BingoBoard from "./components/BingoBoard";
import NumberCaller from "./components/NumberCaller";
import { BingoNumber } from "./types/interfaces";
import bingoNumberList from "./utils/bingoNumbersList";

function App() {
  const [boardNumbers, setBoardNumbers] =
    useState<BingoNumber[]>(bingoNumberList);
    console.log('array of balls added to state')
  const [numbersOnBoard, setNumbersOnBoard] = useState<number[]>([]);
  const lastNumberCalled = numbersOnBoard[numbersOnBoard.length - 1];


 
  //testing delay
  function delay(time: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  console.log(
    `lastNumberCalled: ${lastNumberCalled} and numbersOnBoard: ${numbersOnBoard}`
  );

  console.log(numbersOnBoard);

  const startGame = async () => {
    
    let randomNumber = Math.floor(Math.random() * 75 + 1);

    if (numbersOnBoard.includes(randomNumber)) return;
    
    const newBoard = boardNumbers.map((number) => {
      if (number.number === randomNumber)
      return { ...number, isOnBoard: !number.isOnBoard };
      return number;
    });

    
    setBoardNumbers(newBoard);

    // console.log(`randomNumber: ${randomNumber}`);
    setNumbersOnBoard((prev) => [...prev, randomNumber]);

    //testing delay
    await delay(1000);

    // startGame();
  };

  return (
    <div className="App bg-slate- flex justify-between p-5">
      <NumberCaller
        boardNumbers={boardNumbers}
        startGame={startGame}
        calledNumber={boardNumbers[lastNumberCalled - 1]}
      />
      <BingoBoard boardNumbers={boardNumbers} />
    </div>
  );
}

export default App;

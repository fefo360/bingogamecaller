import "./App.css";
import { useState,useRef } from "react";
import BingoBoard from "./components/BingoBoard";
import NumberCaller from "./components/NumberCaller";
import { BingoNumber } from "./types/interfaces";
import bingoNumberList from "./utils/bingoNumbersList";
import delay from "./utils/delay";

function App() {
  const [boardNumbers, setBoardNumbers] =
    useState<BingoNumber[]>(bingoNumberList);
  const numbersOnBoard = useRef<number[]>([]);
  const lastNumberCalled = numbersOnBoard.current[numbersOnBoard.current.length - 1];




  const startGame = async () => {
    while(numbersOnBoard.current.length < 75) {
      //doesnt work insde loop shows length of 0
      console.log(numbersOnBoard.current.length);


    let randomNumber = Math.floor(Math.random() * 75 + 1);

    if (numbersOnBoard.current.includes(randomNumber)) continue
    
    setBoardNumbers((prevBoardNumbers) =>
    prevBoardNumbers.map((number) => {
      if (number.number === randomNumber)
        return { ...number, isOnBoard: !number.isOnBoard };
      return number;
    })
  );

    //add value to numbersOnBoard
    numbersOnBoard.current.push(randomNumber);

    await delay(3000);
  }
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

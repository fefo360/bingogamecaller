import "./App.css";
import { useState, useRef } from "react";
import BingoBoard from "./components/BingoBoard";
import NumberCaller from "./components/NumberCaller";
import { BingoNumber } from "./types/interfaces";
import bingoNumberList from "./utils/bingoNumbersList";
import delay from "./utils/delay";
import playBallSoundEffect from "./utils/playBallSoundEffect";
import Controls from "./components/Controls";

function App() {
  const [boardNumbers, setBoardNumbers] =
    useState<BingoNumber[]>(bingoNumberList);
  const numbersOnBoard = useRef<number[]>([]);
  const lastNumberCalled =
    numbersOnBoard.current[numbersOnBoard.current.length - 1];
    const [gameIsRunning, setGameIsRunning] = useState<boolean>(false);
  const gameIsRunningRef = useRef<boolean>(gameIsRunning);


  const startGame = async () => {
    gameIsRunningRef.current = true;
    while (numbersOnBoard.current.length < 75) {
      let randomNumber = Math.floor(Math.random() * 75 + 1);
      console.log(gameIsRunningRef.current);
      
      if (!gameIsRunningRef.current) continue
      if (numbersOnBoard.current.includes(randomNumber)) continue;
      
      playBallSoundEffect(randomNumber);
      
      setBoardNumbers((prevBoardNumbers) =>
      prevBoardNumbers.map((number) => {
        if (number.number === randomNumber)
        return { ...number, isOnBoard: !number.isOnBoard };
        return number;
      })
      );
      await delay(5000);

      //add value to numbersOnBoard
      numbersOnBoard.current.push(randomNumber);

    }
  };

  return (
    <div className="App bg-orange-200 h-screen flex justify-between p-3">
      <NumberCaller calledNumber={boardNumbers[lastNumberCalled - 1]} startGame={startGame} />
      <BingoBoard boardNumbers={boardNumbers} />
    </div>
  );
}

export default App;

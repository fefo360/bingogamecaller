import "./App.css";
import { useState, useRef, useEffect } from "react";
import BingoBoard from "./components/BingoBoard";
import NumberCaller from "./components/NumberCaller";
import { BingoNumber } from "./types/interfaces";
import bingoNumberList from "./utils/bingoNumbersList";
import playBallSoundEffect from "./utils/playBallSoundEffect";
import Controls from "./components/Controls";

function App() {
  const [boardNumbers, setBoardNumbers] =
    useState<BingoNumber[]>(bingoNumberList);
  const numbersOnBoard = useRef<number[]>([]);
  const lastNumberCalled =
    numbersOnBoard.current[numbersOnBoard.current.length - 1];
  const [gameIsRunning, setGameIsRunning] = useState<boolean>(false);
  const [loop, setLoop] = useState<NodeJS.Timer | undefined >(undefined);



  useEffect(() => {

    console.log(gameIsRunning);
    if (gameIsRunning) {
      setLoop(setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 75 + 1);

        randomNumber = uniqueRandomNumber();

        playBallSoundEffect(randomNumber);
        numbersOnBoard.current.push(randomNumber);

        setBoardNumbers((prevBoardNumbers) =>
          prevBoardNumbers.map((number) => {
            if (number.number === randomNumber)
              return { ...number, isOnBoard: !number.isOnBoard };
            return number;
          })
        );
      }, 2000));
    } else {
      clearInterval(loop);
      console.log('cleared interval');
    }
  }, [gameIsRunning]);

  const startGame = async () => {
    setGameIsRunning((prev) => !prev);
  };

  const uniqueRandomNumber = (): number => {
    let randomNumber = Math.floor(Math.random() * 75 + 1);
    if (numbersOnBoard.current.includes(randomNumber)) {
      return uniqueRandomNumber();
    }
    return randomNumber;
  };

  return (
    <div className="App bg-orange-200 h-screen flex justify-between p-3">
      <NumberCaller
        calledNumber={boardNumbers[lastNumberCalled - 1]}
        startGame={startGame}
        gameIsRunning={gameIsRunning}
      />
      <BingoBoard boardNumbers={boardNumbers} />
    </div>
  );
}

export default App;

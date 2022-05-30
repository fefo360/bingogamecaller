import {BingoNumber} from "../types/interfaces";

interface Props {
  startGame: () => void;
  gameIsRunning: boolean;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setBoardNumbers: React.Dispatch<React.SetStateAction<BingoNumber[]>>;
  numbersOnBoard: React.MutableRefObject<number[]>;
}

export default function Controls({ startGame, gameIsRunning, setGameIsRunning, setBoardNumbers, numbersOnBoard }: Props) {
 
  const resetGame = () => {
    setGameIsRunning(false);
    numbersOnBoard.current = []
    setBoardNumbers(prevValues => prevValues.map(number => ({ ...number, isOnBoard: false })));
    };

 
  return (
    <div>
      <button
        onClick={startGame}
        className={`${
          gameIsRunning ? "bg-orange-400" : "bg-green-500"
        } border font-extrabold w-28 h-16 mr-2 text-2xl`}
      >
        {gameIsRunning ? "PAUSE" : "START"}
      </button>
      <button
        className={`border font-extrabold w-28 h-16 bg-red-500 ml-2 text-2xl`}
        onClick={resetGame}
      >
        RESET
      </button>
      <br />
    </div>
  );
}

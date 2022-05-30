interface Props {
    startGame: () => void;
    gameIsRunning: boolean;
  
}

export default function Controls({startGame, gameIsRunning}:Props) {
  return (
    <div>
        <button
          className="border"
          onClick={startGame}
        >
          {gameIsRunning ? "PAUSE" : "START"}
        </button>
        <button onClick={startGame} className="border" disabled={!gameIsRunning}> 
          
          {gameIsRunning ? "Toggle Status Game" : "Resume Game"}
        </button><br/>
      </div>
  )
}
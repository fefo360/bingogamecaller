interface Props {
    startGame: () => void;
    gameIsRunning: boolean;
    setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>
    gameISRunningRef: React.MutableRefObject<boolean>
}

export default function Controls({startGame, gameIsRunning, gameISRunningRef}:Props) {
  return (
    <div>
        <button
          className="border"
          disabled={!gameIsRunning}
          onClick={startGame}
        >
          Start Game
        </button>
        <button onClick={()=>{gameISRunningRef.current = !gameISRunningRef.current}} className="border">
          
          {gameISRunningRef ? "Toggle Status Game" : "Resume Game"}
        </button><br/>
      </div>
  )
}
interface Props {
  startGame: () => void;
  gameIsRunning: boolean;
}

export default function Controls({ startGame, gameIsRunning }: Props) {
  const reloadPage = () => {
    window.location.reload();
  };
  const logConsole = () => {
    console.log("logging console");
  };
  return (
    <div>
      <button
        onClick={startGame}
        className={`${
          gameIsRunning ? "bg-orange-400" : "bg-green-500"
        } border font-extrabold w-28 h-16 mr-2`}
      >
        {gameIsRunning ? "PAUSE" : "START"}
      </button>
      <button
        className={`border font-extrabold w-28 h-16 bg-red-500 ml-2`}
        onClick={reloadPage}
      >
        RESET
      </button>
      <br />
    </div>
  );
}

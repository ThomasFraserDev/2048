import {useState, useEffect} from "react";
import Header from "./components/Header"
import Board from "./components/Board"
import Stats from "./components/Stats";
import GameController from "./components/GameController";
import {emptyBoard, addRandomTile, moveLeft, moveRight, moveUp, moveDown, boardsEqual, getScore, resetScore, getAvgVal, getLMScore, getHighestVal} from "./utils/gameLogic"

export default function App() {
  const [board, setBoard] = useState(emptyBoard()); // Initialising board state
  const [score, setScore] = useState(getScore(board)); // Initialising score state
  const [moves, setMoves] = useState(0); // Initialising moves state
  const [avgScore, setAvgScore] = useState(0); // Initialising average score state
  const [avgVal, setAvgVal] = useState(0); // Initialising average tile value state
  const [lastMove, setLastMove] = useState(""); // Initialising last move state
  const [lmScore, setLMScore] = useState(0); // Initialising last move score state
  const [highestVal, setHighestVal] = useState(getHighestVal(board)); // Initialising highest value state
  const [highScore, setHighScore] = useState(getScore(board)); // Initialising high score state
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'limitless'); // Initialising mode state, set to limitless if none has been set
  const [timeRemaining, setTimeRemaining] = useState(60); // Initialising timer state 
  const [gameOver, setGameOver] = useState(false); // Initialising game over state
  const [theme, setTheme] = useState("default") // Initialise theme state
  const [modifier, setModifier] = useState("default") // Initialise theme state

  const moveLimit = 50; // Move limit for limited mode

  useEffect(() => { // Timer setup for timed mode
    if (mode === 'timed' && timeRemaining > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setGameOver(true);
            return 0;
          }
        return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode, timeRemaining, gameOver]);

  useEffect(() => { // Initialise the board with two random filled tiles
    let newBoard = addRandomTile([...board.map(r => [...r])]);
    newBoard = addRandomTile([...newBoard.map(r => [...r])]);
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    if (gameOver) {
      return;
    }

    const handleKeyDown = (e) => { // Only handle arrow keys
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        return;
      }
      e.preventDefault();
      
      let newBoard;
      switch(e.key) { // Update the board corresponding to which key pressed
        case 'ArrowLeft':
          newBoard = moveLeft([...board.map(r => [...r])]);
          setLastMove("⬅️");
          break;
        case 'ArrowRight':
          newBoard = moveRight([...board.map(r => [...r])]);
          setLastMove("➡️");
          break;
        case 'ArrowUp':
          newBoard = moveUp([...board.map(r => [...r])]);
          setLastMove("⬆️");
          break;
        case 'ArrowDown':
          newBoard = moveDown([...board.map(r => [...r])]);
          setLastMove("⬇️");
          break;
        default:
          return;
      }
      
      if (!boardsEqual(board, newBoard)) { // If the board updates
        newBoard = addRandomTile(newBoard); // Fill a new tle
        setBoard(newBoard);
        const newScore = getScore(newBoard);
        setScore(newScore); // Update score
        setMoves(moves + 1); // Increment moves
        setAvgScore((newScore / (moves + 1)).toFixed(2)); // Calculate average score per move
        setAvgVal(getAvgVal(newBoard));
        setLMScore(getLMScore());
        setHighestVal(getHighestVal(newBoard));
        if (newScore > highScore) {
          setHighScore(newScore); // Update high score if the current score is higher than the previous high score
        }
        if (mode === 'limited' && moves + 1 >= moveLimit) {
          setGameOver(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board]);

  const handleReplay = () => { // Reset the board and relevant stats on replay
    resetScore();
    let newBoard = addRandomTile(emptyBoard());
    newBoard = addRandomTile(newBoard);
    setBoard(newBoard);
    const newScore = getScore(newBoard);
    setScore(newScore);
    setMoves(0);
    setAvgScore(0);
    setAvgVal(0);
    setLastMove("");
    setLMScore(0);
    setGameOver(false);
    if (mode === 'timed') {
      setTimeRemaining(60);
    }
  };

  const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

  useEffect(() => { // Store the selected mode in local storage and reset game on mode change
    localStorage.setItem('mode', mode);
    handleReplay();
    if (mode === 'timed') {
      setTimeRemaining(60);
    }
  }, [mode]);

  return (
    <div className={`theme-${theme} modifier-${modifier}`}> {/* Main container */}
      <div className="main min-h-screen">
        <Header mode={mode} setMode={setMode}/>
        <div className={`grid grid-cols-3 place-items-center gap-8 mt-4`}>
          <Stats score={score} moves={moves} avgScore={avgScore} avgVal={avgVal} lastMove={lastMove} lmScore={lmScore} highestVal={highestVal} highScore={highScore} mode={mode} moveLimit={moveLimit}/>
          <Board board={board}/>
          <GameController replay={handleReplay} theme={setTheme} modifier={setModifier}/>
      </div>
      {mode === 'timed' && (
                    <div className="flex justify-between ml-auto mr-auto mt-5 w-20 font-semibold">
                        <span>Time:</span>
                        <span className={timeRemaining <= 10 ? 'text-red-400' : ''}>{formatTime(timeRemaining)}</span>
                    </div>
                )}
        <p className="text-center mt-10 text-gray-400">Use arrow keys to play</p>
      </div>
    </div>
  )
}
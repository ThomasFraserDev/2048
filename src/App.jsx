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
  const [theme, setTheme] = useState("default") // Initialise theme state

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  useEffect(() => { // Initialise the board with two random filled tiles
    let newBoard = addRandomTile([...board.map(r => [...r])]);
    newBoard = addRandomTile([...newBoard.map(r => [...r])]);
    setBoard(newBoard);
  }, []);

  useEffect(() => {
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
        setAvgScore((newScore / (moves + 1)).toFixed(2));
        setAvgVal(getAvgVal(newBoard));
        setLMScore(getLMScore);
        setHighestVal(getHighestVal(newBoard));
        if (newScore > highScore) {
          setHighScore(newScore); // Update high score if the current score is higher than the previous high score
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board]);

  const handleReplay = () => {
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
  };

  return (
    <div className={`theme-${theme}`}> {/* Main container */}
    <div className="main min-h-screen">
      <Header mode={mode} setMode={setMode}/>
      <div className={`grid grid-cols-3 place-items-center gap-8 mt-4`}>
        <Stats score={score} moves={moves} avgScore={avgScore} avgVal={avgVal} lastMove={lastMove} lmScore={lmScore} highestVal={highestVal} highScore={highScore}/>
        <Board board={board}/>
        <GameController replay={handleReplay} theme={setTheme}/>
      </div>
      <p className="text-center mt-20 text-gray-400">Use arrow keys to play</p>
      </div>
    </div>
  )
}
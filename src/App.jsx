import {useState, useEffect} from "react";
import Header from "./components/Header"
import Board from "./components/Board"
import Stats from "./components/Stats";
import {emptyBoard, addRandomTile, moveLeft, moveRight, moveUp, moveDown, boardsEqual, getScore} from "./utils/gameLogic"

export default function App() {
  const [board, setBoard] = useState(emptyBoard());
  const [score, setScore] = useState(getScore(board));
  const [moves, setMoves] = useState(0);
  const [highScore, setHighScore] = useState(getScore(board));

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
          break;
        case 'ArrowRight':
          newBoard = moveRight([...board.map(r => [...r])]);
          break;
        case 'ArrowUp':
          newBoard = moveUp([...board.map(r => [...r])]);
          break;
        case 'ArrowDown':
          newBoard = moveDown([...board.map(r => [...r])]);
          break;
        default:
          return;
      }
      
      if (!boardsEqual(board, newBoard)) {
        newBoard = addRandomTile(newBoard); // If the board changed, update it with a new random filled tile
        setBoard(newBoard);
        const newScore = getScore(newBoard);
        setScore(newScore);
        setMoves(moves + 1);
        if (newScore > highScore) {
          setHighScore(newScore);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board]);

  return (
    <div> {/* Main container */}
      <Header/>
      <Board board={board}/>
      <Stats score={score} moves={moves} highScore={highScore}/>
    </div>
  )
}
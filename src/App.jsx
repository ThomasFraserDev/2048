import {useState, useEffect} from "react";
import Header from "./components/Header"
import Board from "./components/Board"
import {emptyBoard, addRandomTile, moveLeft, moveRight, moveUp, moveDown, boardsEqual} from "./utils/gameLogic"

export default function App() {
  const [board, setBoard] = useState(emptyBoard());

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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board]);

  return (
    <div> {/* Main container */}
      <Header/>
      <Board board={board}/>
    </div>
  )
}
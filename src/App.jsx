import {useState, useEffect} from "react";
import Header from "./components/Header"
import Board from "./components/Board"
import {emptyBoard, addRandomTile} from "./utils/gameLogic"

export default function App() {
  const [board, setBoard] = useState(emptyBoard());

  useEffect(() => {
    let newBoard = addRandomTile([...board.map(r => [...r])]);
    newBoard = addRandomTile([...newBoard.map(r => [...r])]);
    setBoard(newBoard);
  }, []);

  return (
    <div> {/* Main container */}
      <Header/>
      <Board board={board}/>
    </div>
  )
}
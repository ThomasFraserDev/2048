import Tile from './Tile'

export default function Board({board, modifier}) {
  return (
  <>
  {modifier != "bigBoard" && modifier != "smallBoard" && (
    <div className="board grid grid-cols-4 grid-rows-4 w-80 sm:w-96 lg:w-120">
      {board.map((row, r) =>
        row.map((value, c) => (
          <Tile key={`${r}-${c}`} value={value} modifier={modifier}/>
        ))
      )}
    </div>
  )}
    {modifier == "bigBoard" && (
    <div className="board grid grid-cols-8 grid-rows-8 w-160 sm:w-192 lg:w-240 mx-12">
      {board.map((row, r) =>
        row.map((value, c) => (
          <Tile key={`${r}-${c}`} value={value} modifier={modifier}/>
        ))
      )}
    </div>
    )}
    {modifier == "smallBoard" && (
    <div className="board grid grid-cols-3 grid-rows-3 w-60 sm:w-72 lg:w-90">
      {board.map((row, r) =>
        row.map((value, c) => (
          <Tile key={`${r}-${c}`} value={value} modifier={modifier}/>
        ))
      )}
    </div>
    )}
  </>
  )
}
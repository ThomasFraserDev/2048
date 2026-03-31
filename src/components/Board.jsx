import Tile from './Tile'

export default function Board({board, modifier}) {
  return (
    <div className="board grid grid-cols-4 grid-rows-4 w-80 sm:w-96 lg:w-120">
        {board.map((row, r) =>
            row.map((value, c) => (
                <Tile key={`${r}-${c}`} value={value} modifier={modifier}/>
            ))
        )}
    </div>
  )
}
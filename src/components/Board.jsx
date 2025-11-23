import Tile from './Tile'

export default function Board({board}) {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-120">
        {board.map((row, r) =>
            row.map((value, c) => (
                <Tile key={`${r}-${c}`} value={value} />
            ))
        )}
    </div>
  )
}
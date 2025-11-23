export default function Stats({score, moves, highScore}) { // add advanced stats (e.g. avg score per move, most common merge, last move...)
    return(
        <div className="flex flex-col w-100 h-120 bg-blue-950 rounded-2xl font-semibold">
            <h2 className="text-5xl text-center mt-5 mb-2">Stats</h2>
            <div className="flex flex-col text-3xl m-2">
                <div className="flex justify-between">
                    <span>Score:</span>
                    <span>{score}</span>
                </div>
                <div className="flex justify-between">
                    <span>Moves:</span>
                    <span>{moves}</span>
                </div>
                <div className="flex justify-between border-t border-gray-600 pt-2 mt-1">
                    <span>Best:</span>
                    <span className="text-yellow-400">{highScore}</span>
                </div>
            </div>
        </div>
    )
}
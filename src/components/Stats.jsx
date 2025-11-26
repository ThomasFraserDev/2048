export default function Stats({score, moves, avgScore, avgVal, lastMove, lmScore, highestVal, highScore}) {
    return(
        <div className="panel flex flex-col w-100 h-120 rounded-2xl font-semibold">
            <h2 className="text-5xl text-center mt-5 mb-2">Stats</h2>
            <div className="flex flex-col text-3xl m-2 gap-3">

                <div className="flex justify-between">
                    <span>Score:</span>
                    <span>{score}</span>
                </div>

                <div className="flex justify-between">
                    <span>Moves:</span>
                    <span>{moves}</span>
                </div>

                <div className="flex justify-between">
                    <span>AVG Score Per Move:</span>
                    <span>{avgScore}</span>
                </div>

                <div className="flex justify-between">
                    <span>AVG Tile Value:</span>
                    <span>{avgVal}</span>
                </div>

                <div className="flex justify-between">
                    <span>Last Move:</span>
                    <span>{lastMove}</span>
                </div>

                <div className="flex justify-between">
                    <span>Last Move Score:</span>
                    <span>{lmScore}</span>
                </div>

                <div className="flex justify-between border-t border-gray-600 pt-2 mt-1">
                    <span>Best Tile:</span>
                    <span className="text-yellow-400">{highestVal}</span>
                </div>

                <div className="flex justify-between">
                    <span>Best Score:</span>
                    <span className="text-yellow-400">{highScore}</span>
                </div>

            </div>
        </div>
    )
}
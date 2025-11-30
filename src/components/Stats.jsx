export default function Stats({score, moves, avgScore, avgVal, lastMove, lmScore, highestVal, highScore, mode, moveLimit}) {
    return(
        <div className="panel flex flex-col w-full sm:w-80 md:w-90 lg:w-100 h-auto lg:h-120 rounded-xl sm:rounded-2xl font-semibold p-4 lg:p-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-2 sm:mt-3 lg:mt-5 mb-2">Stats</h2>
            <div className="flex flex-col text-base sm:text-xl md:text-2xl lg:text-3xl m-1 sm:m-2 lg:m-2 gap-2 sm:gap-3 lg:gap-3">

                <div className="flex justify-between">
                    <span>Score:</span>
                    <span>{score}</span>
                </div>

                <div className="flex justify-between">
                    <span>Moves:</span>
                    <span>{mode === 'limited' ? `${moves} / ${moveLimit}` : moves}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">AVG Score Per Move:</span>
                    <span>{avgScore}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">AVG Tile Value:</span>
                    <span>{avgVal}</span>
                </div>

                <div className="flex justify-between">
                    <span>Last Move:</span>
                    <span>{lastMove}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">Last Move Score:</span>
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
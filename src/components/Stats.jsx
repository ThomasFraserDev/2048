export default function Stats({score, moves, highScore}) { // add advanced stats (e.g. avg score per move...)
    return(
        <div className="flex flex-col w-120 border border-indigo-500">
            <h2 className="text-5xl text-center">Stats</h2>
            <div className="flex flex-col">
                <span>Score: {score}</span>
                <span>Moves: {moves}</span>
                <span>High Score: {highScore}</span>
            </div>
        </div>
    )
}
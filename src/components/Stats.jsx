export default function Stats({score, moves, highScore}) { // add advanced stats (e.g. avg score per move...)
    return(
        <div>
            <span>Score: {score}</span>
            <span>Moves: {moves}</span>
            <span>High Score: {highScore}</span>
        </div>
    )
}
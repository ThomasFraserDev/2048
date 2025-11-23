export default function GameController({replay}) {
    return(
        <div className="flex flex-col w-120 border border-indigo-500">
            <h2 className="text-5xl text-center">Controls</h2>
            <button onClick={replay}>Replay</button>
        </div>
    )
}
export default function GameController({replay}) {
    return(
        <div className="flex flex-col w-100 h-120 bg-blue-950 rounded-2xl items-center font-semibold justify-between">
            <h2 className="text-5xl mt-5">Controls</h2>
            <h3>Themes:</h3>
            <button>Default</button>
            <button>Christmas</button>
            <button onClick={replay} className="w-40 bg-blue-600 hover:bg-blue-500 py-3 px-6 cursor-pointer rounded-2xl mb-10">New Game</button>
        </div>
    )
}
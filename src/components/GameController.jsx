export default function GameController({replay}) {
    return(
        <div className="panel flex flex-col w-100 h-120 bg-blue-950 rounded-2xl items-center font-semibold justify-between">
            <h2 className="text-5xl mt-5">Controls</h2>
            <div className="flex flex-col text-2xl items-center gap-2"> 
                <h3 className="text-3xl">Themes:</h3>

                <div className="flex flex-row gap-2">
                    <button>Default</button>
                    <span className="w-8 h-8 border-2 border-black"/>
                </div>

                <div className="flex flex-row gap-2">
                    <button>Christmas</button>
                    <span className="w-8 h-8 border-2 border-black"/>
                </div>

            </div>

            <button onClick={replay} className="w-40 bg-blue-600 hover:bg-blue-500 py-3 px-6 cursor-pointer rounded-2xl mb-10">
                New Game
            </button>

        </div>
    )
}
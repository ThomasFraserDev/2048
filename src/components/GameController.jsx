export default function GameController({replay, theme}) {
    return(
        <div className="panel flex flex-col w-100 h-120 bg-blue-950 rounded-2xl items-center font-semibold justify-between">
            <h2 className="text-5xl mt-5">Controls</h2>
            <div className="flex flex-col text-2xl items-center gap-2"> 
                <h3 className="text-3xl">Themes:</h3>

                <div className="flex flex-row gap-2">
                    <button className="cursor-pointer" onClick={() => theme("default")}>Default</button>
                    <span onClick={() => theme("default")} className="w-8 h-8 cursor-pointer border-2 border-black bg-blue-950"/>
                </div>

                <div className="flex flex-row gap-2">
                    <button className="cursor-pointer" onClick={() => theme("christmas")}>Christmas</button>
                    <span onClick={() => theme("christmas")} className="cursor-pointer w-8 h-8 border-2 border-black bg-red-700"/>
                </div>

            </div>

            <button onClick={replay} className="btn w-40 py-3 px-6 cursor-pointer rounded-2xl mb-10">
                New Game
            </button>

        </div>
    )
}
export default function GameController({replay, theme, modifier}) {
    return(
        <div className="panel flex flex-col w-100 h-120 bg-blue-950 rounded-2xl items-center font-semibold justify-between text-shadow-lg">
            <h2 className="text-5xl mt-5">Controls</h2>

            <div className="flex flex-row gap-5">

            <div className="flex flex-col text-1xl items-center gap-2"> 
                <h3 className="text-3xl">Themes:</h3>

                <div className="flex flex-col gap-2">

                    <button onClick={() => theme("default")} className="btn px-6 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2">
                        <span className="w-6 h-6 rounded border-2 border-white/50 bg-blue-950"/>
                        Default
                    </button>

                    <button onClick={() => theme("christmas")} className="btn px-6 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2">
                        <span className="w-6 h-6 rounded border-2 border-white/50 bg-red-700"/>
                        Christmas
                    </button>

                    <button onClick={() => theme("tropical")} className="btn px-6 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2">
                        <span className="w-6 h-6 rounded border-2 border-white/50 bg-linear-to-br from-indigo-900 to-purple-900"/>
                        Tropical
                    </button>
                </div>

            </div>

            <div className="flex flex-col text-1xl items-center gap-2"> 
                <h3 className="text-3xl">Modifiers:</h3>

                <div className="flex flex-col gap-2">

                    <button  onClick={() => modifier("default")} className="btn px-6 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform">
                        Default (None)
                    </button>

                    <button onClick={() => modifier("spin")} className="btn px-6 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform">
                        Spin To Win!
                    </button>
                </div>

            </div>
            </div>
            <button onClick={replay} className="btn w-40 py-3 px-6 cursor-pointer rounded-2xl mb-10">
                New Game
            </button>

        </div>
    )
}
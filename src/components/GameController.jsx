export default function GameController({replay, theme, modifier}) {
    return(
        <div className="panel flex flex-col w-full sm:w-80 md:w-90 lg:w-100 h-auto lg:h-120 bg-blue-950 rounded-xl sm:rounded-2xl items-center font-semibold justify-between text-shadow-lg p-4 lg:p-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 lg:mt-5">Controls</h2>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full lg:w-auto">

                <div className="flex flex-col text-1xl items-center gap-2 w-full lg:w-auto"> 
                    <h3 className="text-xl sm:text-2xl lg:text-3xl">Themes:</h3>

                    <div className="flex flex-col gap-2 w-full lg:w-auto">

                        <button onClick={() => theme("default")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2 text-base">
                            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-white/50 bg-blue-950"/>
                            Default
                        </button>

                        <button onClick={() => theme("christmas")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2 text-base">
                            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-white/50 bg-red-700"/>
                            Christmas
                        </button>

                        <button onClick={() => theme("tropical")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2 text-base">
                            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-white/50 bg-linear-to-br from-indigo-900 to-purple-900"/>
                            Tropical
                        </button>

                        <button onClick={() => theme("spring")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center gap-2 text-base">
                            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded border-2 border-white/50 bg-linear-to-br from-green-200 to-pink-200"/>
                            Spring
                        </button>

                    </div>

                </div>

                <div className="flex flex-col text-1xl items-center gap-2 w-full lg:w-auto"> 
                    <h3 className="text-xl sm:text-2xl lg:text-3xl">Modifiers:</h3>

                    <div className="flex flex-col gap-2 w-full lg:w-auto">

                        <button  onClick={() => modifier("default")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform text-base">
                            Default (None)
                        </button>

                        <button onClick={() => modifier("spin")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform text-base">
                            Spin To Win!
                        </button>

                        <button onClick={() => modifier("upside-down")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform text-base">
                            Upside Down
                        </button>

                        <button onClick={() => modifier("invisible")} className="btn px-6 py-2 lg:px-6 lg:py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform text-base">
                            Invisible Numbers
                        </button>

                    </div>

                </div>

            </div>
            
            <button onClick={replay} className="btn w-40 py-3 px-6 cursor-pointer rounded-2xl mb-6 lg:mb-10 text-base mt-2">
                New Game
            </button>

        </div>
    )
}
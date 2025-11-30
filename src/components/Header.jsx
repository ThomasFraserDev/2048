import Navbar from "./Navbar"

export default function Header({mode, setMode}) {
    return(
        <div className="w-full flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6 md:pt-8">
            <h1 className="text-center font-semibold text-white"> 2048 </h1>
            <Navbar mode={mode} setMode={setMode}/>
        </div>
    )
}
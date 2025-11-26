import Navbar from "./Navbar"

export default function Header({ mode, setMode }) {
    return(
        <div className="w-full flex-col text-7xl mb-8 pt-8">
            <h1 className="text-center font-semibold text-white"> 2048 </h1>
            <Navbar mode={mode} setMode={setMode}/>
        </div>
    )
}
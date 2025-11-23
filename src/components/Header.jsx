import Navbar from "./Navbar"

export default function Header() {
    return(
        <div className="w-full flex-col text-7xl mb-8">
        <h1 className="text-center"> 2048 </h1>
        <Navbar/>
        </div>
    )
}
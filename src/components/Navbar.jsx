export default function Navbar() {
    return(
        <nav className="w-full sticky z-50 top-0 p-3 sm:p-4 text-gray-200">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <div className="flex flex-row gap-2 items-center w-full sm:w-auto justify-center sm:justify-start">
          <span className="text-xl sm:text-3xl font-semibold">Limitless</span>
          <span className="text-xl sm:text-3xl font-semibold">Timed</span>
        </div>

        <div className="flex flex-row items-center gap-4 sm:ml-auto">
         

          <a href="https://github.com/TheRealThomasFraser">
            <img className="h-6 w-6 sm:h-8 sm:w-8" src="/assets/github-mark-white.png" />
          </a>
          <a href="https://x.com/ThomasFDev">
            <img className="h-6 w-6 sm:h-8 sm:w-8" src="/assets/twitterLogo.png" />
          </a>
        </div>

      </div>
    </nav>
    )
}
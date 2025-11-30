export default function Navbar({mode, setMode}) {
  const base = "nav-btn px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer"; // Base nav button styles
  const selected = "nav-btn-selected"; // Selected nav button styles to be applied on click

  return (
    <nav className="w-full sticky top-0 z-40 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 my-2 sm:my-3 md:my-4">
      <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-between">
        <div className="hidden sm:flex flex-1"></div> {/* For justify-between spacing */}

        <div className="flex flex-row gap-2 sm:gap-3">

          <button onClick={() => setMode('limitless')} className={`${base} ${mode === 'limitless' && selected}`}>
            Limitless
          </button>

          <button onClick={() => setMode('limited')} className={`${base} ${mode === 'limited' && selected}`}>
            Limited
          </button>

          <button onClick={() => setMode('timed')} className={`${base} ${mode === 'timed' && selected}`}>
            Timed
          </button>

        </div>

        <div className="flex-1 flex items-center justify-center sm:justify-end gap-3 sm:gap-4 md:gap-5 sm:mr-4">
          <a href="https://github.com/TheRealThomasFraser">
            <img className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" src="/assets/github-mark-white.png"/>
          </a>
          <a href="https://x.com/ThomasFDev">
            <img className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" src="/assets/twitterLogo.png"/>
          </a>
        </div>
      </div>
    </nav>
  );
}
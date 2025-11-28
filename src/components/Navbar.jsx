export default function Navbar({mode, setMode}) {
  const base = "nav-btn px-4 py-2 rounded-lg text-lg font-semibold cursor-pointer"; // Base nav button styles
  const selected = "nav-btn-selected"; // Selected nav button styles to be applied on click

  return (
    <nav className="w-full sticky top-0 z-40 px-4 py-3 my-4">
      <div className="w-full flex flex-row gap-4 items-center justify-between">
        <div className="flex-1"></div> {/* For justify-between spacing */}

        <div className="flex flex-row gap-3">

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

        <div className="flex-1 flex items-center justify-end gap-5 mr-4">
          <a href="https://github.com/TheRealThomasFraser">
            <img className="h-7 w-7" src="/assets/github-mark-white.png"/>
          </a>
          <a href="https://x.com/ThomasFDev">
            <img className="h-7 w-7" src="/assets/twitterLogo.png"/>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default function Navbar({ mode, setMode }) {
  const base = "px-4 py-2 rounded-lg text-lg font-semibold cursor-pointer";
  const selected = "bg-blue-600 text-white";
  const unselected = "bg-slate-700 text-gray-300 hover:bg-slate-600";

  return (
    <nav className="w-full sticky top-0 z-40 px-4 py-3 my-4">
      <div className="w-full flex flex-row gap-4 items-center justify-between">
        <div className="flex-1"></div>
        
        <div className="flex flex-row gap-3">

          <button type="button" onClick={() => setMode('limitless')} className={`${base} ${mode === 'limitless' ? selected : unselected}`}>
            Limitless
          </button>

          <button type="button" onClick={() => setMode('limited')} className={`${base} ${mode === 'limited' ? selected : unselected}`}>
            Limited
          </button>

          <button type="button" onClick={() => setMode('timed')} className={`${base} ${mode === 'timed' ? selected : unselected}`}>
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
export default function Tile({value}) {
  return (
    <div className={`tile tile-${value} border-3 sm:border-4 lg:border-4 h-20 w-20 sm:h-24 sm:w-24 lg:h-30 lg:w-30 text-2xl sm:text-3xl lg:text-4xl flex items-center justify-center text-shadow-lg`}>
      {value !== 0 ? value : ""}
    </div>
  );
}
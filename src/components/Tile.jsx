export default function Tile({ value }) {
  return (
    <div className="border-4 border-white h-20 w-20 text-6xl flex items-center justify-center">
      {value !== 0 ? value : ""}
    </div>
  );
}

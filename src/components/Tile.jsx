export default function Tile({ value }) {
  return (
    <div className="border-4 border-blue-950 h-30 w-30 text-4xl flex items-center justify-center">
      {value !== 0 ? value : ""}
    </div>
  );
}

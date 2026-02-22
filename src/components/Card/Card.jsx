export default function Card({
  title,
  image,
  imageClassName = "",
  onSelect,
  selected,
  selectable = false,
  showDivider = false,
}) {
  return (
    <div
      onClick={selectable ? onSelect : undefined}
      className={`flex flex-col py-4 items-center justify-center rounded-xl shadow-xl border transition-all duration-300 bg-white pb-0 relative
        ${
          selectable && selected
            ? "border-[#2166b7] shadow-2xl scale-105"
            : "hover:shadow-lg"
        }
        ${selectable ? "cursor-pointer" : ""}
      `}
    >
      {selectable && (
        <input
          type="checkbox"
          checked={selected}
          readOnly
          className="absolute top-3 right-3 w-4 h-4 accent-[#2166b7] cursor-pointer"
        />
      )}
      {image && (
        <div className="w-48 h-48 flex items-center justify-center mb-5">
          <img
            src={image}
            alt={title}
            className={`object-contain max-w-full max-h-full ${imageClassName}`}
          />
        </div>
      )}
      {showDivider && <div className="border border-b-[#DADADA] w-full"></div>}
      <p
        className={`text-center font-bold w-full py-2 transition-colors duration-300
    ${
      selectable && selected
        ? "bg-[#2166b7] text-white rounded-b-xl"
        : "bg-transparent text-black"
    }
  `}
      >
        {title}
      </p>
    </div>
  );
}

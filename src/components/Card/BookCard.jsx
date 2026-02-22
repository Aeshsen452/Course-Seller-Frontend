import React from "react";

export default function Card({
  title,
  image,
  imageClassName = "",
  onSelect,
  selected,
  selectable = false,
  showDivider = false,
  onBuyNow,
  buttontext
}) {
  return (
    <div
      onClick={selectable ? onSelect : undefined}
      className={`group flex flex-col items-center justify-between
        w-full max-w-[360px] sm:max-w-[320px] md:max-w-[340px] 
        rounded-2xl shadow-lg border bg-white relative overflow-hidden
        transition-all duration-300 ease-in-out
        ${
          selectable && selected
            ? "border-[#2166b7] shadow-2xl scale-105"
            : "hover:shadow-xl hover:scale-[1.02]"
        }
        ${selectable ? "cursor-pointer" : ""}
      `}
    >
      {/* Checkbox (if selectable) */}
      {selectable && (
        <input
          type="checkbox"
          checked={selected}
          readOnly
          className="absolute top-3 right-3 w-5 h-5 accent-[#2166b7] cursor-pointer"
        />
      )}

      {/* Book Image */}
      {image && (
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center mt-6 mb-4 relative transition-all duration-300 group-hover:mb-6">
          <img
            src={image}
            alt={title}
            className={`object-contain max-w-full max-h-full ${imageClassName}`}
          />
        </div>
      )}

      {/* Optional Divider */}
      {showDivider && <div className="border-b border-gray-200 w-full" />}

      {/* Title */}
      <p
        className={`text-center font-semibold text-sm sm:text-base px-3 pb-4 transition-colors duration-300
          ${
            selectable && selected
              ? "bg-[#2166b7] text-white w-full py-2 rounded-b-xl"
              : "text-gray-800"
          }
        `}
      >
        {title}
      </p>

      {/* Buy Now Button (appears on hover) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (onBuyNow) onBuyNow();
        }}
        className="absolute bottom-0 left-0 right-0 
          opacity-0 group-hover:opacity-100 
          translate-y-full group-hover:translate-y-0 
          transition-all duration-300 
          bg-[#2166B7] text-white text-sm font-semibold 
          py-3 rounded-b-xl shadow-md hover:bg-[#1a4f8c]"
      >
        {buttontext}
      </button>
    </div>
  );
}

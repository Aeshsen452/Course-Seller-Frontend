import { TfiClose } from "react-icons/tfi";
export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-opacity duration-300 ${
        isOpen ? "bg-black/50 opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <TfiClose />
        </button>
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
}

export default function Button({
  text = "Login Now",
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full primaryColor px-6 py-2 text-md font-bold text-white ${className}`}
    >
      {text}
    </button>
  );
}

function Button({
  children,
  className,
  bgColor = "bg-blue-800",
  textColor = "text-white",
  hoverBgColor = "hover:bg-white",
  hoverTextColor = "hover:text-blue-500",
}) {
  return (
    <button
      className={`${bgColor} ${textColor} border-2 py-2 px-4 font-bold border-blue-500 rounded-lg ${hoverBgColor} ${hoverTextColor} shadow-lg transition-all duration-300 focus:outline-offset-8 focus:outline-4 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

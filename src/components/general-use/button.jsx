/** Header Section Button */

function Button({
  children,
  className,
  bgColor = "bg-secondaryColor",
  textColor = "text-white",
  hoverBgColor = "hover:bg-white",
  hoverTextColor = "hover:text-blue-500",
}) {
  return (
    <button
      className={`${bgColor} ${textColor} border-2 py-2 px-4 font-bold border-blue-500 rounded-lg ${hoverBgColor} ${hoverTextColor} shadow-lg transition-all duration-300 focus:outline-offset-8 focus:outline-4 ${className} py-4`}
    >
      {children}
    </button>
  );
}

export default Button;

/** HomePage Body Section */
/** Getting Started Button */

const colorClasses = {
  "orange-300": {
    bg: "bg-orange-300",
    hover: "hover:text-orange-300",
    border: "border-orange-300",
  },
  secondaryColor: {
    bg: "bg-secondaryColor",
    hover: "hover:text-secondaryColor",
    border: "border-secondaryColor",
  },
  "custom-black": {
    bg: "bg-custom-black",
    hover: "hover:text-custom-black",
    border: "border-custom-black",
  },
};

export const GettingStartedBtn = ({ btnText, bgColor }) => {
  const colorClass = colorClasses[bgColor] || colorClasses.secondaryColor;

  return (
    <button
      className={`${colorClass.bg} ${colorClass.hover} ${colorClass.border} font-bold border-4 px-4 py-2 text-white rounded-3xl hover:bg-white transition-all duration-300`}
    >
      {btnText}
    </button>
  );
};

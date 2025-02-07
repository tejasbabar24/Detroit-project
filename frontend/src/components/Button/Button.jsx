const Button = ({ isOutline, clickAction, icon, text, color = "black", ...rest }) => {
  const colors = {
    black: "bg-[#253745] text-white border-black hover:bg-gray-800",
    blue: "bg-blue-500 text-white border-blue-600 hover:bg-blue-700",
    green: "bg-green-600 text-white border-green-600 hover:bg-green-700",
  };

  return (
    <button
      {...rest}
      className={`flex items-center gap-3 px-5 py-3 rounded-lg text-lg transition-all duration-300 shadow-md
        ${isOutline ? `border ${colors[color]} bg-white text-${color}-600 hover:bg-${color}-600 hover:text-white` : colors[color]}`}
      onClick={clickAction}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;

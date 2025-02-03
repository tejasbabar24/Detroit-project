import styles from "./Button.module.css";
const Button = ({ isOutline,clickAction, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        isOutline
          ? "px-2 py-4 sm:px-4 sm:py-5 border border-black text-black rounded-md flex items-center gap-2 sm:gap-3 min-w-[220px] text-base sm:text-lg justify-center bg-white w-full cursor-pointer"
          : "px-2 py-4 bg-black text-white rounded-md flex items-center gap-2 sm:gap-3 min-w-[220px] text-base sm:text-lg justify-center cursor-pointer"
      }
      onClick={clickAction}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;

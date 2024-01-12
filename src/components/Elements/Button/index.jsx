const Button = (props) => {
  const {
    type = "button",
    children,
    variant = "bg-black",
    hover = "hover:bg-blue-800",
    width = "w-full",
    onClick = () => {},
    styles = "",
  } = props;
  return (
    <button
      type={type}
      className={ `${styles} text-center flex justify-center items-center h-10 px-6 my-2 font-semibold rounded-md ${width} ${variant} ${hover} text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

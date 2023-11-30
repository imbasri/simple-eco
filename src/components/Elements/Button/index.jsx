const Button = (props) => {
    const { type = "submit", children, variant= "bg-black", hover = 'hover:bg-blue-800',width='w-full' } = props;
    return (
        <button type={type} className={`h-10 px-6 my-2 font-semibold rounded-md ${width} ${variant} ${hover} text-white`}>
            {children}
        </button>
    );
};

export default Button;

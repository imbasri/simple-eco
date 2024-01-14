import { forwardRef } from "react"

const Input = forwardRef((props,ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      id={name}
      type={type}
      name={name}
      className='text-sm border rounded py-2 px-3 text-slate-700 w-full placeholder:opacity-80'
      placeholder={placeholder}
      ref={ref}
    />
  );
})

export default Input
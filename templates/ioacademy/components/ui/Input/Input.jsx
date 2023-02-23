const Input = ({ ...props }) => (
    <input
        {...props}
        className={`${props.className || ""
            } w-full px-3 py-2 bg-white text-gray-500 outline-none border dark:border-gray-800 shadow-sm rounded-lg duration-150`}
    />
);

export default Input;
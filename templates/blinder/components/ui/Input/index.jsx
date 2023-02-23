const Input = ({ ...props }) => (
    <input
        {...props}
        className={`${props.className || ""} w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150`}
    />
)

export default Input
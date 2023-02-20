export default ({ ...props }) => (
  <button
    {...props}
    className={`flex-1 py-1 rounded-md hover:text-gray-900 ${
      props.className || ""
    }`}>
    {props.children}
  </button>
);

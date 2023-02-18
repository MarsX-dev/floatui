export default ({ ...props }) => (
  <button
    {...props}
    className='flex items-center gap-x-2 rounded-lg text-sm font-medium hover:bg-gray-100 border focus:border-indigo-600 focus:border-2 bg-white shadow-sm text-gray-700 focus:outline-none py-2 px-2'>
    {props.children}
  </button>
);

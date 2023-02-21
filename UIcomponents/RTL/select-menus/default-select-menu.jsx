export default () => {
    return (
        <div className="relative max-w-xs mx-auto mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-2.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>مدير المشروع</option>
                <option>مهندس برمجيات</option>
                <option>مدير تكنولوجيا المعلومات</option>
                <option>مصمم UI / UX</option>
            </select>
        </div>
    )
}
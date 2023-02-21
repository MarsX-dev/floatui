export default () => {
    return (
        <div>
            <label className="text-gray-600">
                رقم الهاتف
            </label>
            <div className="relative mt-2 max-w-xs text-gray-500">
                <div className="absolute inset-y-0 right-3 my-auto h-6 flex items-center border-l pl-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                        <option>US</option>
                        <option>ES</option>
                        <option>MR</option>
                    </select>
                </div>
                <input
                    dir="ltr"
                    type="number"
                    placeholder="+1 (555) 000-000"
                    className="w-full pr-[4.5rem] pl-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-right"
                />
            </div>
        </div>
    )
}
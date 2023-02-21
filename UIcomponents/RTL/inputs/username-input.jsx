export default () => {
    return (
        <div className="max-w-md px-4 mx-auto mt-12">
            <label for="username" className="block py-2 text-gray-500">
                اسم المستخدم
            </label>
            <div className="flex items-center text-gray-400 border rounded-md">
                <div className="px-3 py-2.5 rounded-r-md bg-gray-50 border-l">
                    @
                </div>
                <input 
                    type="text"
                    placeholder="احمد محمد"
                    id="username"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none"
                />
            </div>
        </div>
    )
}
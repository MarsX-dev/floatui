export default () => {
    return (
        <div className="max-w-md px-4 mx-auto mt-12">
            <label for="username" className="block py-2 text-gray-500">
                Username
            </label>
            <div className="flex items-center text-gray-400 border rounded-md">
                <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
                    @
                </div>
                <input 
                    type="text"
                    placeholder="Sidi Dev"
                    id="username"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none"
                />
            </div>
        </div>
    )
}

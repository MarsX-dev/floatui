export default () => (
    <div className="flex items-center gap-x-12">
      // Avatar 1
        <div className="flex items-center gap-x-3">
            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
            <div>
                <span className="block text-gray-700 text-sm font-medium">Nikita andrew</span>
                <a href="javascript:void(0)" className="block text-indigo-600 hover:text-indigo-500 text-xs">View profile</a>
            </div>
        </div>
      // Avatar 2
        <button className="flex items-center gap-x-3">
            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
)
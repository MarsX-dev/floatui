export default () => (
    <div className="flex items-center gap-12">
      // Avatar 1
        <div className="flex items-center gap-x-3">
            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
            <div>
                <span className="block text-gray-700 text-sm font-medium">نيكيتا أندرو</span>
                <span className="block text-gray-700 text-xs">nikitaandrew@example.com</span>
            </div>
        </div>
      // Avatar 2
        <div className="flex items-center gap-x-3">
            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-16 h-16 rounded-full" />
            <div>
                <span className="block text-gray-700 font-medium">أليفيكا توني</span>
                <span className="block text-gray-700 text-sm">alivikatony@example.com</span>
            </div>
        </div>
    </div>
)
import { useState } from "react"

export default () => {

    const tabItems = ["Overview", "Integration", "Billing", "Transactions", "plans"]
    const [selectedItem, setSelectedItem] = useState(0)

    return (
        <div className="px-4 md:px-8">
            <ul role="tablist" className="hidden max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 rounded-lg sm:flex">
                {
                    tabItems.map((item, idx) => (
                        <li key={idx} className="py-2">
                            <button
                                role="tab"
                                aria-selected={selectedItem == idx ? true : false}
                                aria-controls={`tabpanel-${idx + 1}`}
                                className={`py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-white active:bg-white/50 font-medium ${selectedItem == idx ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500"}`}
                                onClick={() => setSelectedItem(idx)}
                            >
                                {item}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="relative text-gray-500 sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                <select value={tabItems[selectedItem]} className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600"
                    onChange={(e) => setSelectedItem(tabItems.indexOf(e.target.value))}
                >
                    {
                        tabItems.map((item, idx) => (
                            <option key={idx} idx={idx}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
import { useState } from "react"

export default () => {

    const tabItems = ["الملخص", "التكامل", "الفواتير", "المعاملات", "الخطط"]
    const [selectedItem, setSelectedItem] = useState(0)

    return (
        <div className="px-4 md:px-8">
            <ul role="tablist" className="max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm">
                {
                    tabItems.map((item, idx) => (
                        <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                            <button
                                role="tab"
                                aria-selected={selectedItem == idx ? true : false}
                                aria-controls={`tabpanel-${idx + 1}`}
                                className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                onClick={() => setSelectedItem(idx)}
                            >
                                {item}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
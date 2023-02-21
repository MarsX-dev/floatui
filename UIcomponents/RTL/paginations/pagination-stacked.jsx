import { useState } from "react"

export default () => {

    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState("1")

    return (
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="hidden justify-center sm:flex" aria-label="Pagination">
                <ul className="flex items-center">
                    <li>
                        <a href="javascript:void(0)" className="hover:text-indigo-600 hover:bg-gray-50 px-2 py-3 border border-l-0 rounded-tr-lg rounded-br-lg">
                            <span className="inline-flex flex-row-reverse items-center gap-x-2">
                                السابق
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    {
                        pages.map((item, idx) => (
                            <li key={item} className="">
                                {
                                    item == "..." ? (
                                        <span className="px-4 py-3 border border-l-0">
                                            {item}
                                        </span>
                                    ) : (

                                        <a href="javascript:void(0)" aria-current={currentPage == item ? "page" : false} className={`px-4 py-3 border border-l-0 duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${currentPage == item ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`}>
                                            {item}
                                        </a>
                                    )
                                }
                            </li>
                        ))
                    }
                    <li>
                        <a href="javascript:void(0)" className="hover:text-indigo-600 hover:bg-gray-50 px-2 py-3 border rounded-tl-lg rounded-bl-lg">
                            <span className="inline-flex items-center gap-x-2">
                                التالي
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">السابق</a>
                <div className="font-medium">
                    الصفحة {currentPage} من {pages.length}
                </div>
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">التالي</a>
            </div>
        </div>
    )
}
import { useState } from "react"

export default () => {

    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState("1")

    return (
        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</a>
                <div>
                    Page {currentPage} of {pages.length}
                </div>
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</a>
            </div>
        </div>
    )
}
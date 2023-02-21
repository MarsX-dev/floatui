export default () => {
    
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        خطأ 404
                    </h3>
                    <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        الصفحة غير موجودة
                    </p>
                    <p className="text-gray-600">
                        عذرا، الصفحة التي تبحث عنها لا يمكن العثور عليها أو قد تم إزالتها.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a href="javascript:void(0)" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                            عُد للخلف
                        </a>
                        <a href="javascript:void(0)" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            اتصل بالدعم
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
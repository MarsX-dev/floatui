export default () => {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <div className="pb-6">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                    </div>
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        الصفحة غير موجودة
                    </h3>
                    <p className="text-gray-600 mt-3">
                        عذرا، الصفحة التي تبحث عنها لا يمكن العثور عليها أو قد تم إزالتها.
                    </p>
                </div>
            </div>
        </main>
    )
}
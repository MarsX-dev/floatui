export default () => {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
                <div className="flex gap-3">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="self-center">
                        <span className="text-blue-600 font-medium">
                            تحديث جديد متاح
                        </span>
                        <div className="text-blue-600">
                            <p className="mt-2 sm:text-sm">
                                من المهم الاعتناء بالمريض، على أن يتابعه الطبيب، ولكنه وقت الألم والمعاناة الشديدة.
                            </p>
                            <div className="mt-2">
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center font-medium hover:underline sm:text-sm">
                                    تفاصيل
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
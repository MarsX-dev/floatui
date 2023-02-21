export default () => {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex justify-between p-4 rounded-md bg-yellow-50 border border-yellow-300">
                <div className="flex gap-3">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="self-center">
                        <span className="text-yellow-600 font-medium">
                            عرض النطاق الترددي يصل إلى 300 جيجا بايت
                        </span>
                        <div className="text-yellow-600">
                            <p className="mt-2 sm:text-sm">
                                إنه ألم شديد ، لكنني أعتقد أن الوقت قد حان لبعض العمل الرائع والألم. <a href="javascript:void(0)" className="underline font-medium hover:text-yellow-700">ومع بعض الآلام الشديدة.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
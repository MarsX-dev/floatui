export default () => {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
                <div className="flex gap-3 sm:items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-blue-600 sm:text-sm">
                        لقد أطلقنا للتو إصدارًا جديدًا من التطبيق يحتوي على العديد من الميزات، يمكنك <a href="javascript:void(0)" className="underline font-medium hover:text-blue-700">التحقق من ذلك؟</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default () => {
    return (
        <div className="mt-12 mx-4 px-4 rounded-md bg-blue-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="self-center mr-3">
                        <span className="text-blue-500 font-semibold">
                            معلومات
                        </span>
                        <div className="text-blue-500">
                            <div className="mt-1">
                                مبيعات جديدة من المشتركين السابقين - 20000$ في الإيرادات.
                            </div>
                            <div className="mt-2">
                                <a 
                                    href="javascript:void(0)" 
                                    className="flex items-center text-sm font-medium underline">
                                    تفاصيل
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="self-start text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

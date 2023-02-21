export default () => {

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
                <div className="flex-1 max-w-xl">
                    <h3 className="text-3xl font-bold">
                        احصل على جميع تحديثاتنا مباشرة في صندوق الرسائل الخاص بك.
                    </h3>
                    <p className="text-gray-600 mt-3">
                        للوصول إلى أدق التفاصيل ، لا ينبغي لأحد أن يمارس أي نوع من العمل ما لم يستفيد منه.
                    </p>
                </div>
                <div className="mt-6 md:mt-0">
                    <form onSubmit={(e) => e.preventDefault()} className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute right-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="email"
                                required
                                placeholder="ادخل بريدك الالكتروني"
                                className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:w-auto md:w-full">
                            اشتراك
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
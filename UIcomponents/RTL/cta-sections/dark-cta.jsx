export default () => {
    return (
        <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-xl mx-auto text-center relative">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                        احصل على وصول غير محدود إلى جميع القوالب
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-3">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام Lorem Ipsum.
                    </p>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex">
                    <a 
                        href="javascript:void()"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                        تجربة هذا
                    </a>
                    <a
                        href="javascript:void()"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                    >
                        البدء
                    </a>
                </div>
            </div>
        </section>
    )
}
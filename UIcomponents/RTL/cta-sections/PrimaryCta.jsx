export default () => {
    return (
        <section className="max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="max-w-xl">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        بناء مواقع الويب الخاصة بك <span className="text-indigo-600">بأداء عالٍ</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام Lorem Ipsum.
                    </p>
                </div>
                <a
                    className="cta-pr-btn px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                    href="javascript:void()">
                    جرب اﻵن
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1 duration-150" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(-5px)
                }
            `}</style>
        </section>
    )
}
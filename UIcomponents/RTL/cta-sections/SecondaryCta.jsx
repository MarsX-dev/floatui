export default () => {
    return (
        <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-right">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        بناء مواقع الويب الخاصة بك <span className="text-indigo-600">بأداء عالٍ</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام Lorem Ipsum.
                    </p>
                    <a
                        className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                        href="javascript:void()">
                        جرب اﻵن
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 duration-150" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img 
                        src="https://i.postimg.cc/kgd4WhyS/container.png" 
                        alt="" 
                        className="w-full" 
                    />
                </div>
            </div>
        </section>
    )
}
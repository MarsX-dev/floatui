export default () => {

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "العملاء", path: "javascript:void(0)" },
        { title: "الوظائف", path: "javascript:void(0)" },
    ]
  
    return (
        <div className="bg-gray-900">
            <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6 sm:space-x-reverse">
                    <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/images/logo.svg" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <ul className="py-4 flex-1 items-center flex space-x-3 space-x-reverse sm:space-x-6 sm:space-x-reverse sm:justify-end">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-200" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                        <li>
                            <a href="javascript:void(0)" className="flex items-center text-gray-200">
                                تسجيل دخول
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-right">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                        قالب صفحة واحدة
                         <span className="text-indigo-400"> للوكالة الرقمية</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-x-reverse sm:space-y-0 sm:flex lg:justify-start">
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            البدء
                        </a>
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                            جرب اﻵن
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
        </div>
    )
}
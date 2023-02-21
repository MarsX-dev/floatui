import { useState } from 'react'

export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "العملاء", path: "javascript:void(0)" },
        { title: "الوظائف", path: "javascript:void(0)" },
        { title: "خطوط الإرشاد", path: "javascript:void(0)" },
        { title: "شركاء", path: "javascript:void(0)" }
    ]
  
    return (
        <>
            <header>
                <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6 sm:space-x-reverse">
                    <div className="flex justify-between">
                        <a href="javascript:void(0)">
                            <img
                                src="https://www.floatui.com/logo.svg" 
                                width={120} 
                                height={50}
                                alt="Float UI logo"
                            />
                        </a>
                        <button className="text-gray-500 outline-none sm:hidden"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul className={`bg-white shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 left-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${state ? '' : 'hidden'}`}>
                        <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-x-reverse sm:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                        <a href={item.path}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-right">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        تحسين موقع الويب الخاص بك
                        <span className="text-indigo-600"> لمحرك البحث</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام.
                    </p>
                    <div className="mt-12">
                        <p className="text-gray-800 py-3">
                            اشترك في النشرة الإخبارية لدينا, وسنوفر وقتك
                        </p>
                        <form 
                            onSubmit={(e) => e.preventDefault()}
                            className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-x-reverse sm:space-y-0 sm:flex lg:justify-start">
                            <input
                                type="text"
                                placeholder="ادخل بريدك الإلكتروني"
                                className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                            />
                            <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2 sm:w-auto">
                                إشتراك 
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/kgd4WhyS/container.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
        </>
    )
}
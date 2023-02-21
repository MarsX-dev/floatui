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
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 md:space-x-reverse">
                    <div className="flex justify-between">
                        <a href="javascript:void(0)">
                            <img
                                src="/logo.svg" 
                                width={120} 
                                height={50}
                                alt="Float UI logo"
                            />
                        </a>
                        <button className="text-gray-500 outline-none md:hidden"
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
                    <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                        <li className="order-2 pb-5 md:pb-0">
                            <a href="javascript:void(0)" className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">
                                تسجيل الدخول
                            </a>
                        </li>
                        <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
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
            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                        تحسين موقع الويب الخاص بك
                         <span className="text-indigo-600"> لمحرك البحث</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام.
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-x-reverse sm:space-y-0 sm:flex">
                    <a href="javascript:void(0)" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                        البدء
                    </a>
                    <a href="javascript:void(0)" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
                        جرب اﻵن
                    </a>
                </div>
            </section>
        </>
    )
}
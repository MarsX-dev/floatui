const posts = [
    {
        title: "ما هي SaaS؟ شرح البرمجيات كخدمة",
        desc: "أثناء خوض هذه الرحلة ، كان لدي نظام علاجي قياسي ، يعتمد على النظر في الأدبيات البحثية. بعد أن شاهدت الفيلم ، بدأت في سؤال الآخرين.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "دليل سريع لاستضافة WordPress",
        desc: "وبحسب قوله ، ما زلت متفاجئًا بحدوث ذلك. لكننا نتفاجأ لأننا متفاجئون للغاية. - المزيد من الوحي.",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "7 امتدادات واعدة للرمز VS تم تقديمها في عام 2022",
        desc: "آمل أن أتذكر كل الأشياء التي كانوا بحاجة إلى معرفتها. إنهم يحبون ، 'حسنًا' ، ويكتبونها في دفاتر القراءة الصغيرة الخاصة بهم.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "كيفية استخدام Root C++ Interpreter Shell لكتابة برامج C++",
        desc: "تم حل موجات الجاذبية القوية الناتجة عن تأثير أقمار الكواكب - أربعة في المجموع - أخيرًا في عام 2015 عند الجاذبية.",
        img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    }
]

export default () => {
    return (
        <section className="py-28">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">أحدث مشاركات المدونة</h1>
                    <p className="text-gray-600">المدونة التي يحبها المجتمع. يتم تحديثها كل ساعة.</p>
                    <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute right-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="text"
                                placeholder="ادخل بريدك الإلكتروني"
                                className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                            إشتراك
                        </button>
                    </form>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
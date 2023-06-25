export default () => {

    const posts = [
        {
            title: "ما هو SaaS؟ شرح البرمجيات كخدمة",
            desc: "أثناء خوض هذه الرحلة، كان لدي نظام علاجي قياسي، يعتمد على النظر في الأدبيات البحثية. بعد أن شاهدت الفيلم، بدأت أسأل الآخرين عما فعلوه من أجل قلقهم، وبعضهم",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "دليل سريع لاستضافة WordPress",
            desc: "وبحسب قوله، ما زلت متفاجئًا بحدوث ذلك. لكننا فوجئنا لأننا فوجئنا للغاية. سيظهر المزيد من الكشف عن ويتينغتون في الفيلم.",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "7 امتدادات واعدة للرمز VS تم تقديمها في عام 2022",
            desc: "آمل أن أتذكر كل الأشياء التي كانوا بحاجة إلى معرفتها. إنهم يحبون ، 'حسنًا' ، ويكتبونها في دفاتر القراءة الصغيرة الخاصة بهم. أدركت اليوم أن لدي كل هذه",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "كيفية استخدام Root C ++ Interpreter Shell لكتابة برامج C ++",
            desc: "تم حل موجات الجاذبية القوية الناتجة عن تأثير أقمار الكواكب - أربعة في المجموع - أخيرًا في عام 2015 عندما تم استخدام عدسة الجاذبية الدقيقة لرصد",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        }
    ]
    
    return (
        <section className="py-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="max-w-lg">
                <h1 className="text-3xl text-gray-800 font-semibold">
                المقالات
                </h1>
                <p className="mt-3 text-gray-500">
                    المدونات التي يحبها المجتمع. يتم تحديثها كل ساعة.
                    تم حل موجات الجاذبية القوية الناتجة عن تأثير الكواكب أخيرًا في عام 2015
                </p>
            </div>
            <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
                {
                    posts.map((item, idx) => (
                        <article className="mt-5 pt-8 md:pt-0" key={idx}>
                            <a href={item.href}>
                                <span className="block text-gray-400 text-sm">
                                    {item.date}
                                </span>
                                <div className="mt-2">
                                    <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                    اقرأ المزيد
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
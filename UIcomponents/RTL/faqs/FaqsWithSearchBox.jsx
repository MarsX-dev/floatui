export default () => {

    const faqsList = [
        {
            q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
            a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي.",
            href: "javascript:void(0)",
        },
        {
            q: "هل تقوم بتضمين أسئلة شائعة؟",
            a: "لا يتضمن هذا المولد الأسئلة الأكثر شيوعًا. الفكرة هي أنه يمكنك طرح أسئلة شائعة بمفردك ، لذا فإن معظم الأسئلة في هذا المولد.",
            href: "javascript:void(0)",
        },
        {
            q: "هل يمكنني استخدام هذا لـ 21 سؤالاً؟",
            a: "نعم! هناك طريقتان يمكنك استخدام منشئ الأسئلة هذا بناءً على ما تبحث عنه. يمكنك الإشارة إلى أنك تريد إنشاء 21 سؤالاً.",
            href: "javascript:void(0)",
        },
        {
            q: "هل هذه الأسئلة للفتيات أم للفتيان؟",
            a: "الأسئلة في هذا المولد محايدة بين الجنسين ويمكن استخدامها لسؤال أي ذكر من الإناث (أو أي جنس آخر يحدده الشخص).",
            href: "javascript:void(0)",
        },
        {
            q: "ماذا تتمنى لو كان لديك المزيد من المواهب تفعل؟",
            a: "إذا كنت تبحث عن طريقة للحصول على أسئلة عشوائية ، فقد وصلت إلى صفحة الويب الصحيحة. لقد أنشأنا منشئ الأسئلة العشوائية لطرح العديد من الأسئلة العشوائية التي يرغبها قلبك.",
            href: "javascript:void(0)",
        }
    ]

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        كيف يمكن أن نساعدك؟
                    </h3>
                    <p className="text-gray-600">
                        كل ما تريد معرفته عن المنتج. لا يمكنك العثور على الإجابة التي تبحث عنها؟ لا تتردد في {" "}
                        <a
                            className='text-indigo-600 font-semibold whitespace-nowrap'
                            href='javascript:void(0)'>
                            الاتصال بنا
                        </a>.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="mx-auto sm:max-w-xs">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute right-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                placeholder="ادخل بريدك الالكتروني"
                                className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </form>
                </div>
                <div className='mt-12'>
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-700">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='text-gray-600 leading-relaxed'>
                                </p>
                                <a href={item.href} className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium">
                                    اقرأ أكثر
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
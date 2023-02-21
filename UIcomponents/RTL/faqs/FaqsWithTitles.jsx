export default () => {

    const faqsList = [
        {
            label: "عملية الدفع",
            qas: [
                {
                    q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
                    a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي."
                },
                {
                    q: "هل تقوم بتضمين أسئلة شائعة؟",
                    a: "لا يتضمن هذا المولد الأسئلة الأكثر شيوعًا. الفكرة هي أنه يمكنك طرح أسئلة شائعة بمفردك ، لذا فإن معظم الأسئلة في هذا المولد."
                },
            ]
        },
        {
            label: "الحساب",
            qas: [
                {
                    q: "هل يمكنني استخدام هذا لـ 21 سؤالاً؟",
                    a: "نعم! هناك طريقتان يمكنك استخدام منشئ الأسئلة هذا بناءً على ما تبحث عنه. يمكنك الإشارة إلى أنك تريد إنشاء 21 سؤالاً."
                },
                {
                    q: "هل هذه الأسئلة للفتيات أم للفتيان؟",
                    a: "الأسئلة في هذا المولد محايدة بين الجنسين ويمكن استخدامها لسؤال أي ذكر من الإناث (أو أي جنس آخر يحدده الشخص)."
                },
                {
                    q: "ماذا تتمنى لو كان لديك المزيد من المواهب تفعل؟",
                    a: "إذا كنت تبحث عن طريقة للحصول على أسئلة عشوائية ، فقد وصلت إلى صفحة الويب الصحيحة. لقد أنشأنا منشئ الأسئلة العشوائية لطرح العديد من الأسئلة العشوائية التي يرغبها قلبك."
                }
            ]
        },
        {
            label: "رخصة",
            qas: [
                {
                    q: "ما هو الشيء الذي كان بعيدًا تمامًا عن الشخصية الذي فعلته؟",
                    a: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                }
            ]
        },
    ]

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-lg">
                    <h3 className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                        أسئلة متكررة
                    </h3>
                    <div className='mt-3 text-gray-600 dark:text-gray-400'>
                        <p>
                            لا يمكنك العثور على الإجابة التي تبحث عنها؟ لا تتردد في{" "}
                            <a
                                className='text-indigo-600 font-semibold whitespace-nowrap'
                                href='support@floatui.com'>
                                الاتصال بنا
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className='mt-12 divide-y sm:mt-20'>
                    {
                        faqsList.map((list, idx) => (
                            <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
                                <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                                    <h4 className="text-gray-500 font-semibold">
                                        {list.label}
                                    </h4>
                                </div>
                                <ul className='flex-1 space-y-6 sm:last:pb-6 sm:space-y-8'>
                                    {list.qas.map((item, idx) => (
                                        <li
                                            key={idx}>
                                            <summary
                                                className="flex items-center justify-between font-semibold text-gray-700">
                                                {item.q}
                                            </summary>
                                            <p
                                                dangerouslySetInnerHTML={{ __html: item.a }}
                                                className='mt-3 text-gray-600 leading-relaxed'>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
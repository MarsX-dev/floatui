export default () => {

    const faqsList = [
        {
            q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
            a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي."
        },
        {
            q: "هل تقوم بتضمين أسئلة شائعة؟",
            a: "لا يتضمن هذا المولد الأسئلة الأكثر شيوعًا. الفكرة هي أنه يمكنك طرح أسئلة شائعة بمفردك ، لذا فإن معظم الأسئلة في هذا المولد."
        },
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

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className='flex-1'>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-indigo-600'>
                            أسئلة متكررة
                        </h3>
                        <p className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                            كل المعلومات التي تريد أن تعرفها
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0'>
                    <ul className='space-y-4 divide-y'>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
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
            </div>
        </section>
    )
}
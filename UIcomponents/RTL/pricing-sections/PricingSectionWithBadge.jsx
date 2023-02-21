export default () => {
    
    const plans = [
        {
            name: "الخطة الأساسية",
            desc: "العميل مهم جدا، العميل سيتبعه.",
            price: 12,
            isMostPop: false,
            features: [
                "هناك حقيقة مثبتة",
                "هو ببساطة نص شكلي",
                "لوريم إيبسوم ليس نصاَ عشوائياً",
                "عاد لينتشر مرة أخرى",
                "لكن الغالبية تم تعديلها",
                "عام في القدم",
                " ليس هناك أي كلمات أو عبارات",
            ],
        },
        {
            name: "شركة نالشئة",
            desc: "العميل مهم جدا، العميل سيتبعه.",
            price: 35,
            isMostPop: true,
            features: [
                "هناك حقيقة مثبتة",
                "هو ببساطة نص شكلي",
                "لوريم إيبسوم ليس نصاَ عشوائياً",
                "عاد لينتشر مرة أخرى",
                "لكن الغالبية تم تعديلها",
                "عام في القدم",
                " ليس هناك أي كلمات أو عبارات",
            ],
        },
        {
            name: "مَشرُوع",
            desc: "العميل مهم جدا، العميل سيتبعه.",
            price: 60,
            isMostPop: false,
            features: [
                "هناك حقيقة مثبتة",
                "هو ببساطة نص شكلي",
                "لوريم إيبسوم ليس نصاَ عشوائياً",
                "عاد لينتشر مرة أخرى",
                "لكن الغالبية تم تعديلها",
                "عام في القدم",
                " ليس هناك أي كلمات أو عبارات",
            ],
        },
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        التسعير لجميع الباقات
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            العميل مهم جدا ، العميل سيتبعه. لا توجد نتيجة الآن.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">الأكثر شهرة</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/شهر</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        دعنا نبدء
                                    </button>
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-gray-800 font-medium">
                                        <p>المميزات</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
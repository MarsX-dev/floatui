export default () => {

    const features = [
        {
            title: "تحديث سريع",
            desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم."
        },
        {
            title: "التحليلات",
            desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم."
        },
        {
            title: "أمن مركز البيانات",
            desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم."
        },
        {
            title: "بناء على شروطك",
            desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم."
        },
        {
            title: "آمنة للاستخدام",
            desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم."
        },
        {
            title: "مرن",
            desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-indigo-600 font-semibold">
                        المميزات
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        كل ما تحتاجه لتنمو
                    </p>
                    <p>
                        العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
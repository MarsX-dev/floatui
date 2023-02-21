export default () => {
    return (
        <section className="relative py-28 bg-blue-600">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-blue-100 font-semibold pb-6">ما يقوله الناس</h3>
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl font-semibold sm:text-2xl">
                                “من المهم أن تعرف أن الألم بحد ذاته مهم، وسيتبعه نظام التعليم. والآن يوجد مكتب، بوابة الحياة الآن، مجرد حامل. الآن العمل العظيم للتخمير، مهنة لمهنة أركو.“
                            </p>
                        </blockquote>
                        <div className="mt-6">
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-16 h-16 mx-auto rounded-full" />
                            <div className="mt-3">
                                <span className="block text-white font-semibold">مارتن بروم</span>
                                <span className="block text-blue-100 text-sm mt-0.5">مؤسس ميتا</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
    )
}
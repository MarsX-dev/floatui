export default () => {
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "مارتن بروم",
            title: "مؤسس ميتا",
            quote: "العميل مهم جدا، العميل سيتبعه. الآن هو المكتب، بوابة الحياة الآن."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "أنجيلا ستيان",
            title: "مصمم المنتج",
            quote: "علاوة على ذلك، لا يوجد من يريد أن ينال الألم، لأنه الألم نفسه، السعي وراءه."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "كريم احمد",
            title: "مهندس DevOp",
            quote: "لا يوجد من يحب الألم نفسه، ويسعى وراءه ويريد الحصول عليه، لمجرد أنه ألم."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        انظر ماذا يقول الآخرون عنا
                    </h3>
                    <p className="mt-3 text-gray-600">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
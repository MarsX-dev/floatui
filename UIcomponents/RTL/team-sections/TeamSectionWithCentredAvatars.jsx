export default () => {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "مارتيانا ديالان",
            title: "مصمم المنتج",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "ميشيل كولوراند",
            title: "مهندس برمجيات",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "براون لويس",
            title: "مهندس Full stack",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "ليسا ساندياجو",
            title: "رئيس المصممين",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "دانيال مارتن",
            title: "مصمم المنتج",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "فيكي تانسون",
            title: "مدير الإنتاج",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/29.jpg",
            name: "نيلسون كالين",
            title: "مهندس DevOp",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "تينا ووترسون",
            title: "مصمم العلامة التجارية",
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        التق بفريقنا
                    </h3>
                    <p className="text-gray-600 mt-3">
                        لوريم إيبسوم هو ببساطة نص شكلي في صناعة الطباعة والتنضيد.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
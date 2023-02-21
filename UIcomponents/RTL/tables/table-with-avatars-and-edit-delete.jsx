export default () => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "ليام جيمس",
            email: "liamjames@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "مهندس برمجيات",
            salary: "$100K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "أوليفيا إيما",
            email: "oliviaemma@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "مصمم المنتج",
            salary: "$90K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "وليام بنيامين",
            email: "william.benjamin@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "مطور الواجهة الأمامية",
            salary: "$80K"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "هنري ثيودور",
            email: "henrytheodore@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "مهندس Laravel",
            salary: "$120K"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "اميليا ايليا",
            email: "amelia.elijah@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "مدير Open source",
            salary: "$75K"
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        أعضاء الفريق
                    </h3>
                    <p className="text-gray-600 mt-2">
                        لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="javascript:void(0)"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        اضافة عضو
                    </a>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-right">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">الاسم</th>
                            <th className="py-3 px-6">البريد الالكتروني</th>
                            <th className="py-3 px-6">المنصب</th>
                            <th className="py-3 px-6">الراتب</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                            <span className="block text-gray-700 text-xs">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.phone_nimber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            تعديل
                                        </a>
                                        <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
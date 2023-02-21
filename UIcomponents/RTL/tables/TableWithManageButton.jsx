export default () => {

    const tableItems = [
        {
            name: "التطبيق التعلم منفردا",
            date: "Oct 9, 2023",
            status: "نشط",
            price: "$35.000",
            plan: "اشتراك شهري"
        },
        {
            name: "غلاف النافذة",
            date: "Oct 12, 2023",
            status: "نشط",
            price: "$12.000",
            plan: "اشتراك شهري"
        },
        {
            name: "الوحدة loroin",
            date: "Oct 22, 2023",
            status: "نشط",
            price: "$20.000",
            plan: "اشتراك سنوي"
        },
        {
            name: "مزيل الخلفية",
            date: "Jan 5, 2023",
            status: "نشط",
            price: "$5.000",
            plan: "اشتراك شهري"
        },
        {
            name: "نمر القولون",
            date: "Jan 6, 2023",
            status: "نشط",
            price: "$9.000",
            plan: "اشتراك سنوي"
        },
    ]


    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        جميع المنتجات
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
                        اضافة منتج
                    </a>
                </div>
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-right">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">الاسم</th>
                            <th className="py-3 pr-6">التاريخ</th>
                            <th className="py-3 pr-6">الحالة</th>
                            <th className="py-3 pr-6">شراء</th>
                            <th className="py-3 pr-6">السعر</th>
                            <th className="py-3 pr-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="text-left whitespace-nowrap">
                                        <a href="javascript:void()" className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                            إدارة
                                        </a>
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
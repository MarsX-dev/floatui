export default () => {

    const tableItems = [
        {
            name: "ليام جيمس",
            email: "liamjames@example.com",
            position: "مهندس برمجيات",
            salary: "$100K"
        },
        {
            name: "أوليفيا إيما",
            email: "oliviaemma@example.com",
            position: "مصمم المنتج",
            salary: "$90K"
        },
        {
            name: "وليام بنيامين",
            email: "william.benjamin@example.com",
            position: "مطور الواجهة الأمامية",
            salary: "$80K"
        },
        {
            name: "هنري ثيودور",
            email: "henrytheodore@example.com",
            position: "مهندس Laravel",
            salary: "$120K"
        },
        {
            name: "اميليا ايليا",
            email: "amelia.elijah@example.com",
            position: "مدير Open source",
            salary: "$75K"
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    أعضاء الفريق
                </h3>
                <p className="text-gray-600 mt-2">
                    لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
                </p>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-right">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="divide-x divide-x-reverse">
                            <th className="py-3 px-6">الاسم</th>
                            <th className="py-3 px-6">البريد الالكتروني</th>
                            <th className="py-3 px-6">المنصب</th>
                            <th className="py-3 px-6">الراتب</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="divide-x divide-x-reverse">
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                        <span>{idx + 1}</span>
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
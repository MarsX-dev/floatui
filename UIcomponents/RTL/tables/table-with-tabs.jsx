import { useState } from "react"

export default () => {

    const tableItems = [
        {
            label: "الصفحات",
            title: "أهم الصفحات",
            items: [
                {
                    prop: "https://www.google.com",
                    clicks: "129",
                    impression: "جيد"
                },
                {
                    prop: "https://www.youtube.com",
                    clicks: "798",
                    impression: "طبيعي"
                },
                {
                    prop: "https://www.github.com",
                    clicks: "399",
                    impression: "عظيم"
                },
                {
                    prop: "https://www.floatui.com",
                    clicks: "678",
                    impression: "سيئ"
                },
            ]
        },
        {
            label: "البلدان",
            title: "أهم البلدان",
            items: [
                {
                    prop: "موريتانيا",
                    clicks: "203",
                    impression: "جيد"
                },
                {
                    prop: "الولايات المتحدة الأمريكية",
                    clicks: "408",
                    impression: "عظيم"
                },
                {
                    prop: "فرنسا",
                    clicks: "99",
                    impression: "سيئ"
                },
                {
                    prop: "ألمانيا",
                    clicks: "320",
                    impression: "طبيعي"
                },
            ]
        },
        {
            label: "الأجهزة",
            title: "أهم الأجهزة",
            items: [
                {
                    prop: "أندرويد",
                    clicks: "360",
                    impression: "طبيعي"
                },
                {
                    prop: "لينكس",
                    clicks: "190",
                    impression: "جيد"
                },
                {
                    prop: "ماك بوك",
                    clicks: "129",
                    impression: "جيد"
                },
                {
                    prop: "ويندوز",
                    clicks: "50",
                    impression: "سيئ"
                },
            ]
        },
    ]

    const [selectedItem, setSelectedItem] = useState(0)
    const labelColors = {
        "جيد": {
            color: "text-green-600 bg-green-50",
        },
        "طبيعي": {
            color: "text-blue-600 bg-blue-50",
        },
        "عظيم": {
            color: "text-pink-600 bg-pink-50",
        },
        "سيئ": {
            color: "text-red-600 bg-red-50",
        },
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    التقارير
                </h3>
                <p className="text-gray-600 mt-2">
                    لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
                </p>
            </div>
            <div className="text-sm mt-12 overflow-x-auto">
                <ul rol="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        tableItems.map((item, idx) => (
                            <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <button
                                    role="tab"
                                    aria-selected={selectedItem == idx ? true : false}
                                    aria-controls={`tabpanel-${idx + 1}`}
                                    className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                    onClick={() => setSelectedItem(idx)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <table className="w-full table-auto text-right">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="w-9/12 py-4 pr-6">{tableItems[selectedItem].title}</th>
                            <th className="py-4 pr-6">النقرات</th>
                            <th className="py-4 pr-6">الانطباعات</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems[selectedItem].items.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.prop}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap text-indigo-600">{item.clicks}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`py-2 px-3 rounded-full font-semibold text-xs ${labelColors[item?.impression]?.color || ""}`}>{item.impression}</span>
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
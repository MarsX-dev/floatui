import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUITableWithTabs() {

    const tableItems = [
        {
            label: "Pages",
            title: "Top pages",
            items: [
                {
                    prop: "https://www.google.com",
                    clicks: "129",
                    impression: "Good"
                },
                {
                    prop: "https://www.youtube.com",
                    clicks: "798",
                    impression: "Normal"
                },
                {
                    prop: "https://www.github.com",
                    clicks: "399",
                    impression: "Great"
                },
                {
                    prop: "https://www.floatui.com",
                    clicks: "678",
                    impression: "Bad"
                },
            ]
        },
        {
            label: "Countries",
            title: "Top countries",
            items: [
                {
                    prop: "Mauritania",
                    clicks: "203",
                    impression: "Good"
                },
                {
                    prop: "United state america",
                    clicks: "408",
                    impression: "Great"
                },
                {
                    prop: "France",
                    clicks: "99",
                    impression: "Bad"
                },
                {
                    prop: "Germany",
                    clicks: "320",
                    impression: "Normal"
                },
            ]
        },
        {
            label: "Devices",
            title: "Top devices",
            items: [
                {
                    prop: "Android",
                    clicks: "360",
                    impression: "Normal"
                },
                {
                    prop: "Linux",
                    clicks: "190",
                    impression: "Good"
                },
                {
                    prop: "Macbook",
                    clicks: "129",
                    impression: "Good"
                },
                {
                    prop: "Windows",
                    clicks: "50",
                    impression: "Bad"
                },
            ]
        },
    ]

    const [selectedItem, setSelectedItem] = React.useState(0)
    const labelColors = {
        "Good": {
            color: "text-green-600 bg-green-50",
        },
        "Normal": {
            color: "text-blue-600 bg-blue-50",
        },
        "Great": {
            color: "text-pink-600 bg-pink-50",
        },
        "Bad": {
            color: "text-red-600 bg-red-50",
        },
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Reports
                </h3>
                <p className="text-gray-600 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="text-sm mt-12 overflow-x-auto">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        tableItems.map((item, idx) => (
                            <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <button className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                    onClick={() => setSelectedItem(idx)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <table className="w-full table-auto text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="w-9/12 py-4 pr-6">{tableItems[selectedItem].title}</th>
                            <th className="py-4 pr-6">Clicks</th>
                            <th className="py-4 pr-6">Impression</th>
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
        
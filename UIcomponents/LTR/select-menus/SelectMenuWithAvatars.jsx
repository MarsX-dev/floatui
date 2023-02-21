import { useEffect, useRef, useState } from "react"

export default () => {

    const menuItems = [
        {
            name: "Danya",
            label: "@danya",
            avatar: "https://randomuser.me/api/portraits/women/79.jpg"
        }, {
            name: "Osama",
            label: "@osama",
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
        }, {
            name: "Loyan",
            label: "@loyan",
            avatar: "https://randomuser.me/api/portraits/men/86.jpg"
        }, {
            name: "Carllose",
            label: "@carllose",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
        }, {
            name: "Micheal",
            label: "@micheal",
            avatar: "https://randomuser.me/api/portraits/men/46.jpg"
        },
    ]

    const [selectedItem, setSelectedItem] = useState({
        item: menuItems[0],
        idx: 0
    })
    const [state, setState] = useState(false)
    const selectMenuRef = useRef()

    useEffect(() => {

        const handleSelectMenu = (e) => {
            if (!selectMenuRef.current.contains(e.target)) {
                setState(false)
            }
        }

        document.addEventListener('click', handleSelectMenu)

    }, [])

    return (
        <div className="relative max-w-xs px-4 text-base">
            <button ref={selectMenuRef} className="flex items-center gap-2 w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm cursor-default outline-none focus:border-indigo-600"
                aria-haspopup="true"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() => setState(!state)}
            >
                <img src={selectedItem.item.avatar} className="w-6 h-6 rounded-full" />
                <div className="flex-1 text-left flex items-center gap-x-1">
                    {selectedItem.item.name}<span className="text-sm">{selectedItem.item.label}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
            </button>

            {
                state ? (
                    <div className="relative w-full">
                        <ul className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64" role="listbox">
                            {
                                menuItems.map((el, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => setSelectedItem({
                                            item: el,
                                            idx
                                        })}
                                        role="option"
                                        aria-selected={selectedItem.idx == idx ? true : false}
                                        className={`${selectedItem.idx == idx ? 'text-indigo-600 bg-indigo-50' : ''} flex items-center justify-between gap-2 px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50`}
                                    >
                                        <img src={el.avatar} className="w-6 h-6 rounded-full" />
                                        <div className="flex-1 text-left flex items-center gap-x-1">
                                            {el.name}<span className="text-sm">{el.label}</span>
                                        </div>
                                        {
                                            selectedItem.idx == idx ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : ''
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : ''
            }
        </div>
    )
}
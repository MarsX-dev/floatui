import { useEffect, useRef, useState } from "react"

const MenuItem = ({ children, ...props }) => (
    <li key={props.key || ""}>
        <button {...props} className="w-full flex items-center justify-between gap-x-2 px-2 py-1.5 hover:text-white hover:bg-blue-600 active:bg-blue-500 rounded-lg duration-150 group cursor-default" role="menuitem">
            {children}
        </button>
    </li>
)

const CommandItem = ({ children, ...props }) => (
    <span {...props} className="text-gray-500 group-hover:text-white duration-150">
        {children}
    </span>
)

export default () => {

    const contextmenuRef = useRef()
    const contextmenuHandler = useRef()
    const [isActive, setIsActive] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const menuItems = {
        group_1: [
            {
                name: "شارك",
                command: ""
            },
            {
                name: "خذ رابط",
                command: ""
            },
            {
                name: "نقل",
                command: "Ctrl+M"
            },
        ],
        group_2: [
            {
                name: "نسخ الرابط",
                command: "Ctrl+C"
            },
        ],
        group_3: [
            {
                name: "إعادة تسمية",
                command: ""
            },
            {
                name: "كرر",
                command: ""
            },
        ],
        group_4: [
            {
                name: "حذف",
                command: "Ctrl+D"
            },
            {
                name: "ارشفة",
                command: ""
            },
            {
                name: "استيراد الملفات",
                command: ""
            },
        ],
    }

    const handlecontextMenu = (e) => {
        e.preventDefault()
        const { pageX, pageY } = e
        setIsActive(true)
        setTimeout(() => {
            const rect = contextmenuRef.current.getBoundingClientRect();
            const x = (pageX + rect.width) > window.innerWidth ? (window.innerWidth - rect.width) : pageX + 2;
            const y = (pageY + rect.height) > window.innerHeight ? (window.innerHeight - rect.height) : pageY + 2;
            setPosition({ x, y })
            contextmenuRef.current.classList.remove("opacity-0")
            document.documentElement.classList.add("overflow-hidden")
        }, 100)
    }

    const resetToDefault = () => {
        setIsActive(false)
        document.documentElement.classList.remove("overflow-hidden")
    }

    useEffect(() => {
        document.addEventListener("click", () => resetToDefault())
        document.addEventListener("contextmenu", (e) => {
            if (contextmenuHandler.current && !contextmenuHandler.current.contains(e.target)) resetToDefault()
        })
    }, [])


    return (
        <main className="px-4">
            {/* Card */}
            <div ref={contextmenuHandler} onContextMenu={handlecontextMenu} className="max-w-sm h-32 mx-auto mt-12 rounded-lg border border-dashed bg-gray-50 text-sm flex items-center justify-center select-none text-gray-600">
                <p>انقر بزر الماوس الأيمن هنا.</p>
            </div>
            {/* The context menu */}
            {
                isActive ? (
                    <div ref={contextmenuRef} className="fixed z-10 opacity-0 max-w-[17rem] w-full rounded-lg bg-white shadow-md border text-sm text-gray-800" style={{ top: `${position.y}px`, left: `${position.x}px` }}>
                        <ul className="px-2 py-1.5" role="menu">
                            {
                                menuItems.group_1.map((item, idx) => (
                                    <MenuItem key={idx}>
                                        {item.name}
                                        <CommandItem>
                                            {item.command}
                                        </CommandItem>
                                    </MenuItem>
                                ))
                            }
                        </ul>
                        {[menuItems.group_2, menuItems.group_3, menuItems.group_4].map((group, i) => (
                            <ul className="px-2 py-1.5 border-t" role="menu" key={i}>
                                {group.map((item, idx) => (
                                    <MenuItem key={idx}>
                                        {item.name}
                                        <CommandItem>
                                            {item.command}
                                        </CommandItem>
                                    </MenuItem>
                                ))}
                            </ul>
                        ))}
                    </div>
                ) : ""
            }
        </main>
    )
}
import { useEffect, useRef, useState } from "react"

const MenuItem = ({ children, ...props }) => (
    <div key={props.key || ""} role="menuitem">
        <div className="px-2">
            <button {...props} className="w-full flex items-center justify-between gap-x-2 px-2 py-1.5 hover:text-white hover:bg-blue-600 active:bg-blue-500 rounded-lg duration-150 group/item cursor-default">
                {children}
            </button>
        </div>
    </div>
)

const MenuItemSub = ({ children, ...props }) => (
    <div key={props.key || ""} className="relative group" role="menuitem">
        <div className="px-2">
            <button {...props} className="menu-item-sub w-full flex items-center justify-between gap-x-2 px-2 py-1.5 hover:text-white group-hover:text-white hover:bg-blue-600 active:bg-blue-500 group-hover:bg-blue-600 rounded-lg duration-150 cursor-default">
                {props.item}
                <svg className="w-3 h-3 text-gray-600 group-hover:text-white" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5858 2.34317L2 0.928955L9.0711 8L2 15.0711L0.5858 13.6569L6.2427 8L0.5858 2.34317Z" fill="currentColor" />
                </svg>
            </button>
        </div>
        {children}
    </div>
)

const CommandItem = ({ children, className, props }) => (
    <span {...props} className={`text-gray-500 duration-150 group-hover/item:text-white ${className || ""}`}>
        {children}
    </span>
)

const ContextMenuSubWrapper = ({ children, ...props }) => (
    <div {...props} className="absolute top-0 z-10 max-w-[17rem] w-full py-1.5 rounded-lg bg-white shadow-md border text-sm text-gray-800 hidden group-hover:block">
        {children}
    </div>
)

const WrapperDevide = ({ children, ...props }) => (
    <div {...props} className="pt-1.5 mt-1.5 border-t">
        {children}
    </div>
)

export default () => {

    const contextmenuRef = useRef()
    const contextmenuHandler = useRef()
    const [isActive, setIsActive] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [submenuPosition, setSubmenuPosition] = useState(0)

    const menuItems = {
        group_1: [
            {
                name: "Share",
                command: ""
            },
            {
                name: "Plugins",
                command: "",
                submenu: [
                    {
                        name: "Unsplash",
                        command: ""
                    },
                    {
                        name: "Inbox Cleaner",
                        command: ""
                    },
                    {
                        name: "Auto layout",
                        command: ""
                    },
                ]
            },
            {
                name: "Move to",
                command: "Ctrl+M"
            },
        ],
        group_2: [
            {
                name: "Copy link",
                command: "Ctrl+C"
            },
        ],
        group_3: [
            {
                name: "Rename",
                command: ""
            },
            {
                name: "Duplicate",
                command: ""
            },
        ],
        group_4: [
            {
                name: "Delete",
                command: "Ctrl+D"
            },
            {
                name: "Archieve",
                command: ""
            },
            {
                name: "Import files",
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
            setSubmenuPosition((pageX + (rect.width * 2)) > window.innerWidth ? (-(rect.width - 10)) : (rect.width - 10))
            contextmenuRef.current.classList.remove("opacity-0")
            document.documentElement.classList.add("overflow-hidden")
        }, 100)
    }

    const resetToDefault = (e) => {
        if (e && e.target && !e.target.closest(".menu-item-sub")) {
            setIsActive(false)
            document.documentElement.classList.remove("overflow-hidden")
        }
    }

    useEffect(() => {
        document.addEventListener("click", (e) => resetToDefault(e))
        document.addEventListener("contextmenu", (e) => {
            if (contextmenuHandler.current && !contextmenuHandler.current.contains(e.target)) resetToDefault()
        })
    }, [])


    return (
        <main className="px-4">
            {/* Card */}
            <div ref={contextmenuHandler} onContextMenu={handlecontextMenu} className="max-w-sm h-32 mx-auto mt-12 rounded-lg border border-dashed bg-gray-50 text-sm flex items-center justify-center select-none text-gray-600">
                <p>Right click here.</p>
            </div>
            {/* The context menu */}
            {
                isActive ? (
                    <div ref={contextmenuRef} role="menu" className="fixed z-10 opacity-0 max-w-[17rem] w-full py-1.5 rounded-lg bg-white shadow-md border text-sm text-gray-800" style={{ top: `${position.y}px`, left: `${position.x}px` }}>
                        <div>
                            {
                                menuItems.group_1.map((item, idx) => (
                                    item.submenu ? (
                                        <MenuItemSub item={item.name} key={idx}>
                                            <ContextMenuSubWrapper style={{ transform: `translateX(${submenuPosition}px)` }}>
                                                {item.submenu.map((item, idx) => (
                                                    <MenuItem key={idx}>
                                                        {item.name}
                                                        <CommandItem>
                                                            {item.command}
                                                        </CommandItem>
                                                    </MenuItem>
                                                ))}
                                                <WrapperDevide>
                                                    <MenuItem>
                                                        Find more plugins
                                                        <CommandItem>
                                                            Ctrl+P
                                                        </CommandItem>
                                                    </MenuItem>
                                                </WrapperDevide>
                                            </ContextMenuSubWrapper>
                                        </MenuItemSub>
                                    ) : (
                                        <MenuItem key={idx}>
                                            {item.name}
                                            <CommandItem>
                                                {item.command}
                                            </CommandItem>
                                        </MenuItem>
                                    )
                                ))
                            }
                        </div>
                        {[menuItems.group_2, menuItems.group_3, menuItems.group_4].map((group, i) => (
                            <WrapperDevide key={i}>
                                {group.map((item, idx) => (
                                    <MenuItem key={idx}>
                                        {item.name}
                                        <CommandItem>
                                            {item.command}
                                        </CommandItem>
                                    </MenuItem>
                                ))}
                            </WrapperDevide>
                        ))}
                    </div>
                ) : ""
            }
        </main>
    )
}
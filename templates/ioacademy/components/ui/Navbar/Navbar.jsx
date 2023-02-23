import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Brand from '../Brand'
import DarkModeHandler from '../DarkModeHandler'
import NavLink from '../NavLink'

const Navbar = () => {

    const menuBtnEl = useRef()
    const [state, setState] = useState(false)
    const { pathname } = useRouter();

    // array of all the paths that doesn't need dark navbar
    const pathnames = ["/tutorials/[lesson]/[slug]"]
    const isLightNeeded = pathnames.includes(pathname)
    // Method to add custom color based on the path
    const addColor = (lightColor, darkColor) => isLightNeeded ? lightColor : darkColor

    // Navbar background color config
    const bgColor = addColor("bg-white", "bg-gray-900")
    // Brand Color config
    const brandColor = addColor("text-gray-900", "text-white")
    // Navigation links color config
    const navLinkColor = addColor("text-gray-700 hover:text-blue-600 md:text-gray-600", "text-gray-200 hover:text-sky-500")
    // Navbar menu nutton config
    const navMenuBtnColor = addColor("text-gray-500 hover:bg-gray-50", "text-gray-400 hover:bg-gray-800")

    const navigation = [
        { name: "Features", href: "/#features" },
        { name: "Lessons", href: "/tutorials/cs50" },
        { name: "Pricing", href: "/#pricing" },
    ]

    useEffect(() => {

        // Close the navbar menu when click outside the menu button or when scroll
        document.onclick = (e) => {
            const target = e.target;
            if (menuBtnEl.current && !menuBtnEl.current.contains(target)) setState(false);
        };
        window.onscroll = () => setState(false);
    }, [])

    const DarkModeBtn = () => <DarkModeHandler className={`dark:text-sky-500 ${addColor("text-blue-600 hover:bg-gray-50", "text-sky-500 hover:bg-gray-800")}`} />

    return (
        <header>
            <nav className={`${bgColor} dark:bg-gray-900 w-full md:static md:text-sm ${state ? "relative z-20" : ""}`}>
                <div className="custom-screen relative items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/" aria-label="Logo">
                            <Brand className={`dark:text-white ${brandColor}`} />
                        </Link>
                        <div className="flex gap-x-3 items-center md:hidden">
                            <DarkModeBtn />
                            <button ref={menuBtnEl} role="button" aria-label="Open the menu" className={`p-2 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${navMenuBtnColor}`}
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`${bgColor} dark:bg-gray-900 flex-1 md:py-0 md:block md:static md:z-0 ${state ? "absolute z-20 inset-x-0 px-4 py-6 w-full" : "hidden"}`}>
                        <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:font-medium">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className={`${navLinkColor} dark:text-gray-200 dark:hover:text-sky-500 duration-150`}>
                                            <Link
                                                href={item.href}
                                                className="block"
                                                scroll={false}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <span className={`${addColor("bg-gray-300", "bg-gray-800")} dark:bg-gray-700 hidden w-px h-5 md:block`}></span>
                            </li>
                            <li className='hidden md:block'>
                                <DarkModeBtn />
                            </li>
                            <li>
                                <NavLink
                                    href="/login"
                                    className="flex items-center justify-center gap-x-1 font-medium text-sm text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full"
                                >
                                    Sign in
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
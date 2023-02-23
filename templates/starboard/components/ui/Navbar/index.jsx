import Link from "next/link"
import Brand from "../Brand"
import NavLink from "../NavLink"

const Navbar = () => (
    <header>
        <nav className="custom-screen py-3 flex items-center justify-between md:py-5">
            <div>
                <Link href="/">
                    <Brand />
                </Link>
            </div>
            <NavLink
                href="#get-started"
                className="font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 focus:bg-gray-900 ring-offset-2 ring-gray-800 focus:ring-2"
            >
                Get started
            </NavLink>
        </nav>
    </header>
)

export default Navbar
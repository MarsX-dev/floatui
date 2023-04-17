import { useEffect, useState } from "react";


// NavLink component
const NavLink = ({ ...props }) => {
    const {
        children,
        href = "",
        className = "",
        active = "",
    } = props;

    const [pathname, setPathname] = useState("/");

    const isActive = pathname == href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [props]);

    return (
        <a href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </a>
    );
};

// Title component
const Title = ({ children }) => (
    <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
        {children}
    </h3>
);

// Sections List
const SectionsList = ({ items }) => (
    <div className='text-gray-600 px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item?.href}
                        active='text-gray-900 border-indigo-600'
                        className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

// Search Box component
const SearchBox = ({ ...props }) => (
    <div className='relative w-full'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto'>
            <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
            />
        </svg>

        <input
            {...props}
            type='email'
            className='w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
        />
    </div>
);


const Sidebar = () => {
    const lessons = {
        rustLessons: [{ name: "Introduction to Rust", href: "javascript:void(0)" }, { name: "Installing and Setting up Rust", href: "javascript:void(0)" }, { name: "Basic Syntax and Data Types", href: "javascript:void(0)" }, { name: "Control Flow Statements", href: "javascript:void(0)" }, { name: "Functions and Modules", href: "javascript:void(0)" }, { name: "Ownership and Borrowing", href: "javascript:void(0)" }, { name: "Structs and Enums", href: "javascript:void(0)" }, { name: "Traits and Generics", href: "javascript:void(0)" }],
        cargoLessons: [{ name: "Introduction to Cargo", href: "javascript:void(0)" }, { name: "Installing and Configuring Cargo", href: "javascript:void(0)" }, { name: "Basic Cargo Commands", href: "javascript:void(0)" }, { name: "Working with Dependencies", href: "javascript:void(0)" }, { name: "Rust Workspaces with Cargo", href: "javascript:void(0)" }, { name: "Ownership and Borrowing", href: "javascript:void(0)" }, { name: "Structs and Enums", href: "javascript:void(0)" }, { name: "Traits and Generics", href: "javascript:void(0)" },]
    }

    return (
        <>
            <nav
                className="fixed z-40 top-0 left-0 w-full h-full border-r bg-white space-y-8 overflow-auto sm:w-80">
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <a href='javascript:void(0)' className='flex-none'>
                            <img src="https://floatui.com/logo.svg" width={140} className="mx-auto" />
                        </a>
                    </div>
                    <div className='px-4 md:px-8'>
                        <SearchBox placeholder='Search...' />
                    </div>
                </div>
                <div className='text-[0.9rem] space-y-6'>
                    <>
                        <div>
                            <Title>Rust Basics</Title>
                            <SectionsList items={lessons.rustLessons} />
                        </div>
                        <div>
                            <Title>Cargo Basics</Title>
                            <SectionsList items={lessons.cargoLessons} />
                        </div>
                    </>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
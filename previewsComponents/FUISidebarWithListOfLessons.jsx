import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUISidebarWithListOfLessons() {


    const lessons = {
        rustLessons: [{ name: "Introduction to Rust", href: "javascript:void(0)" }, { name: "Installing and Setting up Rust", href: "javascript:void(0)" }, { name: "Basic Syntax and Data Types", href: "javascript:void(0)" }, { name: "Control Flow Statements", href: "javascript:void(0)" }, { name: "Functions and Modules", href: "javascript:void(0)" }, { name: "Ownership and Borrowing", href: "javascript:void(0)" }, { name: "Structs and Enums", href: "javascript:void(0)" }, { name: "Traits and Generics", href: "javascript:void(0)" }],
        cargoLessons: [{ name: "Introduction to Cargo", href: "javascript:void(0)" }, { name: "Installing and Configuring Cargo", href: "javascript:void(0)" }, { name: "Basic Cargo Commands", href: "javascript:void(0)" }, { name: "Working with Dependencies", href: "javascript:void(0)" }, { name: "Rust Workspaces with Cargo", href: "javascript:void(0)" }, { name: "Ownership and Borrowing", href: "javascript:void(0)" }, { name: "Structs and Enums", href: "javascript:void(0)" }, { name: "Traits and Generics", href: "javascript:void(0)" },]
    }

    return (
         <div style={{height: "800px"}}>
            <nav
                className="fixed z-40 top-0 left-0 w-full h-full border-r bg-white space-y-8 overflow-auto sm:w-80">
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <a href='javascript:void(0)' className='flex-none'>
                            <img src="https://floatui.com/logo.svg" width={140} className="mx-auto" />
                        </a>
                    </div>
                    <div className='px-4 md:px-8'>
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
                                placeholder='Search...' 
                                type='email'
                                className='w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
                            />
                        </div>
                    </div>
                </div>
                <div className='text-[0.9rem] space-y-6'>
                        <div>
                            <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
                                Rust Basics
                            </h3>
                              <div className='text-gray-600 px-4 md:px-8'>
                                  <ul>
                                      {lessons?.rustLessons?.map((item, idx) => (
                                          <li key={idx}>
                                              <a
                                                  href={item?.href}
                                                  className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
                                                  {item?.name}
                                              </a>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                        </div>
                        <div>
                            <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
                                Cargo Basics
                            </h3>
                              <div className='text-gray-600 px-4 md:px-8'>
                                  <ul>
                                      {lessons?.cargoLessons?.map((item, idx) => (
                                          <li key={idx}>
                                              <a
                                                  href={item?.href}
                                                  className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
                                                  {item?.name}
                                              </a>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                        </div>
                </div>
            </nav>
        </div>
    );
};

        
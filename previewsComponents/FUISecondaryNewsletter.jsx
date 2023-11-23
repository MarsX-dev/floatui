import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUISecondaryNewsletter() {
    return (
        <section className="items-center py-12 max-w-screen-xl mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12">
            <div className="flex-1 space-y-3">
                <h3 className="text-2xl text-gray-800 font-bold lg:text-3xl">
                    Subscribe to our newsletter
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.  
                </p>
            </div>
            <div className="mt-6 flex-1">
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex">
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="mt-3 text-[15px] text-gray-400">
                    Product updates, announcements, and discounts.
                    Read our <a className="text-indigo-600 underline" href="javascript:void(0)"> Privacy Policy </a>
                </p>
            </div>
        </section>
    )
}
        
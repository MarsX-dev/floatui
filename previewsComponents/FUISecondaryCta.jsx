import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUISecondaryCta() {
    return (
        <section className="relative max-w-screen-xl px-4 py-4 mx-auto cta-sec md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 items-center gap-5 lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        build your websites with <span className="text-indigo-600">high performance</span>
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-500">
                        Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
                    </p>
                    <a
                        className="inline-flex items-center px-4 py-2 mt-5 font-medium text-indigo-600 rounded-full bg-indigo-50"
                        href="javascript:void()">
                        Try it out
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
                <div className="flex-1 mx-auto mt-5 sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img 
                        src="https://i.postimg.cc/kgd4WhyS/container.png" 
                        alt="" 
                        className="w-full" 
                    />
                </div>
            </div>
        </section>
    )
}

        
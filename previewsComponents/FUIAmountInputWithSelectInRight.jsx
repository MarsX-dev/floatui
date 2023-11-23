import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIAmountInputWithSelectInRight() {
    return (
        <div className="max-w-sm mx-auto mt-12">
            <label className="text-gray-600">
                Amount
            </label>
            <div className="relative mt-2 max-w-xs text-gray-500">
                <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                    &#x24;
                </span>
                <input
                    type="number"
                    placeholder="0.00"
                    className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                    <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>MRO</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
        
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUISecondaryButtons() {
    return (
        <div className="btns-container">
            <button
                className="px-3 py-1.5 text-sm text-gray-700 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg"
            >
                Button
            </button>

            <button
                className="px-4 py-2 text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg"
            >
                Button
            </button>

            <button
                className="px-5 py-3 text-gray-700 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg"
            >
                Button
            </button>

            <button
                className="px-6 py-3.5 text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg"
            >
                Button
            </button>

            <button
                className="px-7 py-4 text-gray-700 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg"
            >
                Button
            </button>
        </div>
    )
}

        
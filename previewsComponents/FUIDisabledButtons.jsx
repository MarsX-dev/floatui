import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIDisabledButtons() {
    return (
        <div className="btns-container">
            <button
                className="px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg cursor-not-allowed"
            >
                Button
            </button>

            <button
                className="px-5 py-2.5 text-white bg-indigo-300 cursor-not-allowed rounded-lg"
            >
                Button
            </button>

            <button
                className="px-6 py-3 text-white bg-indigo-300 rounded-lg cursor-not-allowed"
            >
                Button
            </button>

            <button
                className="px-7 py-3.5 text-white bg-indigo-300 cursor-not-allowed rounded-lg"
            >
                Button
            </button>

            <button
                className="px-8 py-4 text-white bg-indigo-300 rounded-lg cursor-not-allowed"
            >
                Button
            </button>
        </div>
    )
}
        
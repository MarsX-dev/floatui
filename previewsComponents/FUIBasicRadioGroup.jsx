import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIBasicRadioGroup() {
    const radios = ["Write and Read", "Read only", "Write only"]

    return (
      <div className="flex justify-center pt-6">
        <div>
            <h2 className="text-gray-800 font-medium">Select user role</h2>
            <ul className="mt-3 space-y-3">
                {/* Radio */}
                <li className="flex items-center gap-x-2.5">
                    <input type="radio" name="role" defaultChecked id="admin" className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150" />
                    <label htmlFor="admin" className="text-sm text-gray-700 font-medium">
                        Admin
                    </label>
                </li>
                {/* Radio groups */}
                {
                    radios.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-x-2.5">
                            <input type="radio" name="role" id={idx} className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150" />
                            <label htmlFor={idx} className="text-sm text-gray-700 font-medium">
                                {item}
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    )
}
        
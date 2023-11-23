import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIVerificationCodeInput() {

    const fieldsRef = React.useRef()
    const [state, setState] = React.useState({ code1: "", code2: "", code3: "", code4: "" })

    // Switch to input fields method
    const inputFocus = (e) => {
        const elements = fieldsRef.current.children
        const dataIndex = +e.target.getAttribute("data-index")
        if ((e.key === "Delete" || e.key === "Backspace")) {
            const next = dataIndex - 1;
            if (next > -1) {
                elements[next].focus()
            }
        } else {

            const next = dataIndex + 1
            if (next < elements.length && e.target.value != " " && e.target.value != "" && e.key.length == 1) {
                elements[next].focus()
            }
        }
    }

    const handleChange = (e, codeNumber) => {
        const value = e.target.value
        setState({ ...state, [codeNumber]: value.slice(value.length - 1) })
    }

    return (
        <div className="max-w-sm mx-auto mt-12">
            <label className="text-gray-600">
                Verification code
            </label>
            <div ref={fieldsRef} className="mt-2 flex items-center gap-x-2">
                <input type="text" data-index="0" placeholder="0" value={state.code1} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code1")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="1" placeholder="0" value={state.code2} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code2")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="2" placeholder="0" value={state.code3} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code3")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="3" placeholder="0" value={state.code4} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code4")}
                    onKeyUp={inputFocus}
                />
            </div>
        </div>
    )
}
        
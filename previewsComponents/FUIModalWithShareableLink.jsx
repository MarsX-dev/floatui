import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIModalWithShareableLink() {

    const [state, setState] = React.useState(true)
    const [copyState, setCopyState] = React.useState(false)
    const URLLink = "https://example.lorem/shortlink"
      // Copy the link
    const handleCopy = () => {
        navigator.clipboard.writeText(URLLink).then(function () {
            setCopyState(true)
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    React.useEffect(() => {
        if (copyState) {
            setTimeout(() => setCopyState(false), 3000)
        }
    }, [copyState])

    React.useEffect(() => {
        if (!state) setTimeout(() => setState(true), 1200)
    }, [state])

    return (
        <div style={{height: '550px'}}>
            {
        state ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="py-3 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800">
                                        Get a shareable link
                                    </h4>
                                    <p className="text-[15px] text-gray-600 mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.                                    </p>
                                </div>
                                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                    onClick={() => setState(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-2 border rounded-lg flex items-center justify-between">
                                <p className="text-sm text-gray-600 overflow-hidden">{URLLink}</p>
                                <button className={`relative text-gray-500 hover:text-gray-800 duration-150 ${copyState ? "text-indigo-600 pointer-events-none" : ""}`}
                                    onClick={handleCopy}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    {
                                        copyState ? (
                                            <div className="absolute -top-12 -left-3 px-2 py-1.5 rounded-xl bg-indigo-600 font-semibold text-white text-[10px] after:absolute after:inset-x-0 after:mx-auto after:top-[22px] after:w-2 after:h-2 after:bg-indigo-600 after:rotate-45">Copied</div>
                                        ) : ""
                                    }
                                </button>
                            </div>
                            <button className="mt-2 py-2.5 px-8 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                onClick={() => setState(false)}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : ''
            }
        </div>
    )
}
        
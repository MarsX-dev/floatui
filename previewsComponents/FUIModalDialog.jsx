import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIModalDialog() {

    const [state, setState] = React.useState(true)

    React.useEffect(() => {
        if (!state) setTimeout(() => setState(true), 1200)
    }, [state])

    return (
        <div style={{height: '580px'}}>
            {
                state ? (
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        Terms and agreements
                                    </h4>
                                    <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                        onClick={() => setState(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                                    <p>
                                        Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam sit ultrices enim cursus. Leo sapien, pretium duis est eu volutpat interdum eu non. Odio eget nullam elit laoreet. Libero at felis nam at orci venenatis rutrum nunc. Etiam mattis ornare pellentesque iaculis enim.
                                    </p>
                                    <p>
                                        Felis eu non in aliquam egestas placerat. Eget maecenas ornare venenatis lacus nunc, sit arcu. Nam pharetra faucibus eget facilisis pulvinar eu sapien turpis at. Nec aliquam aliquam blandit eu ipsum.
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 p-4 mt-5 border-t">
                                    <button className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setState(false)}
                                    >
                                        Accept
                                    </button>
                                    <button className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setState(false)}
                                    >
                                        Cancel
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
        
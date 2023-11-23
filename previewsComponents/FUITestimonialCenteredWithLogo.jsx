import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUITestimonialCenteredWithLogo() {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="pb-6">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                    </div>
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="mt-6">
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-16 h-16 mx-auto rounded-full" />
                            <div className="mt-3">
                                <span className="block text-gray-800 font-semibold">Martin escobar</span>
                                <span className="block text-gray-600 text-sm mt-0.5">Founder of meta</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}
        
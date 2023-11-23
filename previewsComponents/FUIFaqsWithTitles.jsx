import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIFaqsWithTitles() {

    const faqsList = [
        {
            label: "Payment",
            qas: [
                {
                    q: "What are some random questions to ask?",
                    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
                },
                {
                    q: "Do you include common questions?",
                    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
                },
            ]
        },
        {
            label: "Account",
            qas: [
                {
                    q: "Can I use this for 21 questions?",
                    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
                },
                {
                    q: "Are these questions for girls or for boys?",
                    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
                },
                {
                    q: "What do you wish you had more talent doing?",
                    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
                }
            ]
        },
        {
            label: "License",
            qas: [
                {
                    q: "What's something that was completely out-of-character that you did?",
                    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }
            ]
        },
    ]

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-lg">
                    <h3 className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                        Frequently asked questions
                    </h3>
                    <div className='mt-3 text-gray-600 dark:text-gray-400'>
                        <p>
                            Can’t find the answer you’re looking for? feel free to{" "}
                            <a
                                className='text-indigo-600 font-semibold whitespace-nowrap'
                                href='support@floatui.com'>
                                contact us
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className='mt-12 divide-y sm:mt-20'>
                    {
                        faqsList.map((list, idx) => (
                            <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
                                <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                                    <h4 className="text-gray-500 font-semibold">
                                        {list.label}
                                    </h4>
                                </div>
                                <ul className='flex-1 space-y-6 sm:last:pb-6 sm:space-y-8'>
                                    {list.qas.map((item, idx) => (
                                        <li
                                            key={idx}>
                                            <summary
                                                className="flex items-center justify-between font-semibold text-gray-700">
                                                {item.q}
                                            </summary>
                                            <p
                                                dangerouslySetInnerHTML={{ __html: item.a }}
                                                className='mt-3 text-gray-600 leading-relaxed'>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
        
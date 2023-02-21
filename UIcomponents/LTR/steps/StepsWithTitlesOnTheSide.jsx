import { useState } from "react"

export default () => {

    const [steps, setStep] = useState({
        stepsItems: ["Profile", "Contact", "Identity", "Passport"],
        currentStep: 2
    })

    return (
        <div className="max-w-2xl mx-auto px-4 md:px-0">
            <ul aria-label="Steps" className="items-center text-gray-600 font-medium md:flex">
                {steps.stepsItems.map((item, idx) => (
                    <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex-1 last:flex-none flex gap-x-2 md:items-center">
                        <div className="flex items-center flex-col gap-x-2">
                            <div className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1 ? "bg-indigo-600 border-indigo-600" : "" || steps.currentStep == idx + 1 ? "border-indigo-600" : ""}`}>
                                <span className={` ${steps.currentStep > idx + 1 ? "hidden" : "" || steps.currentStep == idx + 1 ? "text-indigo-600" : ""}`}>
                                    {idx + 1}
                                </span>
                                {
                                    steps.currentStep > idx + 1 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    ) : ""
                                }
                            </div>
                            <hr className={`h-12 border md:hidden ${idx + 1 == steps.stepsItems.length ? "hidden" : "" || steps.currentStep > idx + 1 ? "border-indigo-600" : ""}`} />
                        </div>
                        <div className="h-8 flex items-center md:h-auto">
                            <h3 className={`text-sm ${steps.currentStep == idx + 1 ? "text-indigo-600" : ""}`}>
                                {item}
                            </h3>
                        </div>
                        <hr className={`hidden mr-2 w-full border md:block ${idx + 1 == steps.stepsItems.length ? "hidden" : "" || steps.currentStep > idx + 1 ? "border-indigo-600" : ""}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
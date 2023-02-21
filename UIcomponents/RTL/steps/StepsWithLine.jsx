import { useState } from "react"

export default () => {

    const [steps, setStep] = useState({
        stepsItems: ["الملف الشخصي", "الاتصال", "الهوية", "جواز السفر"],
        currentStep: 2
    })

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul aria-label="Steps" className="items-center text-gray-600 md:flex">
                {steps.stepsItems.map((item, idx) => (
                    <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex-1 flex md:items-center">
                        <div className={`flex-1 flex items-center gap-x-3 md:block ${idx != 0 ? "md:space-x-10" : ""}`}>
                            <span className={`block h-24 w-1 md:w-full md:h-1 ${steps.currentStep > idx + 1 ? "bg-indigo-600" : "bg-gray-200"}`}></span>
                            <div className="md:mt-2">
                                <p className={`text-sm ${steps.currentStep > idx + 1 ? "text-indigo-600" : ""}`}>خطوة {idx + 1}</p>
                                <h3 className="mt-1 font-medium">
                                    {item}
                                </h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
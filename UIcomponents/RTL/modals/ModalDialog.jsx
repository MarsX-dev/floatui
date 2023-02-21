import { useState } from "react"

export default () => {

    const [state, setState] = useState(true)

    return (
        state ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className="text-lg font-medium text-gray-800">
                                الشروط والاتفاقيات
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
                                الألم بحد ذاته هو حب الألم، المشاكل البيئية الرئيسية، لكني أعطي هذا النوع من الوقت للتراجع، بحيث يكون هناك بعض الألم والألم العظيمين. الآن الألم يحتاج إلى سيارة، لكن الكارتون نفسه الآن. يمكنك إنشاء هذا الباب مع.
                            </p>
                            <p>
                                كرة القدم ليست في شكل من أشكال الفقر. يحتاج الآن لتزيين بحيراته السامة فليكن القوس. لجعبة الحلق تحتاج إلى وسادة سهلة لكرة القدم الحكيمة القبيحة عندها. وليس شيئا لطيفا عنه.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 p-4 mt-5 border-t">
                            <button className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                onClick={() => setState(false)}
                            >
                                أوافق
                            </button>
                            <button className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                onClick={() => setState(false)}
                            >
                                تراجع
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : ''
    )
}
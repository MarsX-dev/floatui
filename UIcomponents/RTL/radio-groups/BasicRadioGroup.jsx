// This example uses this library from Tailwind Labs: https://github.com/tailwindlabs/tailwindcss-forms
export default () => {
    const radios = ["كتابة وقراءة", "قراءة فقط", "كتابة فقط"]

    return (
        <div>
            <h2 className="text-gray-800 font-medium">حدد دور المستخدم</h2>
            <ul className="mt-3 space-y-3">
                {/* Radio */}
                <li className="flex items-center gap-x-2.5">
                    <input type="radio" name="role" defaultChecked id="admin" className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150" />
                    <label htmlFor="admin" className="text-sm text-gray-700 font-medium">
                        مسؤل
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
    )
}
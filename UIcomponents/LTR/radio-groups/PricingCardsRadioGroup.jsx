export default () => {
    const radios = [
        {
            name: "Hobby plan",
            description: "For personal or non-commercial projects.",
        },
        {
            name: "Pro plan",
            description: "For team collaboration with advanced features.",
        },
        {
            name: "Enterprise plan",
            description: "For teams with security,and performance needs.",
        },
    ]

    return (
        <div className="max-w-md mx-auto px-4">
            <h2 className="text-gray-800 font-medium">Find a plan to power your projects</h2>
            <ul className="mt-6 space-y-3">
                {
                    radios.map((item, idx) => (
                        <li key={idx}>
                            <label htmlFor={item.name} className="block relative">
                                <input id={item.name} type="radio" defaultChecked={idx == 1 ? true : false} name="payment" className="sr-only peer" />
                                <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200">
                                    <div className="pl-7">
                                        <h3 className="leading-none text-gray-800 font-medium">
                                            {item.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full">
                                </span>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
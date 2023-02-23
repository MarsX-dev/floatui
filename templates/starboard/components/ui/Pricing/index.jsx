import GradientWrapper from "../../GradientWrapper"
import Button from "../Button";

const Pricing = () => {

    const plans = [
        {
            name: "Hobby",
            desc: "For small teams between 4-7 people focused on collaboration.",
            price: 0,
            isMostPop: false,
        },
        {
            name: "Startup",
            desc: "For large teams with more security, support, and performance needs, and much more.",
            price: 32,
            isMostPop: true,
        },
    ];

    return (
        <GradientWrapper id="get-started" className="sm:my-16">
            <div className="custom-screen text-gray-600">
                <div className='relative max-w-2xl mx-auto sm:text-center'>
                    <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Buy once, use forever.
                    </h2>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Starboard is a quality product that will last a lifetime, so you never have to buy again.
                        </p>
                    </div>
                </div>
                <div className='mt-12 space-y-6 justify-center gap-6 sm:flex sm:space-y-0'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`rounded-xl border shadow-lg ${item.isMostPop ? "bg-gray-800 text-gray-300" : "bg-white"}`}>
                                <div className="h-full p-8 gap-y-4 flex flex-col items-stretch">
                                    <span className={`font-medium ${item.isMostPop ? "text-sky-400" : "text-sky-500"}`}>
                                        {item.name}
                                    </span>
                                    <div className={`text-3xl font-semibold ${item.isMostPop ? "text-white" : "text-gray-800"}`}>
                                        ${item.price} <span className="text-xl font-normal">/mo</span>
                                    </div>
                                    <p className="max-w-sm">
                                        {item.desc}
                                    </p>
                                    <div className="flex-1 flex items-end">
                                        <Button className="block w-full text-white bg-sky-500 hover:bg-sky-600 ring-offset-2 ring-sky-500 focus:ring shadow">
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </GradientWrapper>
    )
}

export default Pricing
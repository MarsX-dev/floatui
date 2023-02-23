import GradientWrapper from "../../GradientWrapper";
import Button from "../Button"

const Pricing = () => {

    const plans = [
        {
            name: "Basic plan",
            desc: "SEO, social, and PPC tools",
            price: 12,
            isMostPop: false,
            features: [
                "3 projects",
                "200 keywords to track",
                "5,000 results per report",
                "Keyword, domain and backlink ",
                "Google Data Studio Integration",
                "Content Marketing Platform",

            ],
        },
        {
            name: "Business plan",
            desc: "All Basic plan features and more",
            price: 39,
            isMostPop: true,
            features: [
                "5 projects",
                "400 keywords to track",
                "12,000 results per report",
                "Keyword, domain and backlink ",
                "Google Data Studio Integration",
                "Content Marketing Platform",
            ],
        },
        {
            name: "Enterprise plan",
            desc: "All Business plan features and more",
            price: 92,
            isMostPop: false,
            features: [
                "10 projects",
                "1000 keywords to track",
                "35,000 results per report",
                "Keyword, domain and backlink ",
                "Google Data Studio Integration",
                "Content Marketing Platform",
            ],
        },
    ];

    return (
        <GradientWrapper wrapperClassName="top-40 inset-x-0">
            <section className='custom-screen text-gray-600'>
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing plans
                    </h1>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Always know what you'll pay with monthly caps and flat pricing.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`bg-white relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "border-blue-600" : ""}`}>
                                <div className="p-8 space-y-4 border-b sm:text-center">
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="pt-8">
                                        <Button className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? "bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 ring-blue-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </GradientWrapper>
    );
};

export default Pricing
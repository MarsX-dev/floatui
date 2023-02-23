import SectionWrapper from "../../SectionWrapper";

const faqsList = [
    {
        q: "How does website traffic affect my business?",
        a: "Website traffic is the number of visitors to a website or webpage. It is usually measured in hits, unique visitors, page views.",
    },
    {
        q: "What are the advantages of using a free traffic service at the beginning?",
        a: "For starters, it is free. It does not cost anything to use the service unlike other paid services that require you to pay.",
    },
    {
        q: "Which types of paid traffic services are available?",
        a: "There are many different types of paid traffic services, such as pay-per-click advertising, social media ads, and email marketing.",
    },
    {
        q: "How do you generate traffic to a website?",
        a: "Social media is a great place for businesses because it has the potential to reach millions of people, so we can help to you do that.",
    },
    {
        q: "How can Website traffic service help me?",
        a: "There are many benefits to using a website traffic service. For example, they can help you get more targeted visitors to your site.",
    },
    {
        q: "Which are the best Website traffic service providers in the market?",
        a: "There are a lot of Website traffic service providers in the market, but split is one of the best, and trusted websites in the market",
    },
    {
        q: "How do you generate traffic to a website?",
        a: "Social media is a great place for businesses because it has the potential to reach millions of people, so we can help to you do that.",
    },
    {
        q: "How can Website traffic service help me?",
        a: "There are many benefits to using a website traffic service. For example, they can help you get more targeted visitors to your site.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-600">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                    Frequently asked questions
                </h2>
                <p className="mt-3">
                    Everything you need to know about the product. Can’t find the answer you’re looking for? feel free to {" "}
                    <a
                        className='text-blue-600 hover:text-blue-400 duration-150 font-semibold whitespace-nowrap'
                        href='mailto:example@domain.com'>
                        contact us
                    </a>.
                </p>
            </div>
            <div className='mt-12'>
                <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                    {faqsList.map((item, idx) => (
                        <li
                            key={idx}
                            className="space-y-3"
                        >
                            <summary
                                className="flex items-center justify-between font-semibold text-gray-700">
                                {item.q}
                            </summary>
                            <p
                                dangerouslySetInnerHTML={{ __html: item.a }}
                                className='leading-relaxed'>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs
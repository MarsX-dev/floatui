import Image from "next/image"
import SectionWrapper from "../../SectionWrapper"
import user1 from "../../../public/testimonial/jonathan.webp"
import user2 from "../../../public/testimonial/rahole.webp"
import user3 from "../../../public/testimonial/joric.webp"
import user4 from "../../../public/testimonial/alexandru.webp"
import user5 from "../../../public/testimonial/lyna.webp"
import user6 from "../../../public/testimonial/tony.webp"
import LayoutEffect from "../../LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Jonathen tapas",
            title: "Founder of saleMore",
            quote: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy...gotta love that."
        },
        {
            avatar: user2,
            name: "Rahole titane",
            title: "Team leader",
            quote: "I've been using Starboard for a couple of months now and it has really helped me with my project management skills.It's perfect for anyone who prefers the simpler route in life."
        },
        {
            avatar: user3,
            name: "Joric toral",
            title: "IT manager",
            quote: "We're using Starboard to manage our entire project, and it's been truly incredible! From the way it's easy to create new tasks and organize your team."
        },
        {
            avatar: user4,
            name: "Alexandru",
            title: "Project manager",
            quote: "I am a project manager and I have used a number of different project management software. Spent over $100,000 on tools that frankly did not work for me."
        },
        {
            avatar: user5,
            name: "Lyna igore",
            title: "CTO of bankLine",
            quote: "I have had the opportunity to work with Starboard on a number of projects and it's been one of the best experiences I have had, so I highly recommend this software."
        },
        {
            avatar: user6,
            name: "Tony justin",
            title: "IT manager",
            quote: "I started as a project manager and now help plan out all our marketing campaigns. The thing that really keeps me coming back is their support."
        },
    ]

    return (
        <SectionWrapper>
            <div className="custom-screen">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Loved by the best enterprises
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Listen to what our customers are saying about the product
                    </p>
                </div>
                <div className="mt-12">
                    <LayoutEffect isInviewState={{
                        trueState: "opacity-100 translate-y-0",
                        falseState: "opacity-0 translate-y-8"
                    }}>
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                                        <figure>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <p className="mt-6 text-gray-700">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial
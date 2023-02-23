import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            title: "Task Management",
            desc: "stay organized and meet deadlines 5x faster with task management."
        },
        {
            title: "Team Collaboration",
            desc: "Collaborate with your team to ensure project accountability and transparency."
        },
        {
            title: "Tracking",
            desc: "Link time spent tracking to tasks from your desktop."
        },
        {
            title: "Reporting",
            desc: "Access detailed reporting for time tracked and automatically create reports"
        },
        {
            title: "Meeting management",
            desc: "You can set meeting agenda, record discussion points, and more."
        },
        {
            title: "Timesheets",
            desc: "Manage and track your remote team’s time."
        },
    ]

    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-600">
                <div className="max-w-2xl space-y-3">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Never miss a beat with Easy Projects
                    </h2>
                    <p>
                        Feeling overwhelmed with the lack of time and resources? With Starboard, you'll never have to worry about your team's productivity again!
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-5">
                                    <div className="flex-none w-8 h-8 border rounded-full text-sky-500 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg text-gray-800 font-medium">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Features
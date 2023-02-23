import Link from "next/link"
import SectionWrapper from "../../SectionWrapper"

const CTA = () => {

    const topicsList = [
        "Learn JavaScript, Command Line, Git, Data Structures, and more",
        "Understand how to write super-efficient code",
        "Problem-solve like a pro",
        "Build a professional portfolio",
        "Get a job"
    ]
    return (
        <SectionWrapper id="cta">
            <div className="custom-screen">
                <div className="max-w-3xl space-y-6 text-gray-600 dark:text-gray-300">
                    <h2 className="text-gray-800 dark:text-gray-50 text-2xl font-semibold sm:text-3xl">
                        This college-course-structured Career Path covers all the basics any CS professional needs to thrive in the tech world.
                    </h2>
                    <p>
                        The IO Academy is a hands-on, immersive program in computer science that equips high school students with the skills necessary to change the world, so beginners, intermediates, and experts all welcome to this course.
                    </p>
                    <div>
                        <ul className="space-y-4">
                            {
                                topicsList.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-5">
                                        <div className="flex-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-sky-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>

                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <p>
                        Ready for a career in coding? {""}
                        <Link href="#pricing" className="text-blue-600 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600 inline-flex items-center gap-x-1 duration-150" scroll={false}>
                            Try this course
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => {
    return (
        <SectionWrapper>
            <div className="custom-screen text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Let’s get started now
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Work with a project management software that's easy and fun to use.
                    </p>
                </div>
                <div className="space-y-3 gap-3 justify-center items-center mt-4 sm:flex sm:space-y-0">
                    <NavLink href="#get-started" className="inline-block w-full font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 shadow rounded-lg sm:w-auto">
                        Get started
                    </NavLink>
                    <NavLink href="mailto:example@domain.com" className="inline-block w-full font-medium text-sm text-gray-800 hover:bg-gray-50 active:bg-gray-100 rounded-lg border sm:w-auto">
                        Contact us
                    </NavLink>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default FooterCTA
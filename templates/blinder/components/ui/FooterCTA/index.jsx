import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with Blinder today
                </h2>
                <p className="mt-3 text-gray-600">
                    Hire experts to create your next idea, follow best practices, remove roadblocks, and delivery on schedule.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Start building
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA
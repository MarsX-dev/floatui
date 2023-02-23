import NavLink from "../NavLink"

const CenteredCTA = () => {
    return (
        <section className="custom-screen text-center">
            <div className="max-w-2xl md:mx-auto">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Cut your project management time by 50% and start focusing on what
                </h2>
                <p className="mt-3 text-gray-600">
                    Starboard is a comprehensive project management software that captures the entire project lifecycle, from backlog to release. With a variety of features like real-time reporting, Kanban layouts and more
                </p>
            </div>
            <div className="mt-4">
                <NavLink href="#get-started" className="inline-block w-full font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 shadow rounded-lg sm:w-auto">
                    Try for free
                </NavLink>
            </div>
        </section>
    )
}

export default CenteredCTA
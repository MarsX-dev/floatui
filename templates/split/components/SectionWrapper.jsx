const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-16 lg:py-20 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper
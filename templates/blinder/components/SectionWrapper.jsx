const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-16 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper
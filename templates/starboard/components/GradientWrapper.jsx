const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`border-y py-28 ${props.className || ""}`}
        style={{
            background:
                "linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0) 100%)",
        }}
    >
        {children}
    </div>
)

export default GradientWrapper
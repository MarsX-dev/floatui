const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`bg-gray-900 relative py-28 sm:py-32 ${props.className || ""}`}>
        <div className="blur-[138px] absolute inset-0 m-auto max-w-7xl h-[230px]"
            style={{
                background:
                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}>

        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper
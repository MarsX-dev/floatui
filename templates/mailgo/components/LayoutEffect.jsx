import { useInView } from "framer-motion"
import { cloneElement, useRef } from "react";

const LayoutEffect = ({ children,
    className,
    isInviewState: { trueState = "", falseState = "" }
}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return cloneElement(children, {
        ref,
        className: `${children.props.className || ""} ${className || ""} ${isInView ? trueState : falseState}`
    })
}

export default LayoutEffect
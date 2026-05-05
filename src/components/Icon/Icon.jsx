import SuccessIcon from "./SuccessIcon"
import WarningIcon from "./WarningIcon"
import ErrorIcon from "./ErrorIcon"
import NeutralIcon from "./NeutralIcon"
import Cloud from "./Cloud"
import Quote from "./Quote"

const icons = {
    success: { icon: <SuccessIcon/>, size: 20 },
    warning: { icon: <WarningIcon/>, size: 20 },
    error: { icon: <ErrorIcon/>, size: 20 },
    neutral: { icon: <NeutralIcon/>, size: 20 },
    cloud: { icon: <Cloud/>, size: 24 },
    quote: { icon: <Quote />, size: 48 }
}

export default function Icon({ type }) {

    const icon = icons[type].icon
    const size = icons[type].size

    return (
        <svg width={size} 
             height={size} 
             viewBox={`0 0 ${size} ${size}`} 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
            {icon}
        </svg>
    )
}
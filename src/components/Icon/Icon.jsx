import SuccessIcon from "./SuccessIcon"
import WarningIcon from "./WarningIcon"
import ErrorIcon from "./ErrorIcon"
import NeutralIcon from "./NeutralIcon"
import Cloud from "./Cloud"

const iconType = {
    success: <SuccessIcon/>,
    warning: <WarningIcon/>,
    error: <ErrorIcon/>,
    neutral: <NeutralIcon/>,
    cloud: <Cloud/>
}

export default function Icon({ type }) {
    return (
        <svg width="24" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            {iconType[type]}
        </svg>
    )
}
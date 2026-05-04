import SuccessIcon from "./SuccessIcon"
import WarningIcon from "./WarningIcon"
import ErrorIcon from "./ErrorIcon"
import NeutralIcon from "./NeutralIcon"

const iconType = {
    success: <SuccessIcon/>,
    warning: <WarningIcon/>,
    error: <ErrorIcon/>,
    neutral: <NeutralIcon/>
}

export default function Icon({ type }) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            {iconType[type]}
        </svg>
    )
}
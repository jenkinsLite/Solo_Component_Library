import "./Badge.css"

export default function Badges({ children="Badge", color="grey", type="square" }) {

    const badgeColors = {
        grey: { bg: "#F3F4F6", font: "#1F2937"},
        red: { bg: "#FEE2E2", font: "#991B1B"},
        yellow: { bg: "#FEF3C7", font: "#92400E"},
        green: { bg: "#D1FAE5", font: "#065F46"},
        blue: { bg: "#DBEAFE", font: "#1E40AF"},
        indigo: { bg: "#E0E7FF", font: "#3730A3"},
        purple: { bg: "#EDE9FE", font: "#5B21B6"},
        pink: { bg: "#FCE7F3", font: "#9D174D"}
    }

    const badgeType = {
        square: "4px",
        pill: "12px"
    }

    const style = { 
        backgroundColor: badgeColors[color].bg, 
        color: badgeColors[color].font, 
        borderRadius: badgeType[type] 
    }

    return (
        <>
            <span className="badge" style={style}>{children}</span>
        </>
    )
}
import "./Banner.css"
import Icon from "../Icon/Icon"

export default function Banner({ type="neutral", title="Neutral", info="Lorem ipsum ..." }) {

    const bannerColors = {
        success: { bg: "#ECFDF5", title: "#065F46", info: "#047857"},
        warning: { bg: "#FFFBEB", title: "#92400E", info: "#B45309"},
        error: { bg: "#FEF2F2", title: "#92400E", info: "#B45309"},
        neutral: { bg: "#EFF6FF", title: "#1E40AF", info: "#1C51B9"}
    }

    const bgStyle = { 
        backgroundColor: bannerColors[type].bg, 
    }

    const titleStyle = { 
        color: bannerColors[type].title, 
    }

    const infoStyle = { 
        color: bannerColors[type].info, 
    }

    return (
        <div className="banner" style={bgStyle}>
            <Icon type={type}/>
            <div className="message">
                <span className="bannerTitle" style={titleStyle}>{title}</span>
                {arguments[0].info && <span className="bannerInfo" style={infoStyle}>{info}</span>}
            </div>
        </div>
    )
}
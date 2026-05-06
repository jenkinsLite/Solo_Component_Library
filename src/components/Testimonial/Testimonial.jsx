import "./Testimonial.css"
import Icon from "../Icon/Icon"

export default function Testimonial({ name="", title="", info="" }) {

    return (
        <>
            <div className="testimonial-container">
                <img className="pic-container" src="./src/assets/images/demo-hs.jpg" />
                <span className="testimonial">
                    <Icon className="quote-icon" type="quote" />
                    <p>{info}</p>
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                </span>
            </div>
        </>
    )
}
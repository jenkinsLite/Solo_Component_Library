import "./Card.css"
import Download from "../Icon/Download"

export default function Card({ title="Default Title", info="Lorem ipsum ...", path="#", fileName="blank.not"}) {

    function download(path, fileName) {

        const link = document.createElement("a")

        link.href = path
        link.download = fileName

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

    }

    return (
        <>
            <div className="card-container">
                <div onClick={() => download(path, fileName)} className="download-container">
                    <Download />
                </div>
                <span className="card">
                    <h1>{title}</h1>
                    <p>{info}</p>
                </span>
            </div>
        </>
    )
}
import { Link } from "react-router-dom";
import "./notFound.css"


const NotFound  = () => {

    return (
        <div className="notfound-container">
            <h1>Oops, looks like you're lost! Click  <Link to="/">HERE</Link> to back home.</h1>
            <img src="../../images/notfound.png" alt="not found" />
        </div>
    )
}

export default NotFound
import "./desktopOnly.css"

const DesktopOnly  = () => {
    return (
        <div className="desktop-container">
            <h1>
                Oops, looks like you're trying to access ReClaim from a mobile screen. 
                ReClaim is a desktop-only site. The mobile version is currently being developed.
                Thank you for your patience! 
            </h1>
            <img src="../../images/app.png" alt="app coming soon" />
        </div>
    )
}

export default DesktopOnly;
import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/profile.css"
import React, { useEffect, useState } from "react"


const Profile= () => {
    const [display, setDisplay] = useState("");
    const [privacy, setPrivacy] = useState("");
    const [user, setUser] = useState("");
    const [help, setHelp] = useState("");

    const contactInfoDisplay = () => {
        setDisplay(!display)
    }
    const privacyInfoDisplay = () => {
        setPrivacy(!privacy)
        setDisplay(!display)
    }

    const userInfoDisplay = () => {
        setUser(!user)
    }

    const helpInfoDisplay = () => {
        setHelp(!help)
    }



useEffect((display) => {
    setDisplay(false)
    setPrivacy(false)
    setUser(false)
    setHelp(false)
}, []);

console.log(display)
    return (
        <div>
            <MarketNav/>
            <section className="profile-container">
                <h1>Welcome, @User</h1>
                <section className="profile-section">
                    <div className="left-profile-div">
                        <img src="./images/user.png" alt="user" />
                        <section className="left-profile-categories">
                           <div>
                                <p onMouseOver={contactInfoDisplay}>Contact information</p>
                                <p onMouseOver={privacyInfoDisplay}>Privacy Settings</p>
                                <p onMouseOver={userInfoDisplay}>User Agreement</p>
                                <p onMouseOver={helpInfoDisplay}>Help & Support</p>
                            </div>
                        </section>
                    </div>
                    <div className="right-profile-div">
                        <section className={display ? "contact-info" : "hidden"}>
                            <h1>contact</h1>
                            <h1>contact</h1>
                            <h1>contact</h1>
                        </section>
                        <section className={privacy? "privacy-info" : "hidden"}>
                            <h1>privacy</h1>
                            <h1>privacy</h1>
                            <h1>privacy</h1>
                        </section>
                        <section className={user ? "contact-info" : "hidden"}>
                            <h1>agreement</h1>
                            <h1>agreement</h1>
                            <h1>agreement</h1>
                        </section>
                        <section className={help ? "help-info" : "hidden"}>
                            <h1>help</h1>
                            <h1>help</h1>
                            <h1>help</h1>
                        </section>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;
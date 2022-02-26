import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/profile.css"
import React from "react"


const Profile= () => {
    return (
        <div>
            <MarketNav/>
            <section className="likedContainer">
                <h1>profile</h1>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;
import { Link } from "react-router-dom";
import "../css/marketNav.css"
import React, { useState } from "react"
import { logout } from "../pages/firebaseConfig"

export default function MarketNav(){

const [loading, setLoading] = useState(false);

    async function handleLogout() {
        try {
            setLoading(true);
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    return(
        <div>
            <nav>
                <section className="nav-inner">
                    <Link to='/'>
                        <section className="logo-section">
                            <img src="../images/reclaim.png" alt="reclaim logo" />
                            <p><span class="logo-half">Re</span>Claim</p>
                        </section>
                    </Link>
                        <section>
                            <img src="../images/trashIcon.png" alt="basket icon" />
                            <a href="./marketfeed" className="links">MarketFeed</a>
                        </section>
                        <section>
                            <img src="../images/heartIcon.png" alt="heart icon" />
                            <a href="./liked" className="links">Liked Batches</a>
                        </section>
                        <section>
                            <img src="../images/fireIcon.png" alt="fire icon" />
                            <a href="./claimed" className="links">Claimed Batches</a>
                        </section>
                        <section>
                            <img src="../images/fireIcon.png" alt="fire icon" />
                            <a href="./addbatch" className="links">Add Batch</a>
                        </section>
                        <section>
                            <img src="../images/profile.png" alt="profile icon" id="profileIcon" />
                            <a href="./profile" className="links">Profile</a>
                        </section>
                        <section>
                          <Link to="/login"> <button onClick={ handleLogout}> LOG OUT </button> </Link>
                        </section>
                </section>
            </nav>
        </div>
    )
}
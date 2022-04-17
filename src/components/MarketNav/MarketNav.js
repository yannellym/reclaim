import { Link } from "react-router-dom";
import "./marketNav.css";
import React, { useState } from "react";
import { logout } from "../../pages/firebaseConfig/firebaseConfig";
import MarketSidebar from "../../components/MarketNav/MarketSidebar";

export default function MarketNav(){

    async function handleLogout() {
        try {
            await logout();
        } catch {
            alert("Error!");
        }
    }

    return(
        <div>
            <section className="marketnav">
                <section className="nav-inner">
                    <Link to='/'>
                        <section className="logo-section">
                            <img src="../images/reclaim.png" alt="reclaim logo" />
                            <p><span class="logo-half">Re</span>Claim</p>
                        </section>
                    </Link>
                        <section>
                            <img src="https://img.icons8.com/pastel-glyph/64/ffffff/shopping-basket-2--v1.png" alt="basket icon" />
                            <a href="./marketfeed" className="links">MarketFeed</a>
                        </section>
                        <section>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/like--v1.png" alt="heart icon" />
                            <a href="./liked" className="links">Liked Batches</a>
                        </section>
                        <section>
                            <img src="https://img.icons8.com/glyph-neue/64/ffffff/fire-element.png" alt="fire icon" />
                            <a href="./claimed" className="links">Claimed Batches</a>
                        </section>
                        <section>
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/add--v1.png" alt="cross icon" />
                            <a href="./addbatch" className="links">Add Batch</a>
                        </section>
                        <section>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/gender-neutral-user.png" alt="profile icon" />
                            <a href="./profile" className="links">Profile</a>
                        </section>
                        <section>
                          <Link to="/login"> <button onClick={ handleLogout}> LOG OUT </button> </Link>
                        </section>
                </section>

                <section className="mobile-menu">
                    <section id="mobile-menu-inner">
                        <MarketSidebar pageWrapId={"page-wrap"} outerContainerId={"mobile-menu-inner"} />   
                        <Link to='/'>
                            <section className="logo-section-home">
                                <img src="../images/reclaim.png" alt="reclaim logo" />
                                <p><span class="logo-half-home">Re</span>Claim</p>
                            </section>
                        </Link>
                        
                     </section>
                </section>
            </section>
        </div>
    )
}
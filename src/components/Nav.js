import Button from "./Button"
import {Link} from "react-router-dom";
import "../css/homeNav.css"
import React from "react"
import { useAuth } from "../pages/firebaseConfig"

export default function Nav(){

    const currentUser = useAuth();

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
                    <a href="./#howitworks" className="link">How it works</a>
                    <a href="./#facts" className="link">Facts</a>
                    <a href="./#goal" className="link">Goal</a>
                    <a href="./#aboutus" className="link">About Us</a>
                    <Link to={currentUser? '/marketfeed' : '/signup'}> <Button/></Link>
                </section>
            </nav>
        </div>
    )
}
import Button from "../Button/Button"
import {Link} from "react-router-dom";
import "./Nav.css"
import React from "react"
import { useAuth } from "../../pages/firebaseConfig/firebaseConfig"
import Sidebar from "./Sidebar"
export default function Nav(){

    const currentUser = useAuth();

    return(
        <div>
            <nav>
                <section className="nav-inner-home">
                    <Link to='/'>
                        <section className="logo-section-home">
                            <img src="../images/reclaim.png" alt="reclaim logo" />
                            <p><span class="logo-half-home">Re</span>Claim</p>
                        </section>
                    </Link>
                    <section className="info">
                        <a href="./#howitworks" className="link">How it works</a>
                        <a href="./#facts" className="link">Facts</a>
                        <a href="./#goal" className="link">Goal</a>
                        <a href="./#aboutus" className="link">About Us</a>
                    </section>
                    <Link to={currentUser? '/marketfeed' : '/login'}> <Button className="nav-btn" /></Link>
                </section>
                
                <section className="mobile-menu">
                    <section id="mobile-menu-inner">
                        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"mobile-menu-inner"} />   
                        <Link to='/'>
                            <section className="logo-section-home">
                                <img src="../images/reclaim.png" alt="reclaim logo" />
                                <p><span class="logo-half-home">Re</span>Claim</p>
                            </section>
                        </Link>
                        
                     </section>
                </section>
            </nav>
           
        </div>
    )
}
import {Link} from "react-router-dom";
import Nav from "../../components/Nav/Nav.js"
import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Swiper/Swiper";
import "./home.css"
import React from "react"
import { useAuth } from "../firebaseConfig/firebaseConfig"
import SideBar from "../../components/Nav/Sidebar.js"
const Home  = () => {
    const currentUser = useAuth();

    return (
        <div>
            <Nav />
            <section className="hero">
                <section className="hero-left">
                    <div className="hero-word-box">
                        <p>SHARE RECYCLABLES.</p>
                        <p>COLLECT RECYCLABLES.</p>
                        <p>RECLAIM THE EARTH.</p>
                        <p>SAVE THE WORLD.</p>
                    </div>
                    <section className="hero-btn-div">
                        <Link to={currentUser? '/marketfeed' : '/signup'}><button className="hero-btn">SIGN UP NOW</button></Link>
                    </section>
                </section>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </section>

            {/* How */}

            <div className="how" id="howitworks">
            <section className="how-title">
                <h1>How It Works</h1>
                <img src="./images/recycleLogo.png" alt="recycle logo" className="recycle-logo"/>
            </section>
            <section className="how-box">
                <section className="how-left">
                <p class="inner-box-title">Posting</p>
                        <section className="inner-boxes">
                            <section className="innerbox-img">
                                <img src="./images/bag.png" alt="bag icon" />
                            </section>
                            <section className="innerbox-desc">
                                <h2>Pack Goods</h2>
                                <p>Put your goods in a plastic bag, or any sort of container.</p>
                            </section>
                        </section>
                        <section className="inner-boxes">
                             <section className="innerbox-img">
                                <img src="./images/paper.png" alt="paper icon" />
                            </section>
                            <section className="innerbox-desc">
                                <h2>Enter Details</h2>
                                <p>Enter information about your batch of goods.</p>
                            </section>
                        </section>
                        <section className="inner-boxes">
                            <section className="innerbox-img">
                                <img src="./images/sprout.png" alt="world icon" />
                            </section>
                            <section className="innerbox-desc">
                                <h2>Post Batch</h2>
                                <p>Post the batch of recycable goods on the marketplace.</p>
                            </section>
                        </section>
                    </section>

                <section className="how-right">
                    <p class="inner-box-title">Collecting</p>
                        <section className="inner-boxes">
                            <section className="innerbox-img">
                                <img src="./images/check.png" alt="eye icon" />
                            </section>
                            <section className="innerbox-desc">
                                <h2>Check Availability</h2>
                                <p>Scroll through a list of batches that are available in your area. </p>
                            </section>
                        </section>
                        <section className="inner-boxes">
                             <section className="innerbox-img">
                                <img src="./images/click.png" alt="claim icon" />
                            </section>
                            <section className="innerbox-desc">
                                <h2>Claim Batch</h2>
                                <p>Select the batch you’re interested in and click “claim”.</p>
                            </section>
                        </section>
                        <section className="inner-boxes">
                            <section className="innerbox-img">
                                <img src="./images/map.png" alt="map icon" />
                            </section>
                            <section className="innerbox-desc">
                                <h2>Pick Up</h2>
                                <p>Confirm location and collect your goods!</p>
                            </section>
                        </section>
                    </section>
            </section>
        </div>

     {/* Facts */}
     <div class="custom-shape-divider-bottom-1649956720">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
        <div className="facts">
            <section className="facts-title">
               <h1>Top Recycling Facts</h1>
               <img src="./images/fact.png" alt="facts icon" />
            </section>
            <Slide />
        </div>
    
     {/* Goal */}
    
        <div className="goal" id="goal">  
            <section className="goal-title">
                <h1> Our Goal</h1>
                <img src="./images/bulb.png" alt="facts icon" />
            </section>
            <p>
                Our goal is to connect everyday people who are passionate about 
                recycling but may be strapped for time with those who have the 
                time and want to recycle more! We even want people who aren’t that
                 passionate about recycling to give us a try.
            </p>
            <section className="goal-circles">
                <p><span className="quantity ">3,000+ </span><br/>ACTIVE <br/>USERS</p>
                <p><span className="quantity">30,000K </span><br/>TONS RECYCLED</p>
                <p><span className="quantity">1</span><br/>DEDICATED TEAM</p>
            </section>
            <p>
                We understand sometimes people feel like they put in a lot of 
                effort but do not see the reward. We want to change that by 
                providing both those who recycle their eligible waste and those 
                who take it with more incentives to do so.
            </p>
        </div>

        {/* About */}
        <div className="about" id="aboutus">
            <section className="about-box">
                <h1>About Us</h1>
                <section className="about-people">
                    <section className="people-box">
                        <img src="./images/person3.png" alt="person 1" />
                        <h3>Dan Lu</h3>
                    </section>
                    <section className="people-box">
                        <img src="./images/person2.png" alt="person 2" />
                        <h3>Lui Br</h3>
                    </section>
                    <section className="people-box">
                        <img src="./images/person3.png" alt="person 3" />
                        <h3>Josh Lee</h3>
                    </section>
                </section>
                <p className="about-founders">
                    In 2021, our founders, Daniel Li, Kessler Lock, and Luis 
                    Brito believed there had to be a better way to improve 
                    the outdated, expensive and inefficient process of commercial 
                    recycling and waste management - And from this belief, ReClaim 
                    was born.
                </p>
            </section>
        </div>
        <Footer />
        </div>
       
    );
};

export default Home;
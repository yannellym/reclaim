import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/liked.css"
import React from "react"
import {Link} from "react-router-dom";




const Liked = (props) => {
    return (
        <div>
            <MarketNav/>
            <section className="likedContainer">
                <section className="earthContainer">
                    <img src="../images/earth.png" alt="earth" />
                    <p>
                        Thank you for claiming these batches and
                        helping to save <br/> the world one recycle at a time!
                    </p>
                </section>
                <h1>Liked Batches</h1>
                <section className="likedBatches">
                {/* {<Batch {...props.details.find(item=> item.liked === true)} />} */}
                </section>
                <section className="more">
                    <p>
                        Want more batches? click the “+” button 
                        below and be redirected to MarketFeed.
                    </p>
                    <Link to='/marketfeed'><button id="buttonAdd">+</button></Link>
                </section>
                <img src="../images/plant.png" alt="plant logo" className="plant" />
            </section>
            <Footer />
        </div>
    );
};

export default Liked;
import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import Badge from "../components/Badge"
import "../css/liked.css"



const Liked = () => {
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
                <h1>Claimed Batches</h1>
                <section className="likedBatches">
                    <Badge />
                    <Badge />
                </section>
                <section className="more">
                    <p>
                        Want more batches? click the “+” button 
                        below and be redirected to MarketFeed.
                    </p>
                    <button id="buttonAdd">+</button>
                </section>
                <img src="../images/plant.png" alt="plant logo" className="plant" />
            </section>
            <Footer />
        </div>
    );
};

export default Liked;
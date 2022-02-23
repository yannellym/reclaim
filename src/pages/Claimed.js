import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/claimed.css"
import Badge from "../components/Badge"




const Claimed = () => {
    return (
        <div>
        <MarketNav/>
        <section className="claimedContainer">
            <section className="earthcontainer">
                <section className="earthcontainer-inner">
                    <p>
                        Thank you for claiming these batches and
                        helping to save <br/> the world one recycle at a time!
                    </p>
                    <img src="../images/earthparty.png" alt="earth party" />
                </section>
            </section>
            <h1>Claimed Batches</h1>
            <section className="likedBatches">
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

export default Claimed;
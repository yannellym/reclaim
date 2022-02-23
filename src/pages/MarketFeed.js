import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/marketFeed.css"
import BasicSelect from "../components/BasicSelect"
import Badge from "../components/Badge"


const MarketFeed = () => {
    return (
        <div className="marketFeed">
            <MarketNav/>
            <section className="logoSearchBox">
                <div className="market-box">
                    <h1>MarketFeed</h1>
                    <img src="../images/market.png" alt="market logo" />
                </div>
                <div className="search-box">
                    <div className="bar-box">
                        <input type="text" placeholder="Search for a location..."/>
                        <button>SEARCH</button>
                    </div>
                    <div className="categories">
                        <section>
                            <BasicSelect />
                        </section>
                    </div>
                </div>
                <section className="world-box">
                    <p>
                        The MarketFeed is a place where you can find 
                        goods to recycle! These goods come from different
                        households that would like to donate the items. Browse 
                        through the batches below and see how you can help save 
                        the world one good(recycable) at a time!
                     </p>
                    <img src="../images/reclaim.png" alt="reclaim logo" />
                </section>
            </section>
            <section className="body">
                <section className="badges">
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                </section>
                <section className="displayedBadge">
                    <h1>Hello1</h1>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default MarketFeed;
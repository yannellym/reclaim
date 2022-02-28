import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/marketFeed.css"
import BasicSelect from "../components/BasicSelect"
import Badge from "../components/Badge"
import React from "react"
import Data from "../Data";
import BadgeDetails from "../components/BadgeDetails"

const MarketFeed = () => {
    let [currentBatch, setCurrentBatch] = React.useState({ 
        batches: Data,
        currBatch:null,
        showComponent: false,
        newBatch: {},
    })

    const batchRecord = Data.map((item)=> {
        return (
            <Badge
                key={item.id}
                item={item}
                handleDetails={handleDetails}
            />
        )
    })      
   function handleDetails(badgekey){
      return  setCurrentBatch({currBatch: badgekey, showComponent: true})
    }
   
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
                    {batchRecord}
                </section>
                <section className="displayedBadge">
                {
                        currentBatch.showComponent? <BadgeDetails {...Data.find(item => item.id === currentBatch.currBatch )}> </BadgeDetails>
                    : 
                        <div><img src="../images/earth.png" alt="earth" className="earth-waiting" /><h1 className="save-title">Thank you for helping to save the earth!</h1></div> 
                }
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default MarketFeed;

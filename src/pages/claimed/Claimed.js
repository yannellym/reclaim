import MarketNav from "../../components/MarketNav/MarketNav"
import Footer from "../../components/Footer/Footer"
import "./claimed.css"
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { database } from "../firebaseConfig/firebaseConfig"
import ClaimedBatch from "../..//components/ClaimedBatches/ClaimedBatches.js"



const Claimed = (props) => {
    let [unclaimed, setUnclaimed] = useState(props.isClaimed)
    
    const [details, setDetails] = useState([]);

    const getData = async () =>{
        const batchesCol = collection(database, 'batches');
        const batchesSnapshot = await getDocs(batchesCol);
        const batchesList = batchesSnapshot.docs.map((doc) => (
            {...doc.data(), id: doc.id,
        }));
        setDetails(batchesList);
    }

    useEffect((unclaimed) => {
        getData();
        setUnclaimed(!unclaimed)
    }, [unclaimed]);

    let batchRecords = details.map((item) => {
        return ( item.isClaimed&&
            <ClaimedBatch
                key={item.id}
                id={item.id}
                item={item}
            />  
        )         
    })

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
                    <img src="../images/earth-party.png" alt="earth party" />
                </section>
            </section>
            <h1>Claimed Batches</h1>
            <section className="likedBatches">
               {batchRecords}
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

export default Claimed;
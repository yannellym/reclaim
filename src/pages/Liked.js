import MarketNav from "../components/MarketNav"
import Footer from "../components/Footer"
import "../css/liked.css"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore'
import { database } from "./firebaseConfig"
import Batch from "../components/Batch"



const Liked = (props) => {
    let [unliked, setUnliked] = useState(props.liked)
    
    const [details, setDetails] = useState([]);

    const getData = async () =>{
        const batchesCol = collection(database, 'batches');
        const batchesSnapshot = await getDocs(batchesCol);
        const batchesList = batchesSnapshot.docs.map((doc) => (
            {...doc.data(), id: doc.id,
        }));
        setDetails(batchesList);
    }

    useEffect(() => {
        getData();
        setUnliked(!unliked)
    }, [unliked]);

    let batchRecords = details.map((item) => {
        return ( item.liked&&
            <Batch
                key={item.id}
                id={item.id}
                item={item}
            />  
        )         
    })

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

export default Liked;
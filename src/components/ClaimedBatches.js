import "../css/claimedbatches.css"
import React, { useState, useEffect } from "react"
import ClaimedButton from "./ClaimedButton"
import { collection, doc, updateDoc } from 'firebase/firestore'
import { database } from "../pages/firebaseConfig"
import { getDocs } from 'firebase/firestore'

export default function ClaimedBatch (props){
    let [unclaimed, setUnclaimed] = useState(props.isClaimed)
    const [availability, setAvailability] = useState(props.available) 
    const [batchClaimed, setBatchClaimed] = useState(props.isClaimed); 
    const [nowAvailable, setNowAvailable] = useState(false)

    const [details, setDetails] = useState([]);

    const getData = async () =>{
        const batchesCol = collection(database, 'batches');
        const batchesSnapshot = await getDocs(batchesCol);
        const batchesList = batchesSnapshot.docs.map((doc) => (
            {...doc.data(), id: doc.id,
        }));
        setDetails(batchesList);
    }

    const handleClaim = async (id, isClaimed) =>{
        const batchDoc = doc(database, "batches", id)
        const newClaim = {isClaimed: !isClaimed}
        await updateDoc(batchDoc, newClaim)
    }
    const handleAvailability= async (id, available) =>{
        const batchDoc = doc(database, "batches", id)
        const newAvailability = {available: !available}
        await updateDoc(batchDoc, newAvailability)
    }
    
    useEffect((unclaimed) => {
        getData();
        setUnclaimed(!unclaimed)
    }, [unclaimed]);

    function claimStatus(){
        handleClaim(props.id, !batchClaimed) 
        handleAvailability(props.id, availability)
        setNowAvailable(!nowAvailable)
    }

    return(
        <div>
            {nowAvailable ? <h1 className="unclaimedMessage">Batch successfully unclaimed! </h1> :
                <div className="claimed-batch">
                    <h1>{props.item.title}</h1>
                    <section className="badge-inner">
                        <div className="batch-photo">
                            <img src={`./images/${props.item.img}`} alt="bottles" />
                        </div>
                        <div className="badge-right">
                            <section className="badge-right-first">
                                <div className="badge-location">
                                    <img src="../images/location.png" alt="location" />
                                    <p>{props.item.location}</p>
                                </div>
                                <div className="badge-button">
                                    <button onClick={claimStatus}>Unclaim
                                    </button>
                                </div> 
                            </section>
                            <section className="badge-right-second">
                                <h4>Description</h4>
                                    <p>{props.item.description}</p>
                                <section className="pickup">
                                    <p>Pick up info </p>
                                        <p>{props.item.address}</p>
                                        <p>{props.item.instructions}</p>
                                </section>
                            </section>
                        </div>
                    </section>
                </div>
            }
        </div>     
    )
}
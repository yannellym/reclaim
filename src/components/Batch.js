import "../css/batch.css"
import React, { useState, useEffect } from "react"
import ClaimedButton from "./ClaimedButton"
import { collection, doc, updateDoc } from 'firebase/firestore'
import { database } from "../pages/firebaseConfig"

export default function Badge(props){
    const [hearted, setHearted] = useState(props.item.liked)
    const batchesCollectionRef = collection(database, "batches")
   

    let badgeAvailability;
    let badgeBackground
    if (props.item.available) {
        badgeAvailability = "See More"
        badgeBackground = {
            backgroundColor: 'white'
        }
    } else if (!props.item.available) {
        badgeAvailability = "Claimed"
        badgeBackground = {
            backgroundColor: '#f6f6f6'
        }
    }

    function displayDetails(){
        props.handleDetails(props.item.id)
    }

    let heartIcon = hearted? "heartfilled.png": "heart.png"

    function toggleLiked(){
        setHearted(prevItem => !prevItem)
        like(props.item.id, !hearted)
    }

    const like = async (id, liked) =>{
        const batchDoc = doc(database, "batches", id)
        const newLike = {liked: liked}
        await updateDoc(batchDoc, newLike)
    }



  return(
        <div className="badge-container" style={badgeBackground}>
           <h1>{props.item.title}</h1>
           <section className="badge-inner">
               <div className="badge-left">
                    <img src={`./images/${props.item.img}`} alt="bottles" />
               </div>
               <div className="badge-right">
                    <section className="badge-right-first">
                        <div className="badge-location">
                            <img src="../images/location.png" alt="location" />
                            <p>{props.item.location}</p>
                        </div>
                        {badgeAvailability === "See More"? 
                        <div className="badge-button">
                            <button onClick={displayDetails}>
                            {badgeAvailability}
                            </button>
                        </div> 
                        : 
                        <ClaimedButton onClick={displayDetails} />
                        }
                    </section>
                    <section className="badge-right-second">
                        <h4>Description</h4>
                        <p>{props.item.description}</p>
                    </section>
                    <section className="heart">
                         <img src={`../images/${heartIcon}`} onClick={toggleLiked} alt="heart icon"/>
                    </section>
                    
               </div>

           </section>
        </div>     
    )
}
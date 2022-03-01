import "../css/badge.css"
import React, { useState } from "react"
import ClaimedButton from "./ClaimedButton"
import Heart from "react-animated-heart";
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { database } from "../pages/firebaseConfig"

export default function Badge(props){
    let [hearted, setHearted] = React.useState(props.item.liked)
    const [isClick, setClick] = useState(props.item.liked);
    // const [claimed, setClaimed] = useState(false)
    const batchesCollectionRef = collection(database, "batches")

    let badgeAvailability;
    if (props.item.available === true) {
        badgeAvailability = "See More"
    } else if (props.item.available === false) {
        badgeAvailability = "claimed"
    }

    function displayDetails(){
        props.handleDetails(props.item.id)
    }

    
    function hearts(){props.item.liked=!props.item.liked};
    
    function state(){
        toggleLiked();
        hearts();
        like(props.item.id, props.item.liked)
    }

    const like = async (id, liked) =>{
        const batchDoc = doc(database, "batches", id)
        const newLike = {liked: !liked}
        await updateDoc(batchDoc, newLike)
    }
    let heartIcon = props.item.liked? "heartfilled.png": "heart.png"

    function toggleLiked(){
        setHearted(prevItem => !prevItem.liked)
    }
  return(
        <div className="badge-container">
           <h1>{props.item.title}</h1>
           <section className="badge-inner">
               <div className="badge-left">
                    <img src={`../images/${props.item.img}`} alt="bottles" />
               </div>
               <div className="badge-right">
                    <section className="badge-right-first">
                        <div className="badge-location">
                            <img src="../images/location.png" alt="location" />
                            <p>{props.item.location}</p>
                        </div>
                        {badgeAvailability === "See More"? 
                        <div className="badge-button">
                            <button  onClick={displayDetails}>
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
                         <img src={`../images/${heartIcon}`} onClick={state} alt="heart icon"/>
                    </section>
                    
               </div>

           </section>
        </div>     
    )
}
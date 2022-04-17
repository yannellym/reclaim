import "./batch.css";
import React, { useState, useEffect } from "react";
import ClaimedButton from "../ClaimedButton/ClaimedButton.js";
import { collection, doc, updateDoc } from 'firebase/firestore';
import { database } from "../../pages/firebaseConfig/firebaseConfig";

export default function Batch(props){
    const [hearted, setHearted] = useState(props.item.liked);
    const batchesCollectionRef = collection(database, "batches");
    const [imageOfBatch] = useState(props.item.img.slice(12));
    const [imgUrl, setImgUrl] = useState("");

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
      <div>
        <div className="badge-container" style={badgeBackground}>
           <h1>{props.item.title}</h1>
           <section className="badge-inner">
               <div className="badge-left">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/reclaim-react.appspot.com/o/images%2F${imageOfBatch}?alt=media`} alt="recyclable" />
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

        {/* Tablet version */}

        <div className="badge-tablet-container" style={badgeBackground}>
           <h1>{props.item.title}</h1>
           <section className="badge-inner">
               <div className="badge-left">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/reclaim-react.appspot.com/o/images%2F${imageOfBatch}?alt=media`} alt="recyclable" />
               </div>
               <div className="badge-right">
                    <section className="badge-right-first">
                        <div className="badge-location">
                            <img src="https://img.icons8.com/color/48/000000/marker--v1.png" alt="location" />
                            <p>{props.item.location}</p>
                        </div>
                        
                    </section>
                    <section className="badge-right-second">
                        <h4>Description</h4>
                        <p>{props.item.description}</p>
                    </section>
                    <section className="action-buttons">
                    {badgeAvailability === "See More"? 
                        <div className="badge-button">
                            <button onClick={displayDetails}>
                            {badgeAvailability}
                            </button>
                        </div> 
                        : 
                        <ClaimedButton onClick={displayDetails} />
                        }
                        <img src={`../images/${heartIcon}`} onClick={toggleLiked} alt="heart icon"/>
                    </section>
               </div>
           </section>
        </div> 

    </div>   
   )
}



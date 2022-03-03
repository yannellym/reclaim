import "../css/badgeDetails.css"
import React, { useEffect, useState }from "react"
import JSConfetti from 'js-confetti'
import ClaimedButton from "./ClaimedButton"
import { collection, doc, updateDoc } from 'firebase/firestore'
import { database } from "../pages/firebaseConfig"


export default function BadgeDetails(props){

    // updating Data

const [claimed, setClaimed] = useState(false)
const [availability, setAvailability] = useState(true)
const batchesCollectionRef = collection(database, "batches")
let [batchClaimed, setBatchClaimed] = useState(props.isClaimed);

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

function showPickUpDetails(){
    celebration();
    showPickUp();
    claimStatus() 
}

const jsConfetti = new JSConfetti()
let celebration = () => {
    jsConfetti.addConfetti({
    emojis: ['♻️'],
 })
}

function showPickUp(){
    setBatchClaimed(!batchClaimed)
}

function cancel(){
    setBatchClaimed(!batchClaimed)
    handleClaim(props.id, !claimed)
}

function claimStatus(){
    handleClaim(props.id, claimed)
    handleAvailability(props.id, availability)
}

  return(
        <div className="badge-details">
           <h1>{props.title}</h1>
           <section className="img-location">
                <img src={`../images/${props.img}`} alt="bottles" />
                <section>
                    <img src="../images/location.png" alt="location" />
                    <p>{props.location}</p>
                </section>
            </section>
            <section className="description">    
                <section>
                    <h4>Description</h4>
                    <p>{props.description}</p>
                </section>
            </section>
            <section className="btn-sec">
                {batchClaimed? <ClaimedButton /> :<button onClick={showPickUpDetails}>CLAIM</button>}
            </section>
            
             {batchClaimed?
            <section className="info-pickup">
            <hr/>
                <h4>INFORMATION FOR PICK UP</h4>
                    <section className="pickup-containers">
                        <div className="left-pickup">
                            <h4>Location:</h4>
                            <h4>Instructions:</h4>
                        </div>
                        <div className="right-pickup">
                            <p className="right-pickup-first">
                                <img src="../images/location.png" alt="location" />
                                <p>{props.address}</p>
                            </p>
                            <p className="right-pickup-second">
                                {props.instructions}</p>
                        </div>
                    </section>
                    <p onClick={cancel}>CANCEL PICK UP</p>
            </section>
            :
            <h1>You pick up information will display here</h1>
            }
        </div>     
    )
}
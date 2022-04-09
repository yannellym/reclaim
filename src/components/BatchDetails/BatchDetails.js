import "./batchDetails.css"
import React, { useState }from "react"
import JSConfetti from 'js-confetti'
import ClaimedButton from "../ClaimedButton/ClaimedButton.js"
import { collection, doc, updateDoc } from 'firebase/firestore'
import { database } from "../../pages/firebaseConfig/firebaseConfig"


export default function BatchDetails(props){

  

// const [claimed, setClaimed] = useState(props.item.isClaimed)
const [availability, setAvailability] = useState(props.available) //yes
const batchesCollectionRef = collection(database, "batches")
const [batchClaimed, setBatchClaimed] = useState(props.isClaimed); //false

//GOAL: take the item id, and "false" then use this to match it to the item id in the batches
//collection and set the isClaimed property to the opposite(true)
const handleClaim = async (id, isClaimed) =>{
    const batchDoc = doc(database, "batches", id)
    const newClaim = {isClaimed: !isClaimed}
    await updateDoc(batchDoc, newClaim)
}

//GOAL: take the item id, and "true" then use this to match it to the item id in the batches
//collection and set the available property to the opposite(false)
const handleAvailability= async (id, available) =>{
    const batchDoc = doc(database, "batches", id)
    const newAvailability = {available: !available}
    await updateDoc(batchDoc, newAvailability)
}

// GOAL: how confetti, show pickup details, and set claim isClaimed to "claimed"
function showPickUpDetails(){
    celebration();
    showPickUp();
    claimStatus() 
}

//confetti function
const jsConfetti = new JSConfetti()
let celebration = () => {
    jsConfetti.addConfetti({
    emojis: ['♻️'],
 })
}

//show details function
function showPickUp(){
    setBatchClaimed(!batchClaimed)
}

//Goal: cancel item, and set isClaimed to false, and availability to true
function cancel(){
    setBatchClaimed(!batchClaimed)
    handleClaim(props.id, batchClaimed)
    handleAvailability(props.id, !availability)
}

function claimStatus(){
    handleClaim(props.id, batchClaimed) // ID, false
    handleAvailability(props.id, availability) //ID, true
    // setAvailability(!availability)
}


  return(
        <div className="badge-details" onMouseLeave={() => window.location.reload()}>
           <h1>{props.title}</h1>
           <section className="img-location">
                <img src={`../images/${props.img}`} alt="recyclables" />
                <section>
                    <img src="../images/location.png" alt="location" />
                    <p>{props.location}</p>
                </section>
            </section>
            <section className="description">    
                <section>
                    <h4>Description</h4>
                    <p>{ props.description }</p>
                </section>
            </section>
            <section className="btn-sec">
                { batchClaimed? <ClaimedButton /> :<button onClick ={ showPickUpDetails }>CLAIM</button>}
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
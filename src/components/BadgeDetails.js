import "../css/badgeDetails.css"
import React from "react"
import JSConfetti from 'js-confetti'



export default function BadgeDetails(props){

let [claimed, setIsClaimed] = React.useState(props.isClaimed);

function showPickUpDetails(){
    celebration();
    showPickUp();
}

const jsConfetti = new JSConfetti()
let celebration = () => {
    jsConfetti.addConfetti({
    emojis: ['♻️'],
 })
}

function showPickUp(){
    setIsClaimed(!claimed)
}

function cancel(){
    setIsClaimed(!claimed)
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
                <button onClick={showPickUpDetails}>CLAIM</button>
            </section>
            
             {claimed ?
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
            console.log("oh no!")
            }
        </div>     
    )
}
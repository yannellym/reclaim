import "../css/badgeDetails.css"
import React from "react"
import JSConfetti from 'js-confetti'


export default function BadgeDetails(props){
 
    
const jsConfetti = new JSConfetti()
let celebration = () => {
jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
 })
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
                <button onClick={celebration}>CLAIM</button>
            </section>
            <hr/>
        </div>     
    )
}
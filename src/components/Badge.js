import "../css/badge.css"
import React from "react"
import Data from "../Data"
import ClaimedButton from "./ClaimedButton"

export default function Badge(props){
    let [item, setItem] = React.useState(Data)

    let badgeAvailability;
    if (props.item.available == true) {
        badgeAvailability = "Available"
    } else if (props.item.available == false) {
        badgeAvailability = "Claimed"
    }
    
    let heartIcon = item.liked? "heartfilled.png": "heart.png"

    function toggleLiked(){
        setItem(prevItems => {
            return {
                ...prevItems, liked: !prevItems.liked
            }
        })
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
                        {badgeAvailability === "Available"? 
                        <div className="badge-button"><button>{badgeAvailability}</button></div> 
                        : 
                        <div><ClaimedButton>{badgeAvailability}</ClaimedButton></div>}

                    </section>
                    <section className="badge-right-second">
                        <h4>Description</h4>
                        <p>{props.item.description}</p>
                    </section>
                   <img 
                    src={`../images/${heartIcon}`}
                    onClick={toggleLiked}
                    />
               </div>
           </section>
        </div>     
    )
}
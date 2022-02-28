import "../css/badge.css"
import React from "react"
import ClaimedButton from "./ClaimedButton"
import Heart from "react-animated-heart";

export default function Badge(props){
    let [hearted, setIsLiked] = React.useState(props.item.liked)
    const [isClick, setClick] = React.useState(false);

    let badgeAvailability;
    if (props.item.available === true) {
        badgeAvailability = "See More"
    } else if (props.item.available === false) {
        badgeAvailability = "Claimed"
    }
    
    let heartIcon = hearted? "heartfilled.png": "heart.png"

    function toggleLiked(){
        setIsLiked(!hearted)
    }

    function displayDetails(){
        props.handleDetails(props.item.id)
    }
    function hearts(){setClick(!isClick)};
    function state(){
        toggleLiked();
        hearts();
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
                        <div className="badge-button"><button  onClick={displayDetails}>{badgeAvailability}</button></div> 
                        : 
                        <div><ClaimedButton>{badgeAvailability}</ClaimedButton></div>}

                    </section>
                    <section className="badge-right-second">
                        <h4>Description</h4>
                        <p>{props.item.description}</p>
                    </section>
                   {/* <img 
                    src={`../images/${heartIcon}`}
                    onClick={toggleLiked}
                    alt="heart icon"
                    /> */}
                    <section className="heart">
                         <Heart isClick={isClick} onClick={state} />
                    </section>
                    
               </div>

           </section>
        </div>     
    )
}
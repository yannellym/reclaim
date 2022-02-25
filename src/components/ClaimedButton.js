import "../css/claimedButton.css"
import React from "react"

export default function Button(){
    return(
        <div>
            <input
                type="submit"
                value="Claimed"
                className="claimed-button">
            </input>
        </div>     
    )
}
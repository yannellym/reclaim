import "./button.css"
import React from "react"

export default function Button(){
    return(
        <div>
            <input
                type="submit"
                value="Log in"
                className="login-button">
            </input>
        </div>     
    )
}
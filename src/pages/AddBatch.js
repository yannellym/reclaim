import React from 'react';
import '../css/addBatch.css'
import { collection, addDoc } from 'firebase/firestore'
import { database } from "./firebaseConfig"
import { useState } from "react"

export default function AddBatch(){
    
    const [batches, setBatches] = useState({
        title: "",
        description: "",
        location: "",
        address: "",
        liked: false,
        isClaimed: false
    })
    
    const dbInstance = collection(database, "batches")

    const handleInputs = (e) => {
        let inputs = {[e.target.name] : e.target.value}
        setBatches({...batches, ...inputs})
    }

    const handleSubmit = () => {
        addDoc(dbInstance, batches)
        .then(() => {
            alert("Data sent!")
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
    <div className="addingBatch">
        <form class="add">
            <label for="title">Title:</label>
            <input type="text" name="title" required onChange={event => handleInputs(event)} />
            <label for="description">Description:</label>
            <input type="text" name="description" required onChange={event => handleInputs(event)}  />
            <label for="location">Location:</label>
            <input type="text" name="location" required onChange={event => handleInputs(event)}  />
            <label for="img">img:</label>
            <input type="text" name="img" required onChange={event => handleInputs(event)} />
            <label for="available">Available:</label>
            <input type="text" name="available" required onChange={event => handleInputs(event)}  /> 
            <label for="address">Address:</label>
            <input type="text" name="address" required onChange={event => handleInputs(event)}  /> 
            <label for="instructions">instructions</label>
            <input type="text" name="instructions" required onChange={event => handleInputs(event)}  /> 
        </form>
        <button onClick={handleSubmit}>Add batch</button>
    </div>
    )
}

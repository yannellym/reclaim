import React, { useState } from 'react';
import './addBatch.css'
import { collection, addDoc } from 'firebase/firestore'
import { database } from "../firebaseConfig/firebaseConfig"
import Footer from "../../components/Footer/Footer.js"
import MarketNav from "../../components/MarketNav/MarketNav"
import { storage_bucket } from "../firebaseConfig/firebaseConfig"
import {ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function AddBatch(){
    
    const [batches, setBatches] = useState({
        title: "",
        description: "",
        location: "",
        address: "",
        instructions: "",
        img: "",
        available: true,
        liked: false,
        isClaimed: false
    })
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);


    const [submitted, setSubmitted] = useState(false);
    const [invalid, setInvalid] = useState(false);
    
    
    const dbInstance = collection(database, "batches")

    const handleInputs = (e) => {
        let inputs = {[e.target.name] : e.target.value}
        setBatches({...batches, ...inputs})
        setImageUpload(e.target.files[0]);
    }
    const invalidInputs = () => {
        setInvalid(true)
    }
    const handleSubmit = (event) => {
        setSubmitted(true)
        addDoc(dbInstance, batches)
        const imageRef = ref(storage_bucket, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
        });
        })
        .then(() => {
            console.log('submitted')
        })
        .catch((err) => {
            setInvalid(true)
        })
    }
    
    return (
    <div className="addingBatch">
        <MarketNav/>
        <div className="formDiv">
            <h1> Add your own batch! </h1>
            <form class="add">
                <div className="field">
                    <label for="title">Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={batches.title}
                        required
                        placeholder="'Ex. Cans in a box'" 
                        onChange={event => handleInputs(event)}
                    />
                </div>
                <div className="field">
                    <label for="description" >Description:</label>
                    <input 
                        type="text" 
                        name="description"
                        value={batches.description} 
                        min="10" 
                        required 
                        onChange={event => handleInputs(event)} 
                     />
                </div>
                <div className="field">
                    <label for="location">Location:</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={batches.location}
                        min="5" 
                        placeholder="'Ex. Bronx, NY'" 
                        required onChange={event => handleInputs(event)}
                    />
                </div>
                <div className="field">
                    <label for="img">img:</label>
                    <input 
                        type="file" 
                        name="img" 
                        value={batches.img}
                        required 
                        onChange={event => handleInputs(event)}
                        
                    />
                </div>
                <div className="field">
                    <label for="available">Available:</label>
                    <input 
                        type="text" 
                        name="available" 
                        value={batches.available}
                        placeholder="Yes"
                        disabled={true}
                        required 
                        onChange={event => handleInputs(event)}
                    /> 
                </div>
                <div className="field">
                    <label for="address">Address:</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={batches.address}
                        placeholder="'Ex. 3604 Broadway New York, NY, 10031'" 
                        required 
                        onChange={event => handleInputs(event)}    
                    /> 
                </div>
                <div className="field">
                    <label for="instructions">Instructions:</label>
                    <input 
                        type="text" 
                        name="instructions" 
                        value={batches.instructions}
                        min="10" 
                        required 
                        onChange={event => handleInputs(event)}    
                    /> 
                </div>
            </form>
            <button onClick={batches.title !== "" && batches.description !== "" && batches.location !== "" ? handleSubmit : invalidInputs} className="addBatch">Submit</button>
            {submitted && <div class='success-message'>Success! Thank you for adding a new batch</div>}
            {invalid&& <span className="err-msg">Please fill out all the fields</span>}
        </div>
        <Footer />
    </div>
    )
}


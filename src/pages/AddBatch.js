import React from 'react';
import '../css/addBatch.css'
import { collection, addDoc } from 'firebase/firestore'
import { database } from "./firebaseConfig"
import { useState } from "react"
import Footer from "../components/Footer"
import MarketNav from "../components/MarketNav"
import { storage } from "./firebaseConfig"
import { storage_bucket } from "./firebaseConfig"
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"


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
    const [submitted, setSubmitted] = useState(false);
    const [invalid, setInvalid] = useState(false);
    
    
    const dbInstance = collection(database, "batches")

    const handleInputs = (e) => {
        let inputs = {[e.target.name] : e.target.value}
        setBatches({...batches, ...inputs})
    }

    const handleSubmit = (event) => {
        setSubmitted(true)
        addDoc(dbInstance, batches)
        .then(() => {
            console.log('submitted')
        })
        .catch((err) => {
            setInvalid(true)
        })
    }

   function handleAddBatch(e){
  
            //upload file to firebase
            let file = e.target.files[0]
            //create a reference to the file to be uploaded
            let fileRef = ref(storage_bucket, file.name);
            //upload the file
            const uploadTask = uploadBytesResumable(fileRef, file);
            //track progress
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                      default: console.log("all ok")
                  }
                }, 
                (error) => {
                  // Handle unsuccessful uploads
                }, 
                () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    var batchImg = downloadURL;
                    
                  });
                }
              );
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
                {invalid&& <span className="err-msg">Please enter a title</span>}
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
                {invalid&& <span className="err-msg">Please enter a description</span>}
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
                {invalid&& <span className="err-msg">Please enter a location</span>}
                <div className="field">
                    <label for="img">img:</label>
                    <input 
                        type="file" 
                        name="img" 
                        value={batches.img}
                        required 
                        onChange={handleAddBatch}
                    />
                </div>
                {invalid&&<span className="err-msg">Please upload an image</span>}
                <div className="field">
                    <label for="available">Available:</label>
                    <input 
                        type="text" 
                        name="available" 
                        value={batches.available}
                        placeholder="Yes"
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
                {invalid&&<span className="err-msg">Please enter an address</span>}
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
                {invalid&& <span className="err-msg">Please enter instructions</span>}
            </form>
            <button onClick={handleSubmit}>Add batch</button>
            {submitted && <div class='success-message'>Success! Thank you for adding a new batch</div>}
        </div>
        
        <Footer />
    </div>
    )
}


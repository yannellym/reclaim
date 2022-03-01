import "../css/form.css"
import React from "react"
import {Link} from "react-router-dom";
import { useState } from "react"
import { app, database } from "../pages/firebaseConfig"
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export default function Form(){

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })
   const auth = getAuth();
    const handleInputs = (e) => {
        let inputs ={[e.target.name] : e.target.value}
        setData({...data, ...inputs})
    }
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
           console.log(response.user) 
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    
    return(
    <div>
        <section className="signup-title">
            <p className="login-unselect"><Link to='/login'>Login</Link></p>
            <p className="signup-select">Sign Up</p>
            </section>
            <section className="signup-box">
            <h2>Welcome to our community!</h2>
            <p>Sign up to get started!</p>
            <section className="signup-inputs">
                <form onSubmit={handleSubmit}>
                    <section className="name-inputs">
                        <input 
                            type="text"
                            placeholder="First Name"
                            onChange={event => handleInputs(event)}
                            name="firstname"
                            className="first-name"
                        />
                        <input 
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            onChange={event => handleInputs(event)}
                        />
                    </section>
                    <section className="info-inputs">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={event => handleInputs(event)}
                    />
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={event => handleInputs(event)}
                        />
                    </section>
                    <section className="radio">
                    <input 
                        type="checkbox" 
                        id="is18" 
                        // checked={formData.is18}
                        onChange={event => handleInputs(event)}
                        name="is18"
                    />
                    <label htmlFor="is18">Are you 18 or older ?</label>
                    </section>
                    <Link to='/marketfeed'> <button onClick={handleSubmit}>Sign up</button></Link>
                </form>
            </section>
            <section>
                <p>Already have an account? <Link to='/login'><strong class="signup-link"> Login</strong></Link></p>
            </section>
        </section>
    </div>
    )
}






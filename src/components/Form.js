import "../css/form.css"
import React from "react"
import {Link} from "react-router-dom";

export default function Form(){
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            password:"",
            is18: true
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
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
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName} 
                            className="first-name"
                        />
                        <input 
                            type="text"
                            placeholder="Last Name"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                        />
                    </section>
                    <section className="info-inputs">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                        <input 
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                        />
                    </section>
                    <section className="radio">
                    <input 
                        type="checkbox" 
                        id="is18" 
                        checked={formData.is18}
                        onChange={handleChange}
                        name="is18"
                    />
                    <label htmlFor="is18">Are you 18 or older ?</label>
                    </section>
                    <Link to='/marketfeed'> <button>Sign up</button></Link>
                </form>
            </section>
            <section>
                <p>Already have an account? <Link to='/login'><strong class="signup-link"> Login</strong></Link></p>
            </section>
        </section>
    </div>
    )
}






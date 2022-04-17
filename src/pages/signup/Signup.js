import "./signup.css"
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer";
import React, { useState }  from "react"
import { Link } from "react-router-dom";
import { signup, useAuth } from "../firebaseConfig/firebaseConfig"



const Signup = () => {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })
   
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [error, setError] = useState('')

    const handleInputs = (e) => {
        let inputs ={[e.target.name] : e.target.value}
        setData({...data, ...inputs})
    }
    async function handleSubmit () {
        try{
            await signup(data.email, data.password)
        } catch {
            setError("please input valid email and password")
        }
        setLoading(false);
    }
    
    return (
        <div>
            <Nav />
            <div className="signup">
                <section className="signup-title">
                    <p className="login-unselect"><Link to='/login'>Sign in</Link></p>
                    <p className="signup-select">Sign Up</p>
                </section>
                <section className="signup-box">
                    <h1>Welcome to our community!</h1>
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
                                autoComplete="section-name"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                autoComplete="section-additional-name"
                                onChange={event => handleInputs(event)}
                                required
                            />
                        </section>
                        <section className="info-inputs">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="section-email"
                            onChange={event => handleInputs(event)}
                            required
                        />
                            <input 
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="section-current-password"
                                onChange={event => handleInputs(event)}
                                required
                            />
                        </section>
                        <section className="login-error">{error}</section>
                        <Link to={ data.email !== "" && data.password !== ""? '/marketfeed' : '/signup'}> <button className="signup-btn" disabled={loading || currentUser } onClick={handleSubmit}>Sign up</button></Link>
                    </form>
                </section>
                <section>
                    <p>Already have an account? <Link to='/login'><strong class="signup-link"> Sign in</strong></Link></p>
                </section>
             </section>
            </div>
        <Footer />
    </div>
    );
};

export default Signup;
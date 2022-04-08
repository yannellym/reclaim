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

    const handleInputs = (e) => {
        let inputs ={[e.target.name] : e.target.value}
        setData({...data, ...inputs})
    }
    async function handleSubmit () {
        try{
            await signup(data.email, data.password)
        } catch {
            alert("error!")
        }
        setLoading(false);
    }
    
    return (
        <div>
            <Nav />
            <div className="signup">
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
                                autoComplete="section-name"
                            />
                            <input 
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                autoComplete="section-additional-name"
                                onChange={event => handleInputs(event)}
                            />
                        </section>
                        <section className="info-inputs">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="section-email"
                            onChange={event => handleInputs(event)}
                        />
                            <input 
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="section-current-password"
                                onChange={event => handleInputs(event)}
                            />
                        </section>
                        <Link to='/marketfeed'> <button disabled={loading || currentUser } onClick={handleSubmit}>Sign up</button></Link>
                    </form>
                </section>
                <section>
                    <p>Already have an account? <Link to='/login'><strong class="signup-link"> Login</strong></Link></p>
                </section>
             </section>
            </div>
        <Footer />
    </div>
    );
};

export default Signup;
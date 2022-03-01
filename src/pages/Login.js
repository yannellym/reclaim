import {Link} from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import "../css/login.css"
import React from "react"
import { app, database } from "../pages/firebaseConfig"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"


const Login = () => {

    const [data, setData] = React.useState({
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
    const handleSubmit = () =>{
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
           console.log(response.user) 
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    

    return (
        <div>
            <Nav />
            <div className="login">
                <section className="login-title">
                    <p className="login-select">Log In</p>
                    <p className="signup-unselect"> <Link to='/signup'>Sign Up</Link></p>
                </section>
                <section className="login-box">
                    <h2>Welcome Back!</h2>
                    <p>Sign in to get started!</p>
                    <form> 
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
                        <Link to='/marketfeed'> 
                            <div>
                            <input
                                type="submit"
                                value="Log in"
                                className="login-button"
                                onClick={handleSubmit}
                                >
                            </input>
                            </div>
                        </Link>
                    </form>
                    <section className="login-button-bottom">
                        <p>Don't have an account? <Link to='/signup'><strong class="signup-link"> Sign Up</strong></Link></p>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
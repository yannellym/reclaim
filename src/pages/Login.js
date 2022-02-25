import {Link} from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import "../css/login.css"
import React from "react"


const Login = () => {
    const [loginData, setLoginData] = React.useState(
        {
            email: "", 
            password:"", 
        }
    )

    function handleSubmit(event){
        event.preventDefault()
        console.log(loginData)
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
                    <form onSubmit={handleSubmit}> 
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={loginData.email}
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                        />
                        <Link to='/marketfeed'> 
                            <div>
                            <input
                                type="submit"
                                value="Log in"
                                className="login-button"
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
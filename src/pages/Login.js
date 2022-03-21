import {Link} from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import "../css/login.css"
import React , { useState } from "react"
import { useAuth, login } from "../pages/firebaseConfig"


const Login = () => {

    const [data, setData] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const currentUser = useAuth();

 
    
    const handleInputs = (e) => {
        let inputs ={[e.target.name] : e.target.value}
        setData({...data, ...inputs})
    }

    async function handleLogin() {
        try{
            await login(data.email, data.password)
        } catch {
            
            setError("please input valid pass")
        }
        setLoading(false);
    }
    

    return (
        <div>
            <Nav />
            {currentUser ? <h1>you're logged in! <Link to='/marketfeed'><button>go to marketFeed</button></Link></h1> :
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
                        <section className="login-error">{error}</section>
                        <Link to={currentUser? '/marketfeed' : '/login'}> 
                            <div>
                            <input
                                type="submit"
                                value="Log in"
                                className="login-button"
                                
                                onClick={handleLogin}
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
            }
            <Footer />
        </div>
    );
};

export default Login;
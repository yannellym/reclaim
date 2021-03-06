import {Link} from "react-router-dom";
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer";
import "./login.css"
import React , { useState } from "react"
import { useAuth, login } from "../firebaseConfig/firebaseConfig"


const Login = () => {
    const [data, setData] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })

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
    }

    // const signin = () =>  {
    //     const auth = getAuth();
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         console.log(user)
    //         // ...
    //       }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //         console.log(errorMessage)
    //       });
    // }

    return (
        <div>
            <Nav />
           
            <div className="login">
                <section className="login-title">
                    <p className="login-select">Sign In</p>
                    <p className="signup-unselect"> <Link to='/signup'>Sign Up</Link></p>
                </section>
                <section className="login-box">
                    <h2>Welcome Back!</h2>
                    <p>Sign in to get started!</p>
                    <form className="login-form"> 
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
                        <section className="login-error">{error}</section>
                        <Link to={currentUser? '/marketfeed' : '/login'}> 
                      
                            <div>
                            <input
                                type="submit"
                                value="Sign In"
                                className="login-button"
                                onClick={handleLogin}
                            />
                            </div>
                        </Link>
                        <Link to='/marketfeed'><h1 className="guest">Sign In as a guest </h1> </Link>
                        <section className="login-button-bottom">
                        <p>Don't have an account? <Link to='/signup'><strong class="signup-link"> Sign Up</strong></Link></p>
                    </section>
                    </form>
                    
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
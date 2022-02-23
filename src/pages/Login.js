import Button from "../components/Button"
import {Link} from "react-router-dom";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import "../css/login.css"


const Login = () => {
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
                        <input type="text" placeholder="Email Address"></input>
                        <input  type="password" placeholder="Password"></input>
                    </form>
                    <section className="login-button">
                    <Link to='/marketfeed'> <Button /></Link>
                        <p>Don't have an account? <Link to='/signup'><strong class="signup-link"> Sign Up</strong></Link></p>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
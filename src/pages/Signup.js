import Button from "../components/Button"
import {Link} from "react-router-dom";
import "../css/signup.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer";


const Signup = () => {
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
                        <form>
                            <section className="name-inputs">
                                <input type="text" placeholder="First Name" className="first-name"></input>
                                <input type="text" placeholder="Last Name"></input>
                            </section>
                            <section className="info-inputs">
                                <input type="text" placeholder="Email Address"></input>
                                <input type="password" placeholder="Password"></input>
                            </section>
                            <section className="radio">
                                <label for="radio">I'm 18 years or older</label>
                                <input type="radio" name="radio"></input>
                            </section>
                        </form>
                    </section>
                    <section className="signup-button">
                        <Button />
                        <p>Already have an account? <Link to='/login'><strong class="signup-link"> Login</strong></Link></p>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;